# SummsUpIA
Sua plataforma definitiva para transformar longos documentos em resumos concisos, de maneira dinâmica, rápida e eficiente na leitura e compreensão de PDFs! A agente de IA SummsUpIA tem como objetivo fornecer uma aplicação que utiliza técnicas de inteligência artificial para resumir PDFs.

## Acesse 
Para facilitar o teste do SummsUpIA, foi desenvolvido um website que realiza consultas à API criada. A API foi criada através das bibliotecas FastAPI, PyPDF2, LangChain e OpenAI, em linguagem Python, e é necessário obter uma API_KEY da OpenAI, a qual você pode criar gratuitamente, basta [clicar aqui](https://openai.com/index/openai-api/). Além disso, visando a acessibilidade, criou-se a plataforma SummsUpIA por meio do framework React, em linguagem JavaScript. 

O deploy da API foi realizado utilizando o [Render](https://dashboard.render.com/), sob o plano gratuito. Devido às limitações deste plano, como o uso de máquinas menos robustas, o tempo de resposta pode ser maior em comparação ao uso local da API. Por fim, o frontend da plataforma teve o deploy através do [Vercel](https://vercel.com/). Para acessar e testar o aplicativo, visite: [https://summs-up-ia.vercel.app/](https://summs-up-ia.vercel.app/).

![image](https://github.com/user-attachments/assets/b49e0ce4-0cc4-4c23-8f73-1b9515278e32)


<hr>

## Tecnologias
O agente foi criado a partir das seguintes tecnologias:
- Python 3.11 (com as respectivas bibliotecas): 
  - LangChain: biblioteca para utilização modular de códigos voltados a agentes de IA;
  - OpenAI (além do OpenAI Key): utilização dos modelos LLM OpenAI para a criação das descrições e títulos. Além disso, utilização do modelo DallE 3 para criação da thumbnail;
  - PyPDF2: extração de textos de PDFs;
  - Poetry: pacote para o controle de versões das bibiliotecas.

<hr>

# Teste a aplicação localmente

## API
A API foi escrita em FastAPI através da lingugem Python e as devidas bibliotecas contidas no arquivo requirements.txt.

### Configurações - localmente
Instalação da biblioteca Poetry:
```
pip install poetry
```

Inicialização do Poetry:
```
poetry init
```

Instalação das bibliotecas necessárias:
```
poetry install
```

Ativação da API:
```
poetry run uvicorn main:app --reload
```

Para executar a API localmente, os seguintes métodos estarão disponíveis. Utilize ferramentas como o Postman ou Insomnia para realizar as requisições:
- Gerar conteúdo:
  - ``` (POST): http://127.0.0.1:8000/upload-pdf/```
  - Requisição: Upload via Postman ou Insomnia do PDF desejado

## Frontend
O frontend foi escrito em React através da linguagem Typescript.

### Configurações - localmente
Instalação das bibliotecas:
```
npm install
```

Caso deseje, troque o endpoint de consulta, caso o teste seja feito local, em: smart-content-ai > src > component > InputFrom.tsx:
```
http://127.0.0.1:8000/upload-pdf/
```

Ativação da interface:
```
npm start
```

<hr>

## Arquitetura
O agente SummsUpIA foi criado seguindo a arquitetura abaixo:
![image](https://github.com/user-attachments/assets/7ff14fb4-dba8-4517-9ae6-f8a4844feaad)

<hr>
@Victor Resende
