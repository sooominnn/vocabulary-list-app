import { BrowserRouter, Routes, Route } from 'react-router-dom';
import VocaAdd from './components/VocaAdd';
import VocaUpdate from './components/VocaUpdate';
import Home from './components/Home';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/home' element={<Home />}></Route>
      </Routes>
      <Routes>
        <Route path='/voca/add' element={<VocaAdd />}></Route>
      </Routes>
      <Routes>
        <Route path='/voca/update' element={<VocaUpdate />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
