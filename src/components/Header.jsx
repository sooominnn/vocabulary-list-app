/* eslint-disable */
import React from 'react';
import styled from 'styled-components';

const Header = () => {
  return (
    <HeaderContainer>
      <Title>영어 단어장</Title>
    </HeaderContainer>
  );
};

export default Header;

const HeaderContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 70px;
  background-color: white;
  border-bottom: 2px solid green;
`;

const Title = styled.h1`
  font-size: 100;
  font-weight: 600;
`;
