/* eslint-disable */
import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import VocaTemplate from '../components/VocaTemplate';
import VocaList from '../components/VocaList';
import { ButtonCore } from '../components/button/index';

export default function Home({ voca, dispatch }) {
  console.log(voca);
  return (
    <VocaTemplate>
      <Cards>
        <VocaList voca={voca} dispatch={dispatch} />
        <Link to='/voca/add'>
          <AddButtonWrapper>
            <ButtonCore theme='round'>+</ButtonCore>
          </AddButtonWrapper>
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
`;

const AddButtonWrapper = styled.div`
  position: fixed;
  bottom: 10%;
  right: 5rem;
`;
