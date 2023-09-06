import React from 'react';
import styled from 'styled-components';

const CustomInput = ({ name, value, onChange }) => {
  const inputChange = (e) => onChange(e);

  return (
    <Container>
      <InputCustom
        type='text'
        name={name}
        value={value}
        onChange={inputChange}
        size={60}
      />
    </Container>
  );
};

export default CustomInput;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`;

const InputCustom = styled.input`
  height: 28px;
  padding: 5px 0;
  font-weight: 300;
  border: none;
  border-bottom: 2px solid lightgreen;
  font-size: 17px;
  transition: border-color 300ms ease-in-out;
  outline: none;

  &:focus {
    border-color: green;
  }
`;
