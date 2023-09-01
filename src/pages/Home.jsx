/* eslint-disable */
import React from 'react';
import { Link } from 'react-router-dom';
import VocaTemplate from '../components/VocaTemplate';
import VocaList from '../components/VocaList';

export default function Home({ voca, dispatch }) {
  return (
    <VocaTemplate>
      <VocaList voca={voca} dispatch={dispatch} />
      <Link to='/voca/add'>
        <button>+</button>
      </Link>
    </VocaTemplate>
  );
}
