/* eslint-disable */
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import styled from 'styled-components';
import CustomInput from '../components/input/index';
import { ButtonCore } from '../components/button';

const VocaAdd = ({ dispatcher }) => {
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
      dispatcher.onAddVoca(voca);

      setVoca(initialState);
      navigate('/home');
    } else {
      window.confirm('입력하지 않은 항목이 있습니다');
    }
  };

  return (
    <form>
      <Container>
        <Subtitle>단어 추가하기</Subtitle>
        <div>
          <h5>단어</h5>
          <CustomInput name='word' value={voca.word} onChange={onChange} />
        </div>
        <div>
          <h5>발음</h5>
          <CustomInput
            name='pronunciation'
            value={voca.pronunciation}
            onChange={onChange}
          />
        </div>
        <div>
          <h5>의미</h5>
          <CustomInput
            name='definition'
            value={voca.definition}
            onChange={onChange}
          />
        </div>
        <div>
          <h5>예문</h5>
          <CustomInput
            name='exampleEn'
            value={voca.exampleEn}
            onChange={onChange}
          />
        </div>
        <div>
          <h5>해석</h5>
          <CustomInput
            name='exampleKo'
            value={voca.exampleKo}
            onChange={onChange}
          />
        </div>
        <ButtonCore theme='rectangle' onClick={onSubmit}>
          저장하기
        </ButtonCore>
      </Container>
    </form>
  );
};

export default VocaAdd;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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
