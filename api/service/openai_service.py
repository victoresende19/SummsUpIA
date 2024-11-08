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
                "content": """ 

                Consegue fazer um resumo completo do texto disponibilizado? O resumo deve abranger todos os pontos-chave e ideias principais apresentados no texto original, condensando simultaneamente a informação num formato conciso e fácil de compreender. 
                Certifique-se de que o resumo inclui pormenores e exemplos relevantes que apoiem as ideias principais, evitando informações desnecessárias ou repetições. 
                A extensão do resumo deve ser adequada à extensão e complexidade do texto original, fornecendo uma visão geral clara e exacta sem omitir qualquer informação importante.
                Da mesma forma, o resumo deve ser claro, didático e em português. 
                Dê exemplos de aplicações do conteúdo.
                Para garantir a exatidão, leia o texto com atenção e preste atenção a quaisquer nuances ou complexidades da linguagem. 
                Além disso, o resumo deve evitar quaisquer preconceitos ou interpretações pessoais e manter-se objetivo e factual.
                """
            },
            {
                "role": "user",
                "content": content
            }
        ],
        # max_tokens=1000,
        temperature=0.1,
        top_p=1
    )
    return response.choices[0].message.content
