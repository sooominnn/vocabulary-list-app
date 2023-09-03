/* eslint-disable */
import React, { useState } from 'react';
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

    setContent({ ...vocaInfo, [name]: value });
  };

  const update = () => {
    dispatch({
      type: 'EDIT',
      ...content,
    });
    navigate('/home');
  };

  return (
    <>
      <h1>단어 수정하기</h1>
      <div>
        <h5>단어</h5>
        <input
          type='text'
          name='word'
          value={content.word}
          onChange={onChange}
        />
      </div>
      <div>
        <h5>발음</h5>
        <input
          type='text'
          name='pronunciation'
          value={content.pronunciation}
          onChange={onChange}
        />
      </div>
      <div>
        <h5>의미</h5>
        <input
          type='text'
          name='definition'
          value={content.definition}
          onChange={onChange}
        />
      </div>
      <div>
        <h5>예문</h5>
        <input
          type='text'
          name='exampleEn'
          value={content.exampleEn}
          onChange={onChange}
        />
      </div>
      <div>
        <h5>해석</h5>
        <input
          type='text'
          name='exampleKo'
          value={content.exampleKo}
          onChange={onChange}
        />
      </div>
      <div>
        <button onClick={update}>수정하기</button>
      </div>
    </>
  );
};

export default VocaUpdate;
