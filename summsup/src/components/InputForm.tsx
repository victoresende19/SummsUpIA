import React, { useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import CircularProgress from '@mui/material/CircularProgress';

const FormWrapper = styled.div`
  background-color: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  max-width: 600px;
  width: 80%;
  margin: 0 auto;
`;

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 14px;
`;

const Input = styled.input`
  width: 50%;
  padding: 15px;
  margin: 10px 0;
  border-radius: 5px;
  border: 1px solid #ccc;
  height: 30px;
`;

const Button = styled.button`
  padding: 10px 20px;
  border: none;
  background-color: white;
  color: #1E1F27;
  border-radius: 5px;
  cursor: pointer;
  position: relative;
  font-size: 16px;

  &:hover {
    background-color: #291808;
    color: white;
  }

  &:disabled {
    background-color: #291808;
    cursor: not-allowed;
    color: white;
  }
`;

const ButtonContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;

interface InputFormProps {
  setResult: (result: any) => void;
}

const InputForm: React.FC<InputFormProps> = ({ setResult }) => {
  const [file, setFile] = useState<File | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFile(e.target.files[0]);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!file) {
      alert("Por favor, selecione um arquivo PDF");
      return;
    }
    setLoading(true);

    const formData = new FormData();
    formData.append('file', file);

    try {
      const response = await axios.post('https://summsupia.onrender.com/upload-pdf/', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      setResult(response.data);
    } catch (error) {
      console.error('Erro ao processar PDF:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <FormWrapper>
      <FormContainer>
        <h2>Faça upload de um PDF para gerar um resumo e imagem</h2>
        <Input
          type="file"
          accept="application/pdf"
          onChange={handleFileChange}
        />
        <Button onClick={handleSubmit} disabled={loading}>
          <ButtonContent>
            {loading && <CircularProgress size={20} style={{ color: 'white' }} />}
            Gerar resumo ✨
          </ButtonContent>
        </Button>
      </FormContainer>
    </FormWrapper>
  );
};

export default InputForm;
