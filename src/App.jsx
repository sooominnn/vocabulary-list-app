import { BrowserRouter, Routes, Route } from 'react-router-dom';
import VocaAdd from './pages/VocaAdd';
import VocaUpdate from './pages/VocaUpdate';
import Home from './pages/Home';

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
