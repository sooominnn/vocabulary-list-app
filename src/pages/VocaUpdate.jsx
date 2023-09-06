/* eslint-disable */
import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

import styled from 'styled-components';
import CustomInput from '../components/input';
import { ButtonCore } from '../components/button/index';

const VocaUpdate = ({ dispatch }) => {
  const navigate = useNavigate();
  const location = useLocation();
  // console.log(location);
  const vocaInfo = location.state.voca;

  // useParams를 활용하여 데이터 가져오는 방법
  // const { id } = useParams();
  // const vocaInfo = voca.filter((word) => word.id == id);

  const [content, setContent] = useState(vocaInfo);

  const onChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;

    setContent((prevContent) => ({
      ...prevContent,
      [name]: value,
    }));
  };

  const update = () => {
    dispatch({
      type: 'EDIT',
      ...content,
    });
    navigate('/home');
  };

  return (
    <form>
      <Container>
        <Subtitle>단어 수정하기</Subtitle>
        <div>
          <h5>단어</h5>
          <CustomInput name='word' value={content.word} onChange={onChange} />
        </div>
        <div>
          <h5>발음</h5>
          <CustomInput
            name='pronunciation'
            value={content.pronunciation}
            onChange={onChange}
          />
        </div>
        <div>
          <h5>의미</h5>
          <CustomInput
            name='definition'
            value={content.definition}
            onChange={onChange}
          />
        </div>
        <div>
          <h5>예문</h5>
          <CustomInput
            name='exampleEn'
            value={content.exampleEn}
            onChange={onChange}
          />
        </div>
        <div>
          <h5>해석</h5>
          <CustomInput
            name='exampleKo'
            value={content.exampleKo}
            onChange={onChange}
          />
        </div>
        <ButtonCore theme='rectangle' onClick={update}>
          수정하기
        </ButtonCore>
      </Container>
    </form>
  );
};

export default VocaUpdate;

const Container = styled.article`
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
