/* eslint-disable */
import React, { useState } from 'react';
import VocaUpdate from '../pages/VocaUpdate';

const VocaListItem = ({ voca, dispatch }) => {
  const [editMode, setEditMode] = useState(false);
  const { word, pronunciation, definition, exampleEn, exampleKo } = voca;

  const remove = () => {
    const notice = window.confirm('정말 삭제하시겠습니까?');
    if (notice) {
      dispatch({ type: 'REMOVE', id: voca.id });
    }
  };

  return (
    <article>
      {!editMode ? (
        <>
          <div>
            <button>암기 완료</button>
            <button onClick={() => setEditMode(true)}>수정하기</button>
            <button onClick={() => remove()}>삭제</button>
          </div>
          <div>
            <h4>{word}</h4>
            <span>{pronunciation}</span>
          </div>
          <p>{definition}</p>
          <div>{exampleEn}</div>
          <div>{exampleKo}</div>
        </>
      ) : (
        <VocaUpdate voca={voca} dispatch={dispatch} setEditMode={setEditMode} />
      )}
    </article>
  );
};

export default VocaListItem;
