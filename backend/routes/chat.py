from fastapi import APIRouter
from pydantic import BaseModel

from services.ai_service import chat_with_gemini

router = APIRouter(
    prefix="/chat",
    tags=["AI Chat"]
)

class ChatRequest(BaseModel):
    message: str

@router.post("/")
def chat(request: ChatRequest):

    reply = chat_with_gemini(request.message)

    return {
        "reply": reply
    }