import React from 'react';
import VocaListItem from './VocaListItem';

const VocaList = ({ vocas, onRemove, onUpdate }) => {
  return (
    <>
      {vocas.map((voca) => (
        <VocaListItem
          voca={voca}
          key={voca.id}
          onRemove={onRemove}
          onUpdate={onUpdate}
        />
      ))}
    </>
  );
};

export default VocaList;
