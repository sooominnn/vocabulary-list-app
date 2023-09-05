/* eslint-disable */
import React, { useState } from 'react';
import styled from 'styled-components';
import Header from '../components/Header';
import { useNavigate, useLocation } from 'react-router-dom';

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

    // setContent({ ...vocaInfo, [name]: value });
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
        <Header />
        <Subtitle>단어 수정하기</Subtitle>
        <div>
          <h5>단어</h5>
          <Input
            type='text'
            name='word'
            size={60}
            value={content.word}
            onChange={onChange}
          />
        </div>
        <div>
          <h5>발음</h5>
          <Input
            type='text'
            name='pronunciation'
            size={60}
            value={content.pronunciation}
            onChange={onChange}
          />
        </div>
        <div>
          <h5>의미</h5>
          <Input
            type='text'
            name='definition'
            size={60}
            value={content.definition}
            onChange={onChange}
          />
        </div>
        <div>
          <h5>예문</h5>
          <Input
            type='text'
            name='exampleEn'
            size={60}
            value={content.exampleEn}
            onChange={onChange}
          />
        </div>
        <div>
          <h5>해석</h5>
          <Input
            type='text'
            name='exampleKo'
            size={60}
            value={content.exampleKo}
            onChange={onChange}
          />
        </div>
      </Container>
      <SaveBtn onClick={update}>수정하기</SaveBtn>
    </form>
  );
};

export default VocaUpdate;

const Container = styled.article`
  display: flex;
  flex-direction: column;
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
