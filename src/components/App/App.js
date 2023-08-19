import { Route, Routes } from 'react-router-dom';
import Main from '../Landing/Landing/Main';
import Movies from '../Movies/Movies';
import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/movies' element={<Movies />} />
      </Routes>
    </div>
  );
}

export default App;
