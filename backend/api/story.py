import uuid
from typing import Optional
from datetime import datetime
from fastapi import APIRouter, Depends, HTTPException, Cookie, Response, BackgroundTasks
from sqlalchemy.orm import Session

from db.database import SessionLocal
from db.dependancy import get_db
from models.story import Story, StoryNode
from models.job import StoryJob
from schemas.story import (
    CompleteStoryNodeResponse, CompleteStoryResponse, CreateStoryRequest
)
from schemas.job import StoryJobResponse
from services.story_generator import StoryGenerator
from core.auth import get_current_user

router = APIRouter(
    prefix="/stories",
    tags=["stories"]
)

@router.post("/create", response_model=StoryJobResponse)
def create_story(
    request: CreateStoryRequest,
    background_tasks: BackgroundTasks,
    db: Session = Depends(get_db),
    current_user = Depends(get_current_user)
):
    job_id = str(uuid.uuid4())

    job = StoryJob(
        job_id=job_id,
        user_id=current_user.id,
        theme=request.theme,
        status="pending"
    )
    
    db.add(job)
    db.commit()

    background_tasks.add_task(
        generate_story_task,
        job_id=job_id,
        theme=request.theme,
        user_id=current_user.id  
    )

    return job

def generate_story_task(job_id: str, theme:str, user_id: int):
    db = SessionLocal()
    
    try:
        job = db.query(StoryJob).filter(StoryJob.job_id == job_id).first()

        if not job:
            return

        try:
            job.status = "processing"
            db.commit()

            story = StoryGenerator.generate_story(db, user_id, theme)

            job.story_id = story.id
            job.status = "completed"
            job.completed_at = datetime.now()
            db.commit()
        except Exception as e:
            job.status = "failed"
            job.completed_at = datetime.now()
            job.error = str(e)
            db.commit()
    finally:
        db.close()

@router.get("/{story_id}/complete", response_model=CompleteStoryResponse)
def get_complete_story(
    story_id: int,
    db: Session = Depends(get_db),
    current_user = Depends(get_current_user)
):
    
    story = db.query(Story).filter(Story.id == story_id).first()

    if not story:
        raise HTTPException(status_code=404, detail="Story not found")

    if story.user_id != current_user.id:
        raise HTTPException(status_code=403, detail="Not authorized")

    complete_story = build_complete_story_tree(db, story)

    if not complete_story:
        raise HTTPException(status_code=500, detail="Failed to build story")

    return complete_story

def build_complete_story_tree(db: Session, story: Story) -> CompleteStoryResponse:
    nodes = db.query(StoryNode).filter(StoryNode.story_id == story.id).all()

    if not nodes:
        raise HTTPException(status_code=500, detail="No story nodes found")

    node_dict = {}

    for node in nodes:
        node_response = CompleteStoryNodeResponse(
            id=node.id,
            content=node.content,
            is_ending=node.is_ending,
            is_winning_ending=node.is_winning_ending,
            options=node.options or []
        )
        node_dict[node.id] = node_response

    root_node = next((node for node in nodes if node.is_root), None)

    if not root_node:
        raise HTTPException(status_code=500, detail="Story root node not found")

    return CompleteStoryResponse(
        id=story.id,
        title=story.title,
        user_id = story.user_id,
        created_at=story.created_at,
        root_node=node_dict[root_node.id],
        all_nodes=node_dict
    )
