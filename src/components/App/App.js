import { Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
import Main from "../Landing/Landing/Main";
import Movies from "../Movies/Movies";
import Profile from "../Profile/Profile";
import SavedMovies from "../SavedMovies/SavedMovies";
import "./App.css";
import React from "react";
import Register from "../Register/Register";
import Login from "../Login/Login";
import PageNotFound from "../PageNotFound/PageNotFound";
import moviesApi from "../../utils/MoviesApi";

function App() {
  const [loggedIn, setLoggedIn] = useState(true);

  const [isInfoTooltip, setIsInfoTooltip] = useState("");

  const [movieList, setMovieList] = useState({});

  function loadMovies() {
    moviesApi
      .getAllMovies()
      .then((movie) => {
        setMovieList(movie);
      })
      .catch(console.error);
  }

  useEffect(() => {
    loadMovies();
  }, []);

  return (
    <div className="page">
      <Routes>
        <Route
          path="/"
          element={<Main loggedIn={loggedIn} headerColor="blue" />}
        />
        <Route
          path="/movies"
          element={
            <Movies
              loggedIn={loggedIn}
              setIsInfoTooltip={setIsInfoTooltip}
              isInfoTooltip={isInfoTooltip}
              movies={movieList}
              headerColor="black"
            />
          }
        />
        <Route
          path="/saved-movies"
          element={<SavedMovies loggedIn={loggedIn} headerColor="black" />}
        />
        <Route
          path="/profile"
          element={<Profile loggedIn={loggedIn} headerColor="black" />}
        />
        <Route path="/signup" element={<Register />} />
        <Route path="/signin" element={<Login />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
}

export default App;
