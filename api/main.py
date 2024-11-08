from fastapi import FastAPI, File, UploadFile
from fastapi.responses import JSONResponse
from fastapi.middleware.cors import CORSMiddleware
from PyPDF2 import PdfReader
import io
from service.openai_service import generate_openai_summary
from service.dalle_service import generate_dalle_image
import os
from dotenv import load_dotenv

load_dotenv()

app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.post("/upload-pdf/")
async def upload_pdf(file: UploadFile = File(...)):
    try:
        pdf_content = await file.read()
        pdf_reader = PdfReader(io.BytesIO(pdf_content))
        text = ""
        for page in pdf_reader.pages:
            text += page.extract_text()

        summary = generate_openai_summary(text[:8000])
        image_url = generate_dalle_image(f"Create a minimalist, didactic and most real as possible image based on the following summary: {summary}")

        return JSONResponse(content={"summary": summary, "dalle_image_url": image_url})

    except Exception as e:
        return JSONResponse(content={"error": str(e)}, status_code=500)
