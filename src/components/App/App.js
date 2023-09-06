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
import mainApi from "../../utils/MainApi";

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
      .catch(() =>
        setIsInfoTooltip(
          "Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз"
        )
      );
  }

  useEffect(() => {
    loadMovies();
  }, []);

  function saveMovie(movieData) {
    mainApi
      .saveMovie(movieData)
      .then((savedMovie) => {
        // Handle the success response if needed
        console.log('Movie saved:', savedMovie);
        // You can update the state or perform other actions here
      })
      .catch((error) => {
        // Handle any errors here
        console.error('Error saving movie:', error);
      });
  };

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
              onSaveMovie={saveMovie}
              headerColor="black"
            />
          }
        />
        <Route
          path="/saved-movies"
          element={<SavedMovies loggedIn={loggedIn} headerColor="black" setIsInfoTooltip={setIsInfoTooltip} isInfoTooltip={isInfoTooltip} />}
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
