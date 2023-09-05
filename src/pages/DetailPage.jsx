/* eslint-disable */
import React from 'react';
import styled from 'styled-components';
import Header from '../components/Header';
import { useNavigate, useParams } from 'react-router-dom';

const DetailPage = ({ voca }) => {
  const { id } = useParams();

  const detailItem = voca.filter((word) => word.id == id);

  const navigate = useNavigate();
  return (
    <>
      <Container>
        <Header />
        {/* <h1>디테일페이지</h1> */}
        <div>
          <h4>{detailItem[0].word}</h4>
          <span>{detailItem[0].pronunciation}</span>
        </div>
        <p>{detailItem[0].definition}</p>
        <div>{detailItem[0].exampleEn}</div>
        <div>{detailItem[0].exampleKo}</div>
        <SaveBtn onClick={() => navigate(`/home`)}>홈으로</SaveBtn>
      </Container>
    </>
  );
};

export default DetailPage;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 400px;
  margin: 50px auto;
  margin-top: 100px;
`;

const SaveBtn = styled.button`
  justify-content: center;
  color: white;
  background-color: green;
  width: 200px;
  height: 40px;
  border: none;
  margin: auto;
  margin-top: 100px;
`;
