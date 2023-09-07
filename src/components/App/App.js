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

  const [savedMovies, setSavedMovies] = useState(null);

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

  function handleSaveMovie(movie) {
    const movieData = {
      movieId: movie.id,
      country: movie.country,
      director: movie.director,
      duration: movie.duration,
      year: movie.year,
      description: movie.description,
      image: 'https://api.nomoreparties.co' + movie.image.url,
      thumbnail: 'https://api.nomoreparties.co' + movie.image.url,
      trailerLink: movie.trailerLink,
      nameRU: movie.nameRU,
      nameEN: movie.nameEN,
    };

    console.log(movieData)
  
    mainApi
      .saveMovie(movieData)
      .then((savedMovie) => {
        console.log("Фильм успешно сохранен:", savedMovie);
        setSavedMovies(savedMovie);
      })
      .catch((error) => {
        // Обработка ошибки при сохранении фильма
        console.error("Ошибка при сохранении фильма:", error);
        // Можете отобразить сообщение об ошибке или выполнить другие действия
      });
  };

  function handleDeleteMovie(movieId) {
    mainApi
      .deleteMovie(movieId)
      .then(() => {
        // Handle the success response if needed
        console.log(`Movie with ID ${movieId} deleted successfully.`);
        // You can update the state or perform other actions here
      })
      .catch((error) => {
        // Handle any errors here
        console.error(`Error deleting movie with ID ${movieId}:`, error);
      });
  }
  

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
              onSaveMovie={handleSaveMovie}
              onDeleteMovie={handleDeleteMovie}
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
