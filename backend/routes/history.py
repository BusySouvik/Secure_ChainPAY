from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session

from database import get_db
from models import Transaction

router = APIRouter(
    prefix="/history",
    tags=["History"]
)


# ==========================
# Get all transactions
# ==========================

@router.get("/")
def get_history(db: Session = Depends(get_db)):
    return (
        db.query(Transaction)
        .order_by(Transaction.id.desc())
        .all()
    )


# ==========================
# Dashboard Statistics
# ==========================

@router.get("/dashboard/stats")
def dashboard_stats(db: Session = Depends(get_db)):

    total = db.query(Transaction).count()

    success = (
        db.query(Transaction)
        .filter(Transaction.status == "SUCCESS")
        .count()
    )

    failed = (
        db.query(Transaction)
        .filter(Transaction.status == "FAILED")
        .count()
    )

    pending = (
        db.query(Transaction)
        .filter(Transaction.status == "PENDING")
        .count()
    )

    fraud = (
        db.query(Transaction)
        .filter(Transaction.risk_score >= 70)
        .count()
    )

    return {
        "total_transactions": total,
        "successful": success,
        "failed": failed,
        "pending": pending,
        "fraud_alerts": fraud
    }


# ==========================
# Get Single Transaction
# ==========================

@router.get("/{transaction_id}")
def get_transaction(
    transaction_id: str,
    db: Session = Depends(get_db)
):

    transaction = (
        db.query(Transaction)
        .filter(Transaction.transaction_id == transaction_id)
        .first()
    )

    if transaction is None:
        raise HTTPException(
            status_code=404,
            detail="Transaction not found"
        )

    return transaction