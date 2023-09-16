import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
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
import ProtectedRouteElement from "../../utils/ProtectedRoute";
import PagePreloader from "../PagePreloader/PagePreloader";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState({});

  const [isInfoTooltip, setIsInfoTooltip] = useState("");
  const [statusMessage, setStatusMessage] = useState("");
  const [statusImage, setStatusImage] = useState(false);
  const [statusPopupOpen, setStatusPopupOpen] = useState(false);

  const [movieList, setMovieList] = useState([]);

  const [savedMovies, setSavedMovies] = useState([]);

  const [isLoadingToken, setIsLoadingToken] = useState(true);

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
        .catch((error) => {
          console.log(`Ошибка: ${error}`);
        })
        .finally(() => {
          setIsLoadingToken(false);
        });
    } else {
      navigate("/");
      setLoggedIn(false);
      setIsLoadingToken(false);
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
      })
      .catch((error) => {
        if (error === "Error: 409") {
          setStatusMessage("Пользователь с таким email уже существует.");
          setStatusImage(false);
          setStatusPopupOpen(true)
        }
        if (error === `Error: 500`) {
          setStatusMessage("При регистрации пользователя произошла ошибка.");
          setStatusImage(false);
          setStatusPopupOpen(true)
        }
      });
  };

  const handleLogin = ({ email, password }) => {
    auth
      .authorise(email, password)
      .then((res) => {
        if (res.token) {
          localStorage.setItem("jwt", res.token);
          checkToken();
        }
        setLoggedIn(true);
        navigate("/movies");
      })
      .catch((error) => {
        if (error === `Error: 401`) {
          setStatusMessage("Вы ввели неправильный логин или пароль.");
          setStatusImage(false);
          setStatusPopupOpen(true)
        }
        if (error === `Error: 500`) {
          setStatusMessage("При авторизации произошла ошибка.");
          setStatusImage(false);
          setStatusPopupOpen(true)
        }
      });
  };

  function signOut() {
    localStorage.removeItem("jwt");
    localStorage.removeItem("searchInput");
    localStorage.removeItem("shortMoviesOnly");
    localStorage.removeItem("filteredMovies");
    localStorage.removeItem("isInfoTooltip");
    setLoggedIn(false);
    setCurrentUser({
      name: "",
      email: "",
    });
    setSavedMovies([]);
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

    mainApi
      .saveMovie(movieData)
      .then((savedMovie) => {
        setSavedMovies((prevSavedMovies) => [...prevSavedMovies, savedMovie]);
      })
      .catch((error) => {
        console.error("Ошибка при сохранении фильма:", error);
      });
  }

  function handleDeleteMovie(movie) {
    mainApi
      .deleteMovie(movie._id)
      .then(() => {
        setSavedMovies((state) => state.filter((m) => m._id !== movie._id));
      })
      .catch((error) => {
        console.error(`Error deleting movie with ID ${movie}:`, error);
      });
  }

  useEffect(() => {
    if (loggedIn) {
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
    }
  }, [loggedIn, setSavedMovies]);

  function handleUpdateUserInfo({ name, email }) {
    mainApi
      .changeUserInfo(name, email)
      .then((res) => {
        setCurrentUser({
          name: res.name,
          email: res.email,
        });
        setStatusMessage("Данные успешно изменены!");
        setStatusImage(true);
      })
      .catch((error) => {
        if (error === "Ошибка: 409") {
          setStatusMessage("Пользователь с таким email уже существует.");
          setStatusImage(false);
        }
        if (error === `Ошибка: 500`) {
          setStatusMessage("При обновлении профиля произошла ошибка.");
          setStatusImage(false);
        }
      })
      .finally(() => setStatusPopupOpen(true));
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        {isLoadingToken ? (
          <PagePreloader />
        ) : (
          <Routes>
            <Route
              path="/"
              element={<Main loggedIn={loggedIn} headerColor="blue" />}
            />
            <Route
              path="/movies"
              element={
                <ProtectedRouteElement loggedIn={loggedIn}>
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
                </ProtectedRouteElement>
              }
            />
            <Route
              path="/saved-movies"
              element={
                <ProtectedRouteElement loggedIn={loggedIn}>
                  <SavedMovies
                    loggedIn={loggedIn}
                    headerColor="black"
                    setIsInfoTooltip={setIsInfoTooltip}
                    onSaveMovie={handleSaveMovie}
                    isInfoTooltip={isInfoTooltip}
                    savedMovies={savedMovies}
                    onDeleteMovie={handleDeleteMovie}
                    setSavedMovies={setSavedMovies}
                  />
                </ProtectedRouteElement>
              }
            />
            <Route
              path="/profile"
              element={
                <ProtectedRouteElement loggedIn={loggedIn}>
                  <Profile
                    loggedIn={loggedIn}
                    headerColor="black"
                    onSignOut={signOut}
                    currentUser={currentUser}
                    onUpdateUser={handleUpdateUserInfo}
                    statusMessage={statusMessage}
                    statusImage={statusImage}
                    statusPopupOpen={statusPopupOpen}
                    setStatusPopupOpen={setStatusPopupOpen}
                  />
                </ProtectedRouteElement>
              }
            />
            {loggedIn ? (
              <>
                <Route path="/signup" element={<Navigate to="/" replace />} />
                <Route path="/signin" element={<Navigate to="/" replace />} />
              </>
            ) : (
              <>
                <Route
                  path="/signup"
                  element={
                    <Register
                      onRegister={handleRegiser}
                      statusMessage={statusMessage}
                      statusImage={statusImage}
                      statusPopupOpen={statusPopupOpen}
                      setStatusPopupOpen={setStatusPopupOpen}
                    />
                  }
                />
                <Route
                  path="/signin"
                  element={
                    <Login
                      onLogginIn={handleLogin}
                      statusMessage={statusMessage}
                      statusImage={statusImage}
                      statusPopupOpen={statusPopupOpen}
                      setStatusPopupOpen={setStatusPopupOpen}
                    />
                  }
                />
              </>
            )}
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        )}
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
