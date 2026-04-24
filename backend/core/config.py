from pydantic import field_validator
from pydantic_settings import BaseSettings
from typing import List


class Settings(BaseSettings):
    API_PREFIX: str = "/api"
    DEBUG: bool = False

    DATABASE_URL: str
    GOOGLE_API_KEY: str
    SECRET_KEY: str

    ALLOWED_ORIGINS: List[str] = []

    @field_validator("ALLOWED_ORIGINS", mode="before")
    def parse_allowed_origins(cls, v):
        if not v:
            return []

        if isinstance(v, str):
            if v.strip() == "*":
                return ["*"]

        return [origin.strip() for origin in v.split(",") if origin.strip()]

        if isinstance(v, list):
            return v

        raise ValueError("Invalid ALLOWED_ORIGINS format")

    class Config:
        env_file = ".env"
        env_file_encoding = "utf-8"
        case_sensitive = True


settings = Settings()
