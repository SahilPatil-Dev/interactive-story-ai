from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session

from db.dependancy import get_db
from models.job import StoryJob
from schemas.job import StoryJobResponse
from schemas.user import TokenResponse, UserRegister, UserLogin
from services.user_service import register_user, login_user

router = APIRouter(
    prefix="/auth",
    tags=["auth"]
)

@router.post("/register", response_model=TokenResponse)
def register(user: UserRegister, db: Session = Depends(get_db)):
    return register_user(db, user.username, user.email, user.password)

@router.post("/login", response_model= TokenResponse)
def login(user: UserLogin, db: Session = Depends(get_db)):
    return login_user(db, user.email, user.password)