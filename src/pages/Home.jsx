/* eslint-disable */
import React from 'react';
import { Link } from 'react-router-dom';
import VocaTemplate from '../components/VocaTemplate';
import VocaList from '../components/VocaList';
import VocaAdd from './VocaAdd';

export default function Home({ voca, dispatch }) {
  const initialState = {
    word: '',
    pronunciation: '',
    definition: '',
    exampleEn: '',
    exampleKo: '',
  };

  return (
    <VocaTemplate>
      <VocaList voca={voca} dispatch={dispatch} />
      <VocaAdd dispatch={dispatch} initialState={initialState} />
      <Link to='/voca/add'>
        <button>+</button>
      </Link>
    </VocaTemplate>
  );
}
