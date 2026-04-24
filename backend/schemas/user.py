from pydantic import BaseModel,Field, EmailStr

class UserRegister(BaseModel):
    email: EmailStr
    username: str
    password: str = Field(min_length=6, max_length=128)

class UserLogin(BaseModel):
    email: EmailStr
    password: str
    
class TokenResponse(BaseModel):
    access_token: str
    token_type: str
    user_id: int