from routes.transaction import router as transaction_router
from fastapi import FastAPI
from routes.history import router as history_router
from database import engine
from models import Base
from fastapi.middleware.cors import CORSMiddleware
from routes.analyze import router as analyze_router
from routes.chat import router as chat_router

# Create database tables
Base.metadata.create_all(bind=engine)

app = FastAPI(title="TrustChainUPI API")
app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:5173",
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(analyze_router)
app.include_router(transaction_router)
app.include_router(history_router)
app.include_router(chat_router)
@app.get("/")
def home():
    return {
        "message": "TrustChainUPI Backend Running 🚀"
    }