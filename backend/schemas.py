from pydantic import BaseModel

# Used by /transaction API
class TransactionCreate(BaseModel):
    transaction_id: str
    sender_bank: str
    receiver_bank: str
    amount: float
    status: str
    error_code: str


# Used by /analyze API
class AnalyzeRequest(BaseModel):
    transaction_id: str
    sender_bank: str
    receiver_bank: str
    amount: float
    status: str
    error_code: str