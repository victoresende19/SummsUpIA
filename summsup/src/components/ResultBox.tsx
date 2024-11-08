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
  text-align: justify;
`;

const ImageContainer = styled.div`
  display: flex;
  justify-content: center; /* Centraliza a imagem horizontalmente */
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
            <ul>
                {result.summary}
            </ul>

            <h1>Imagem representativa</h1>
            
            <ImageContainer>
                <Image src={result.dalle_image_url} alt="Generated thumbnail" />
            </ImageContainer>
        </ResultContainer>
    );
};

export default ResultBox;
