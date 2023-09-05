/* eslint-disable */
import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import VocaTemplate from '../components/VocaTemplate';
import VocaList from '../components/VocaList';

export default function Home({ voca, dispatch }) {
  return (
    <VocaTemplate>
      <Cards>
        <VocaList voca={voca} dispatch={dispatch} />
        <Link to='/voca/add'>
          <SaveBtn>+</SaveBtn>
        </Link>
      </Cards>
    </VocaTemplate>
  );
}

const Cards = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: auto;
  margin-top: 40px;
  gap: 20px;
  max-width: 1400px;
  padding: 50px 0;
  flex-direction: row;
  /* border: 1px solid red; */
`;

const SaveBtn = styled.button`
  color: white;
  background-color: green;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: none;
  font-size: 40px;
  font-weight: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 5px 15px 0px gray;

  position: fixed;
  bottom: 10%;
  right: 5rem;
`;
