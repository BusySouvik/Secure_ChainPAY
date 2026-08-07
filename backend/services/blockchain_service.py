import hashlib

def generate_hash(transaction_id, diagnosis):

    data = f"{transaction_id}-{diagnosis}"

    return hashlib.sha256(
        data.encode()
    ).hexdigest()