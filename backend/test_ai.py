from services.ai_service import explain_error

print(
    explain_error(
        "Beneficiary bank timeout",
        "Retry after five minutes."
    )
)