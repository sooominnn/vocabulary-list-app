/* eslint-disable */
import React, { useState } from 'react';

const VocaUpdate = ({ voca, dispatch, setEditMode }) => {
  const [content, setContent] = useState(voca);

  const onChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;

    setContent({ ...voca, [name]: value });
  };

  const update = () => {
    dispatch({ type: 'EDIT', ...content });
    setEditMode(false);
  };

  return (
    <>
      <h1>단어 수정하기</h1>
      <div>
        <input
          type='text'
          name='word'
          value={content.word}
          onChange={onChange}
        />
      </div>
      <div>
        <input
          type='text'
          name='pronunciation'
          value={content.pronunciation}
          onChange={onChange}
        />
      </div>
      <div>
        <input
          type='text'
          name='definition'
          value={content.definition}
          onChange={onChange}
        />
      </div>
      <div>
        <input
          type='text'
          name='exampleEn'
          value={content.exampleEn}
          onChange={onChange}
        />
      </div>
      <div>
        <input
          type='text'
          name='exampleKo'
          value={content.exampleKo}
          onChange={onChange}
        />
      </div>
      <div>
        <button onClick={update}>저장하기</button>
        <button onClick={() => setEditMode(false)}>취소하기</button>
      </div>
    </>
  );
};

export default VocaUpdate;
