import os
from dotenv import load_dotenv
from google import genai
from google.genai.errors import ClientError

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
            model="models/gemini-3.5-flash",
            contents=prompt,
        )

        return response.text

    except ClientError as e:
        print("Gemini Error:", e)
        raise

    except Exception as e:
        print("Unexpected Gemini Error:", e)
        raise


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

If the question is unrelated, reply exactly:

"I specialize in banking and UPI assistance."

User:
{message}
"""

    try:

        response = client.models.generate_content(
            model="models/gemini-3.5-flash",
            contents=prompt,
        )

        return response.text

    except ClientError as e:
        print("Gemini Chat Error:", e)
        raise

    except Exception as e:
        print("Unexpected Chat Error:", e)
        raise