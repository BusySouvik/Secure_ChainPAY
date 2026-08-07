ERROR_DATABASE = {
    "U16": {
        "root_cause": "Beneficiary bank server timeout",
        "explanation": "The receiver's bank did not respond within the allowed time.",
        "recommendation": "Retry after 5 minutes."
    },

    "U30": {
        "root_cause": "Insufficient balance",
        "explanation": "The sender account has insufficient balance.",
        "recommendation": "Check account balance before retrying."
    },

    "91": {
        "root_cause": "Issuer bank unavailable",
        "explanation": "The issuing bank server is temporarily unavailable.",
        "recommendation": "Wait and retry later."
    }
}


def diagnose(error_code: str):
    return ERROR_DATABASE.get(
        error_code,
        {
            "root_cause": "Unknown Error",
            "explanation": "No diagnosis available.",
            "recommendation": "Contact bank support."
        }
    )