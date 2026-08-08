import os
from dotenv import load_dotenv
from google import genai

load_dotenv()

client = genai.Client(
    api_key=os.getenv("GEMINI_API_KEY")
)


def explain_error(root_cause, recommendation):

    prompt = f"""
You are an AI banking assistant.

Root Cause:
{root_cause}

Recommendation:
{recommendation}

Explain this in simple language for a normal customer in under 50 words.
"""

    try:

        response = client.models.generate_content(
            model="gemini-2.5-flash",
            contents=prompt,
        )

        return response.text

    except Exception as e:

        print("Gemini Error:", e)

        return (
            f"The payment failed because {root_cause}. "
            f"Recommendation: {recommendation}"
        )


def chat_with_gemini(message):

    prompt = f"""
You are SecureChain AI.

You are an AI assistant for a UPI payment troubleshooting application.

Answer ONLY questions related to:

- UPI
- Banking
- Payment failures
- Fraud detection
- Blockchain verification
- SecureChainPay

If the question is unrelated, politely reply:

"I specialize in banking and UPI assistance."

User:
{message}
"""

    try:

        response = client.models.generate_content(
            model="gemini-2.5-flash",
            contents=prompt,
        )

        return response.text

    except Exception as e:

        print("Gemini Error:", e)

        return "Sorry, the AI service is temporarily unavailable."