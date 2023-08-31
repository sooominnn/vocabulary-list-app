import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

const VocaAdd = ({ onInsert }) => {
  const initialState = {
    word: '',
    pronunciation: '',
    definition: '',
    exampleEn: '',
    exampleKo: '',
  };

  const [voca, setVoca] = useState(initialState);
  const navigate = useNavigate();

  const onChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;

    setVoca({ ...voca, [name]: value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    onInsert(voca);
    setVoca(initialState);
    // navigate.push('/home');
  };

  return (
    <form>
      <h1>단어 추가하기</h1>
      <div>
        <input type='text' name='word' value={voca.word} onChange={onChange} />
      </div>
      <div>
        <input
          type='text'
          name='pronunciation'
          value={voca.pronunciation}
          onChange={onChange}
        />
      </div>
      <div>
        <input
          type='text'
          name='definition'
          value={voca.definition}
          onChange={onChange}
        />
      </div>
      <div>
        <input
          type='text'
          name='exampleEn'
          value={voca.exampleEn}
          onChange={onChange}
        />
      </div>
      <div>
        <input
          type='text'
          name='exampleKo'
          value={voca.exampleKo}
          onChange={onChange}
        />
        <div>
          <button onClick={onSubmit}>저장하기</button>
        </div>
      </div>
    </form>
  );
};

export default VocaAdd;
