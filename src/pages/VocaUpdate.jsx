/* eslint-disable */
import React, { useState } from 'react';
// import { useNavigate, useLocation } from 'react-router-dom';

const VocaUpdate = ({ voca, dispatch, props }) => {
  // const navigate = useNavigate();
  // const location = useLocation();
  // const vocaInfo = { ...location.state };

  // const data = props.location.state;

  const [content, setContent] = useState(voca);

  const onChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;

    setContent({ ...voca, [name]: value });
  };

  const update = (e) => {
    e.preventDefault();

    if (
      voca.word &&
      voca.pronunciation &&
      voca.definition &&
      voca.exampleEn &&
      voca.exampleKo
    ) {
      dispatch({
        type: 'EDIT',
        ...content,
      });
      setContent(voca);
      // setEditMode(false);
      navigate('/home');
    } else {
      window.confirm('입력하지 않은 항목이 있습니다');
    }
  };

  return (
    <>
      <h1>단어 수정하기</h1>
      <div>
        <h5>단어</h5>
        <input type='text' name='word' value={voca.word} onChange={onChange} />
      </div>
      <div>
        <h5>발음</h5>
        <input
          type='text'
          name='pronunciation'
          value={voca.pronunciation}
          onChange={onChange}
        />
      </div>
      <div>
        <h5>의미</h5>
        <input
          type='text'
          name='definition'
          value={voca.definition}
          onChange={onChange}
        />
      </div>
      <div>
        <h5>예문</h5>
        <input
          type='text'
          name='exampleEn'
          value={voca.exampleEn}
          onChange={onChange}
        />
      </div>
      <div>
        <h5>해석</h5>
        <input
          type='text'
          name='exampleKo'
          value={voca.exampleKo}
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
