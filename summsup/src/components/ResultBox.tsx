import React from 'react';
import styled from 'styled-components';

const ResultContainer = styled.div`
  background-color: #291808;
  color: white;
  padding: 20px;
  margin: 20px auto;
  width: 80%;
  border-radius: 10px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
`;

const TextContainer = styled.div`
  width: 70%;
  text-align: justify;
  margin: 0 auto; /* Centraliza horizontalmente */
  display: flex;
  justify-content: center; /* Adiciona suporte à centralização flex, se necessário */
  flex-direction: column; /* Garante que o texto permaneça em formato de coluna */
`;


const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

const Image = styled.img`
  max-width: 100%;
  border-radius: 5px;
`;

interface ResultProps {
    result: {
        dalle_image_url: string;
        summary: string;
    } | null;
}

const ResultBox: React.FC<ResultProps> = ({ result }) => {
    if (!result) return null;

    return (
        <ResultContainer>
            <h1>Resumo</h1>
            <TextContainer>
                {result.summary}
            </TextContainer>

            <br />
            <h1>Imagem representativa</h1>
            <ImageContainer>
                <Image src={result.dalle_image_url} alt="Generated thumbnail" />
            </ImageContainer>
        </ResultContainer>
    );
};

export default ResultBox;
