import React, { useState, useRef, useReducer } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import VocaTemplate from './VocaTemplate';
import VocaList from './VocaList';
import VocaAdd from './VocaAdd';

export default function Home() {
  const [isHome, setIsHome] = useState(true);
  const nextId = useRef(4);

  // 단어 list mock 데이터
  const [vocas, setVocas] = useState([
    {
      id: 1,
      word: 'Apple',
      pronunciation: '[æpl]',
      definition: '사과',
      exampleEn: 'Apple is fruit',
      exampleKo: '사과는 과일이다',
    },
    {
      id: 2,
      word: 'Orange',
      pronunciation: '[ˈɔrɪndʒ]',
      definition: '오렌지',
      exampleEn: 'Orange is fruit',
      exampleKo: '오렌지는 과일이다',
    },
    {
      id: 3,
      word: 'Banana',
      pronunciation: '[bəˈnænə]',
      definition: '바나나',
      exampleEn: 'Banana is fruit',
      exampleKo: '바나나는 과일이다',
    },
  ]);

  // 단어 추가
  const onInsert = (newVocas) => {
    const voca = {
      id: nextId.current,
      word: newVocas.word,
      pronunciation: newVocas.pronunciation,
      definition: newVocas.definition,
      exampleEn: newVocas.exampleEn,
      exampleKo: newVocas.exampleKo,
    };

    setVocas(vocas.concat(voca));
    nextId.current += 1;
  };

  // 단어 삭제
  const onRemove = (id) => {
    setVocas(vocas.filter((voca) => voca.id !== id));
  };

  // 단어 수정
  const onUpdate = (voca) => {
    const target = vocas.findIndex((currentVoca) => currentVoca.id === voca.id);
    const newVocas = [...vocas];
    newVocas.splice(target, 1, voca);
    setVocas(newVocas);
  };

  return (
    <VocaTemplate>
      <VocaList vocas={vocas} onRemove={onRemove} onUpdate={onUpdate} />
      <VocaAdd onInsert={onInsert} />
      <Link to='/voca/add'>
        <button>+</button>
      </Link>
    </VocaTemplate>
  );
}
