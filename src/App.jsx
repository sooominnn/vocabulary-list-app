import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import VocaAdd from './pages/VocaAdd';
import DetailPage from './pages/DetailPage';
import VocaUpdate from './pages/VocaUpdate';
import Header from './components/Header';
import useVocas from './hooks/useVocas';

const App = () => {
  const { voca, dispatch, dispatcher } = useVocas(); // 커스텀 훅

  return (
    <>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route
            path='/home'
            element={<Home voca={voca} dispatch={dispatch} />}
          ></Route>
        </Routes>
        <Routes>
          <Route
            path='/voca/add'
            element={<VocaAdd voca={voca} dispatcher={dispatcher} />}
          ></Route>
        </Routes>
        <Routes>
          <Route
            path='/voca/update/:id'
            element={<VocaUpdate voca={voca} dispatch={dispatch} />}
          ></Route>
        </Routes>
        <Routes>
          <Route
            path='/detail/:id'
            element={<DetailPage voca={voca} dispatch={dispatch} />}
          ></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
