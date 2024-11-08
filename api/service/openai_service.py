from openai import OpenAI
from dotenv import load_dotenv
import os

load_dotenv()

client = OpenAI(api_key=os.getenv("OPENAI_API_KEY"))

def generate_openai_summary(content: str):
    response = client.chat.completions.create(
        model="gpt-4",
        messages=[
            {
                "role": "system",
                "content": "Faça um resumo do conteúdo disponibilizado de maneira clara, didática e em português. Dê exemplos de aplicações do conteúdo."
            },
            {
                "role": "user",
                "content": content
            }
        ],
        temperature=0.1,
        top_p=1
    )
    return response.choices[0].message.content
