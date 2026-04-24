from fastapi import HTTPException
from sqlalchemy.orm import Session
from models.job import StoryJob

def job_status(db: Session, job_id: str):
    job = db.query(StoryJob).filter(StoryJob.job_id == job_id).first()

    if not job:
        raise HTTPException(status_code=404, detail="Job not found")

    return job
