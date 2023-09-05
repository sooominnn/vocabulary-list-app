/* eslint-disable */
import React from 'react';
import styled from 'styled-components';
import VocaListItem from './VocaListItem';

const VocaList = ({ voca, dispatch }) => {
  return (
    <>
      {voca?.map((voca) => (
        <VocaListItem voca={voca} key={voca.id} dispatch={dispatch} />
      ))}
    </>
  );
};

export default VocaList;
