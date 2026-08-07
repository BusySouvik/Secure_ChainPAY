def calculate_risk(amount, status, error_code):

    risk = 10

    if amount > 10000:
        risk += 25

    if amount > 50000:
        risk += 20

    if status == "FAILED":
        risk += 25

    if error_code in ["U16", "91"]:
        risk += 15

    if risk > 100:
        risk = 100

    return risk