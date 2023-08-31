import React, { useState } from 'react';
import { Link, Router, Route, BrowserRouter } from 'react-router-dom';
import VocaUpdate from '../pages/VocaUpdate';
// import { TiTickOutline, TiTick, TiEdit, TiTimes } from 'react-icons/ti';

const VocaListItem = ({ voca, onRemove, onUpdate }) => {
  const { id, word, pronunciation, definition, exampleEn, exampleKo } = voca;
  const [value, setValue] = useState(
    voca || {
      id: '',
      word: '',
      pronunciation: '',
      definition: '',
      exampleEn: '',
      exampleKo: '',
    }
  );

  const onChange = (e) => {
    const text = e.target.value;
    const name = e.target.value;

    setValue({ ...value, [name]: text });
  };

  return (
    <article>
      <div>
        <button>암기 완료</button>
        <Link to='/voca/update'>
          <button onClick={() => onUpdate(voca)}>수정하기</button>
        </Link>
        <button onClick={() => onRemove(id)}>삭제</button>
      </div>
      <div>
        <h4>{word}</h4>
        <span>{pronunciation}</span>
      </div>
      <p>{definition}</p>
      <div>{exampleEn}</div>
      <div>{exampleKo}</div>
    </article>
  );
};

export default VocaListItem;
