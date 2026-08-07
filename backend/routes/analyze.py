from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from database import get_db
from models import Transaction
from schemas import AnalyzeRequest

from services.diagnosis_service import diagnose
from services.ai_service import explain_error
from services.fraud_service import calculate_risk
from services.blockchain_service import generate_hash

router = APIRouter(
    prefix="/analyze",
    tags=["Analysis"]
)


@router.post("/")
def analyze(
    request: AnalyzeRequest,
    db: Session = Depends(get_db)
):

    # Check duplicate transaction
    existing = db.query(Transaction).filter(
        Transaction.transaction_id == request.transaction_id
    ).first()

    if existing:
        return {
            "message": "Duplicate Transaction Detected",
            "transaction_id": existing.transaction_id,
            "risk_score": 100,
            "risk_level": "HIGH",
            "blockchain_hash": existing.blockchain_hash
        }

    # Diagnosis
    diagnosis = diagnose(request.error_code)

    # AI Explanation
    ai_response = explain_error(
        diagnosis["root_cause"],
        diagnosis["recommendation"]
    )

    # Fraud Analysis
    risk = calculate_risk(
        request.amount,
        request.status,
        request.error_code
    )

    # Blockchain Hash
    blockchain_hash = generate_hash(
        request.transaction_id,
        diagnosis["root_cause"]
    )

    # Save to database
    transaction = Transaction(
        transaction_id=request.transaction_id,
        sender_bank=request.sender_bank,
        receiver_bank=request.receiver_bank,
        amount=request.amount,
        status=request.status,
        error_code=request.error_code,
        diagnosis=diagnosis["root_cause"],
        ai_explanation=ai_response,
        recommendation=diagnosis["recommendation"],
        risk_score=risk,
        blockchain_hash=blockchain_hash
    )

    db.add(transaction)
    db.commit()
    db.refresh(transaction)

    return {
        "transaction_id": request.transaction_id,
        "root_cause": diagnosis["root_cause"],
        "ai_explanation": ai_response,
        "recommendation": diagnosis["recommendation"],
        "risk_score": risk,
        "blockchain_hash": blockchain_hash
    }