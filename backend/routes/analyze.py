from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
import traceback

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
    try:

        # Check duplicate transaction
        existing = (
            db.query(Transaction)
            .filter(Transaction.transaction_id == request.transaction_id)
            .first()
        )

        if existing:
            return {
                "transaction_id": existing.transaction_id,
                "status": existing.status,
                "root_cause": existing.diagnosis,
                "ai_explanation": existing.ai_explanation,
                "recommendation": existing.recommendation,
                "risk_score": existing.risk_score,
                "blockchain_hash": existing.blockchain_hash,
            }

        # Get diagnosis
        diagnosis = diagnose(request.error_code)

        # AI explanation
        ai_response = explain_error(
            diagnosis["root_cause"],
            diagnosis["recommendation"]
        )

        # Fraud detection
        risk = calculate_risk(
            request.amount,
            request.status,
            request.error_code
        )

        # Blockchain hash
        blockchain_hash = generate_hash(
            request.transaction_id,
            diagnosis["root_cause"]
        )

        # Save transaction
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
            "transaction_id": transaction.transaction_id,
            "status": transaction.status,
            "root_cause": transaction.diagnosis,
            "ai_explanation": transaction.ai_explanation,
            "recommendation": transaction.recommendation,
            "risk_score": transaction.risk_score,
            "blockchain_hash": transaction.blockchain_hash,
        }

    except Exception as e:
        traceback.print_exc()
        raise HTTPException(
            status_code=500,
            detail=str(e)
        )