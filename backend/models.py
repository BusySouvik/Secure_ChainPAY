from sqlalchemy import Column, Integer, String, Float, DateTime
from datetime import datetime
from database import Base
from sqlalchemy import Column, String

class Transaction(Base):
    __tablename__ = "transactions"

    id = Column(Integer, primary_key=True, index=True)

    transaction_id = Column(String, unique=True, nullable=False)

    sender_bank = Column(String, nullable=False)

    receiver_bank = Column(String, nullable=False)

    amount = Column(Float, nullable=False)

    status = Column(String, default="FAILED")

    error_code = Column(String)

    diagnosis = Column(String)

    ai_explanation = Column(String)

    recommendation = Column(String)

    risk_score = Column(Integer)

    blockchain_hash = Column(String)

    from sqlalchemy import Column, String


    created_at = Column(DateTime, default=datetime.utcnow)