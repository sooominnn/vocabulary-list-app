import React, { useState } from 'react';
import { css, styled } from 'styled-components';

export const ButtonCore = ({ children, ...props }) => {
  return <StyledButtonCore {...props}>{children}</StyledButtonCore>;
};

const StyledButtonCore = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  background-color: green;
  border: none;

  ${({ theme }) => {
    switch (theme) {
      case 'round':
        return css`
          width: 50px;
          height: 50px;
          border-radius: 50%;
          font-size: 40px;
          font-weight: 400px;
          box-shadow: 0px 5px 15px 0px gray;
        `;

      case 'rectangle':
        return css`
          width: 200px;
          height: 40px;
          font-size: 15px;
        `;

      default:
        break;
    }
  }}
`;
