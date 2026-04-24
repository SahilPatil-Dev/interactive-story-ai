from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session

from db.dependancy import get_db
from schemas.job import StoryJobResponse
from core.auth import get_current_user
from services.job_service import job_status

router = APIRouter(
    prefix="/jobs",
    tags=["jobs"]
)

@router.get("/{job_id}", response_model=StoryJobResponse)
def get_job_status(
    job_id: str,
    db: Session = Depends(get_db),
    current_user = Depends(get_current_user)
):
    job = job_status(db, job_id)

    if job.user_id != current_user.id:
        raise HTTPException(status_code=403, detail="Not authorized")

    return job