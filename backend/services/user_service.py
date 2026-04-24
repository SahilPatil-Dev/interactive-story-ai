from sqlalchemy.orm import Session
from fastapi import HTTPException

from models.user import User
from core.security import create_access_token, hash_password, verify_password

from sqlalchemy.exc import IntegrityError
from fastapi import HTTPException

def register_user(db, username, email, password):
    hashed_password = hash_password(password)

    user = User(
        username=username,
        email=email,
        hashed_password=hashed_password
    )


    try:
        db.add(user)
        db.commit()
        db.refresh(user)
    except IntegrityError:
        db.rollback()
        raise HTTPException(status_code=400, detail="Email or username already exists")

    token = create_access_token({"user_id": user.id})

    return {
        "access_token": token,
        "token_type": "bearer",
        "user_id": user.id
    }
    
    
def login_user(db: Session, email: str, password: str):
    user = db.query(User).filter(User.email == email).first()

    if not user:
        raise HTTPException(status_code=401, detail="Invalid Credentials")

    if not verify_password(password, user.hashed_password):
        raise HTTPException(status_code=401, detail="Invalid Credentials")
    
    token = create_access_token({
        "user_id": user.id
    })
    
    return {
        "access_token": token,
        "token_type": "bearer",
        "user_id": user.id
    }