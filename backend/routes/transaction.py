from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from database import get_db
from models import Transaction
from schemas import TransactionCreate

router = APIRouter(prefix="/transaction", tags=["Transaction"])


@router.post("/")
def create_transaction(
    transaction: TransactionCreate,
    db: Session = Depends(get_db)
):

    new_transaction = Transaction(
        transaction_id=transaction.transaction_id,
        sender_bank=transaction.sender_bank,
        receiver_bank=transaction.receiver_bank,
        amount=transaction.amount,
        status=transaction.status,
        error_code=transaction.error_code
    )

    db.add(new_transaction)
    db.commit()
    db.refresh(new_transaction)

    return {
        "message": "Transaction Saved Successfully",
        "id": new_transaction.id
    }