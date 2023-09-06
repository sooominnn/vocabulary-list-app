import React from 'react';
import styled from 'styled-components';
import { useNavigate, useParams } from 'react-router-dom';
import { ButtonCore } from '../components/button';

const DetailPage = ({ voca }) => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [detailItem] = voca.filter((word) => word.id == id);

  return (
    <>
      <Container>
        <div>
          <div>
            <h4>{detailItem.word}</h4>
            <span>{detailItem.pronunciation}</span>
          </div>
          <div>{detailItem.definition}</div>
          <div>{detailItem.exampleEn}</div>
          <div>{detailItem.exampleKo}</div>
        </div>

        <ButtonCore theme='rectangle' onClick={() => navigate(`/home`)}>
          홈으로
        </ButtonCore>
      </Container>
    </>
  );
};

export default DetailPage;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  max-width: 400px;
  margin: 50px auto;
  margin-top: 100px;
  height: 300px;
`;
