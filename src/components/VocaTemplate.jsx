/* eslint-disable */
import React from 'react';
import { styled, css } from 'styled-components';
import Header from './Header';

const VocaTemplate = ({ children }) => {
  return (
    <div>
      <Header>영어 단어장</Header>
      <div>{children}</div>
    </div>
  );
};

export default VocaTemplate;
