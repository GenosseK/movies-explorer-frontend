import { Route, Routes, useNavigate } from "react-router-dom";
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
import * as auth from "../../utils/Auth";
import moviesApi from "../../utils/MoviesApi";
import mainApi from "../../utils/MainApi";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState({});

  const [isInfoTooltip, setIsInfoTooltip] = useState("");

  const [movieList, setMovieList] = useState([]);

  const [savedMovies, setSavedMovies] = useState([]);

  const navigate = useNavigate();

  function checkToken() {
    const jwt = localStorage.getItem("jwt");

    if (jwt) {
      auth
        .checkToken(jwt)
        .then((res) => {
          const { _id, name, email } = res;
          setLoggedIn(true);
          setCurrentUser({ _id, name, email });
        })
        .catch((error) => console.log(`Ошибка: ${error}`));
    } else {
      navigate('/');
      setLoggedIn(false);
    }
  }

  useEffect(() => {
    checkToken();
  }, []);

  const handleRegiser = ({ name, email, password }) => {
    auth
      .register(name, email, password)
      .then(() => {
        handleLogin({ email, password });
        console.log('User registrated')
      })
      .catch((error) => console.log(`Ошибка: ${error}`));
  };

  const handleLogin = ({ email, password }) => {
    auth
      .authorise(email, password)
      .then((res) => {
        if (res.token) {
          localStorage.setItem("jwt", res.token);
          checkToken();
          console.log('Logged in ! ! !')
        }
        setLoggedIn(true);
        navigate("/movies");
      })
      .catch((error) => console.log(`Ошибка: ${error}`));
  };

  function signOut() {
    localStorage.removeItem("jwt");
    localStorage.removeItem("searchInput");
    localStorage.removeItem("shortMoviesOnly");
    localStorage.removeItem("filteredMovies");
    localStorage.removeItem("isInfoTooltip");
    localStorage.removeItem("shortSavedMoviesOnly");
    setLoggedIn(false);
    setCurrentUser({
      name: "",
      email: "",
    });
    navigate("/", { replace: true });
  }

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
  }, [loggedIn]);

  function handleSaveMovie(movie) {
    const movieData = {
      movieId: movie.id,
      country: movie.country,
      director: movie.director,
      duration: movie.duration,
      year: movie.year,
      description: movie.description,
      image: "https://api.nomoreparties.co" + movie.image.url,
      thumbnail: "https://api.nomoreparties.co" + movie.image.url,
      trailerLink: movie.trailerLink,
      nameRU: movie.nameRU,
      nameEN: movie.nameEN,
    };

    console.log(movieData);

    mainApi
      .saveMovie(movieData)
      .then((savedMovie) => {
        console.log("Фильм успешно сохранен:", savedMovie);
        setSavedMovies((prevSavedMovies) => [...prevSavedMovies, savedMovie]);
        console.log(savedMovies);
      })
      .catch((error) => {
        // Обработка ошибки при сохранении фильма
        console.error("Ошибка при сохранении фильма:", error);
        // Можете отобразить сообщение об ошибке или выполнить другие действия
      });
  }

  const getOneIdByAnother = (_id, array) => {
    console.log(array);
    const searchItem = array.find((movie) => movie.movieId === _id);
    return searchItem._id;
  };

  function handleDeleteMovie(movie) {
    mainApi
      .deleteMovie(movie._id)
      .then(() => {
        // Handle the success response if needed
        console.log(`Movie with ID ${movie._id} deleted successfully.`);
        setSavedMovies((state) => state.filter((m) => m._id !== movie._id));
      })
      .catch((error) => {
        // Handle any errors here
        console.error(`Error deleting movie with ID ${movie}:`, error);
      });
  }

  useEffect(() => {
    mainApi
      .getSavedMovies()
      .then((savedMovies) => {
        setSavedMovies(savedMovies);
      })
      .catch(() =>
        setIsInfoTooltip(
          "Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз"
        )
      );
  }, [setSavedMovies]);
/*
  function saveMovie(movieData) {
    mainApi
      .saveMovie(movieData)
      .then((savedMovie) => {
        // Handle the success response if needed
        console.log("Movie saved:", savedMovie);
        // You can update the state or perform other actions here
      })
      .catch((error) => {
        // Handle any errors here
        console.error("Error saving movie:", error);
      });
  }*/

  function handleUpdateUserInfo ({ name, email }) {
    mainApi.changeUserInfo(name, email)
    .then((res) => {
      setCurrentUser({
        name: res.name,
        email: res.email,
      });
    })
    .catch((error) => console.log(`Ошибка: ${error}`));
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
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
                savedMovies={savedMovies}
                setSavedMovies={setSavedMovies}
                headerColor="black"
              />
            }
          />
          <Route
            path="/saved-movies"
            element={
              <SavedMovies
                loggedIn={loggedIn}
                headerColor="black"
                setIsInfoTooltip={setIsInfoTooltip}
                isInfoTooltip={isInfoTooltip}
                savedMovies={savedMovies}
                onDeleteMovie={handleDeleteMovie}
              />
            }
          />
          <Route
            path="/profile"
            element={<Profile loggedIn={loggedIn} headerColor="black" onSignOut={signOut} currentUser={currentUser} onUpdateUser={handleUpdateUserInfo} />}
          />
          <Route
            path="/signup"
            element={<Register onRegister={handleRegiser} />}
          />
          <Route path="/signin" element={<Login onLogginIn={handleLogin} />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
