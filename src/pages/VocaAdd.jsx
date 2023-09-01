/* eslint-disable */
import React, { useState } from 'react';
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
      <h1>단어 추가하기</h1>
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
        <div>
          <button onClick={onSubmit}>저장하기</button>
        </div>
      </div>
    </form>
  );
};

export default VocaAdd;
