from fastapi import FastAPI, File, UploadFile
from fastapi.responses import JSONResponse
from fastapi.middleware.cors import CORSMiddleware
from PyPDF2 import PdfReader
import io
from service.openai_service import generate_openai_summary
from service.dalle_service import generate_dalle_image
from utils.pdf_split import split_text
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

        parts = split_text(text)
        partial_summaries = [generate_openai_summary(part) for part in parts]
        combined_summary = " ".join(partial_summaries)

        final_summary = generate_openai_summary(combined_summary)
        image_url = generate_dalle_image(f"Create a minimalist, didactic, and realistic image based on the following summary: {final_summary}")

        return JSONResponse(
            content={
                "summary": final_summary, 
                "dalle_image_url": image_url
            }
        )

    except Exception as e:
        return JSONResponse(content={ "error": str(e) }, status_code=500)
