import React, { useReducer, useState } from 'react';

const useVocas = () => {
  const vocas = [
    {
      id: 1,
      checked: false,
      word: 'Apple',
      pronunciation: '[æpl]',
      definition: '사과',
      exampleEn: 'Apple is fruit',
      exampleKo: '사과는 과일이다',
    },
    {
      id: 2,
      checked: false,
      word: 'Orange',
      pronunciation: '[ˈɔrɪndʒ]',
      definition: '오렌지',
      exampleEn: 'Orange is fruit',
      exampleKo: '오렌지는 과일이다',
    },
    {
      id: 3,
      checked: false,
      word: 'Banana',
      pronunciation: '[bəˈnænə]',
      definition: '바나나',
      exampleEn: 'Banana is fruit',
      exampleKo: '바나나는 과일이다',
    },
    {
      id: 4,
      checked: false,
      word: 'Apple',
      pronunciation: '[æpl]',
      definition: '사과',
      exampleEn: 'Apple is fruit',
      exampleKo: '사과는 과일이다',
    },
    {
      id: 5,
      checked: false,
      word: 'Orange',
      pronunciation: '[ˈɔrɪndʒ]',
      definition: '오렌지',
      exampleEn: 'Orange is fruit',
      exampleKo: '오렌지는 과일이다',
    },
    {
      id: 6,
      checked: false,
      word: 'Banana',
      pronunciation: '[bəˈnænə]',
      definition: '바나나',
      exampleEn: 'Banana is fruit',
      exampleKo: '바나나는 과일이다',
    },
    {
      id: 7,
      checked: false,
      word: 'Apple',
      pronunciation: '[æpl]',
      definition: '사과',
      exampleEn: 'Apple is fruit',
      exampleKo: '사과는 과일이다',
    },
    {
      id: 8,
      checked: false,
      word: 'Orange',
      pronunciation: '[ˈɔrɪndʒ]',
      definition: '오렌지',
      exampleEn: 'Orange is fruit',
      exampleKo: '오렌지는 과일이다',
    },
    {
      id: 9,
      checked: false,
      word: 'Banana',
      pronunciation: '[bəˈnænə]',
      definition: '바나나',
      exampleEn: 'Banana is fruit',
      exampleKo: '바나나는 과일이다',
    },
  ];

  const vocaReducer = (state, action) => {
    const nextId = Math.max(0, ...state.map((voca) => voca.id)) + 1;

    console.log(action);

    switch (action.type) {
      case 'ADD':
        return state.concat({ id: nextId, ...action.payload });

      case 'REMOVE':
        return state.filter((voca) => voca.id !== action.id);

      case 'EDIT':
        return state.map((voca) =>
          voca.id === action.id ? { ...action } : voca
        );

      case 'CHECK':
        return state.map((voca) => {
          return voca.id === action.id
            ? { ...voca, checked: !voca.checked }
            : voca;
        });

      default:
        return state;
    }
  };

  const [voca, dispatch] = useReducer(vocaReducer, vocas);

  const onAddVoca = (payload) => {
    return dispatch({ type: 'ADD', payload });
  };

  const onRemoveVoca = (payload) => {
    return { type: 'REMOVE', payload };
  };

  const dispatcher = { onAddVoca, onRemoveVoca };

  return { voca, dispatch, dispatcher };
};

export default useVocas;
