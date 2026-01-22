from google import genai

# 🔑 Paste your API key here
import os
from dotenv import load_dotenv
from google import genai

load_dotenv()

client = genai.Client(api_key=os.getenv("GEMINI_API_KEY"))


print("🤖 AI Question-Answering Bot (Free version)")
print("Type 'exit' to quit\n")

while True:
    user_input = input("You: ")

    if user_input.lower() == "exit":
        print("Tataa, See you later. 👋")
        break

    try:
        response = client.models.generate_content(
            model="models/gemini-2.5-flash",
            contents=[
                {
                    "role": "user",
                    "parts": [
                        {"text": f"Explain this in very simple words: {user_input}"}
                    ]
                }
            ]
        )

        print("\nAI:", response.text, "\n")

    except Exception as e:
        print("❌ Error:", e)
