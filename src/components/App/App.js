import { Route, Routes } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Main from '../Landing/Landing/Main';
import Movies from '../Movies/Movies';
import Profile from '../Profile/Profile';
import SavedMovies from '../SavedMovies/SavedMovies';
import './App.css';
import React from 'react';
import Register from '../Register/Register';
import Login from '../Login/Login';
import PageNotFound from '../PageNotFound/PageNotFound';
import './App.css';

function App() {

  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Main loggedIn={loggedIn} headerColor="blue" />} />
        <Route path='/movies' element={<Movies loggedIn={loggedIn} headerColor="black" />} />
        <Route path='/saved-movies' element={<SavedMovies loggedIn={loggedIn} headerColor="black" />} />
        <Route path='/profile' element={<Profile loggedIn={loggedIn} headerColor="black" />} />
        <Route path='/signup' element={<Register />} />
        <Route path='/signin' element={<Login />} />
        <Route path='*' element={<PageNotFound />} />
      </Routes>
    </div>
  );
}

export default App;
