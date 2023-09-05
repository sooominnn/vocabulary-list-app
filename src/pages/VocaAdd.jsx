/* eslint-disable */
import React, { useState } from 'react';
import styled from 'styled-components';
import Header from '../components/Header';

import { useNavigate } from 'react-router-dom';

const VocaAdd = ({ dispatch }) => {
  const navigate = useNavigate();

  const initialState = {
    word: '',
    pronunciation: '',
    definition: '',
    exampleEn: '',
    exampleKo: '',
  };

  const [voca, setVoca] = useState(initialState);

  const onChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;

    setVoca({ ...voca, [name]: value });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (
      voca.word &&
      voca.pronunciation &&
      voca.definition &&
      voca.exampleEn &&
      voca.exampleKo
    ) {
      dispatch({
        type: 'ADD',
        word: voca.word,
        pronunciation: voca.pronunciation,
        definition: voca.definition,
        exampleEn: voca.exampleEn,
        exampleKo: voca.exampleKo,
      });

      setVoca(initialState);

      navigate('/home');
    } else {
      // 필요한 프로퍼티들이 모두 설정되지 않았을 때 처리
      window.confirm('입력하지 않은 항목이 있습니다');
    }
  };

  return (
    <form>
      <Container>
        <Header />
        <Subtitle>단어 추가하기</Subtitle>
        <div>
          <h5>단어</h5>
          <Input
            type='text'
            name='word'
            size={60}
            value={voca.word}
            onChange={onChange}
          />
        </div>
        <div>
          <h5>발음</h5>
          <Input
            type='text'
            name='pronunciation'
            size={60}
            value={voca.pronunciation}
            onChange={onChange}
          />
        </div>
        <div>
          <h5>의미</h5>
          <Input
            type='text'
            name='definition'
            size={60}
            value={voca.definition}
            onChange={onChange}
          />
        </div>
        <div>
          <h5>예문</h5>
          <Input
            type='text'
            name='exampleEn'
            size={60}
            value={voca.exampleEn}
            onChange={onChange}
          />
        </div>
        <div>
          <h5>해석</h5>
          <Input
            type='text'
            name='exampleKo'
            size={60}
            value={voca.exampleKo}
            onChange={onChange}
          />
        </div>
      </Container>
      <SaveBtn onClick={onSubmit}>저장하기</SaveBtn>
    </form>
  );
};

export default VocaAdd;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  max-width: 400px;
  margin: 50px auto;
  margin-top: 100px;
`;

const Subtitle = styled.h2`
  font-size: 18px;
  font-weight: 600;
  text-align: center;
  margin-top: 20px;
  margin-bottom: 20px;
`;

const Input = styled.input`
  height: 28px;
  padding: 5px 0;
  font-weight: 500;
  transition: border-color 300ms ease-in-out;
  border: none;
  border-bottom: 2px solid lightgreen;
  font-size: 20;
  font-weight: 500;
  transition: border-color 300ms ease-in-out;
  outline: none;
  &:focus {
    border-color: green;
  }
`;

const SaveBtn = styled.button`
  justify-content: center;
  color: white;
  background-color: green;
  width: 200px;
  height: 40px;
  border: none;
  margin: auto;
  display: flex;
  align-items: center;
`;
