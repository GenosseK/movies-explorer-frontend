import Header from "../Header/Header";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import SearchForm from "../SearchForm/SearchForm";
import Footer from "../Footer/Footer";
import "./Movies.css";
import { useEffect, useState } from "react";
import moviesApi from "../../utils/MoviesApi";

function Movies({
  loggedIn,
  headerColor,
  movies,
  isInfoTooltip,
  setIsInfoTooltip,
  onSaveMovie,
  onDeleteMovie,
  savedMovies,
  setSavedMovies,
}) {
  const [searchInput, setSearchInput] = useState("");
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [shortMoviesOnly, setShortMoviesOnly] = useState(false);
  const [movieList, setMovieList] = useState([]);
  const [isLoadingMovies, setIsLoadingMovies] = useState(true);
  const [canSearch, setCanSearch] = useState(false);
  const [preloaderLoading, setPreloaderLoading] = useState(false);

  useEffect(() => {
    setPreloaderLoading(true);
    setCanSearch(false);
    setIsLoadingMovies(true);
    moviesApi
      .getAllMovies()
      .then((movie) => {
        setMovieList(movie);
      })
      .catch(() =>
        setIsInfoTooltip(
          "Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз"
        )
      )
      .finally(() => {
        setIsLoadingMovies(false);
        setCanSearch(true);
        setPreloaderLoading(false);
      });
  }, []);

  const loadFromLocalStorage = () => {
    const savedSearchInput = localStorage.getItem("searchInput");
    const savedShortMoviesOnly = localStorage.getItem("shortMoviesOnly");
    const savedFilteredMovies = JSON.parse(
      localStorage.getItem("filteredMovies")
    );
    const savedIsInfoTooltip = localStorage.getItem("isInfoTooltip");

    if (savedSearchInput) {
      setSearchInput(savedSearchInput);
    }

    if (savedShortMoviesOnly) {
      setShortMoviesOnly(savedShortMoviesOnly === "true");
    }

    if (savedFilteredMovies) {
      setFilteredMovies(savedFilteredMovies);
    }

    if (savedIsInfoTooltip) {
      setIsInfoTooltip(savedIsInfoTooltip);
    }
  };

  useEffect(() => {
    if (isLoadingMovies) {
      loadFromLocalStorage();
      setIsLoadingMovies(false);
    }
  }, [isLoadingMovies]);

  const movieSearch = (query) => {
    const lowercaseSearch = query.toLowerCase();

    if (!query) {
      setFilteredMovies([]);
      return;
    }

    const filteredByDuration = shortMoviesOnly
      ? movieList.filter((movie) => movie.duration < 40)
      : movieList;

    const filteredBySearch = filteredByDuration.filter(
      (movie) =>
        movie.nameRU.toLowerCase().includes(lowercaseSearch) ||
        movie.nameEN.toLowerCase().includes(lowercaseSearch)
    );

    setFilteredMovies(filteredBySearch);

    if (filteredBySearch.length === 0) {
      setIsInfoTooltip("Ничего не найдено");
    }

    localStorage.setItem("searchInput", query);
    localStorage.setItem("shortMoviesOnly", shortMoviesOnly.toString());
    localStorage.setItem("filteredMovies", JSON.stringify(filteredBySearch));
    localStorage.setItem("isInfoTooltip", isInfoTooltip.toString());
  };

  const handleToggleShortMovies = () => {
    setShortMoviesOnly(!shortMoviesOnly);
  };

  useEffect(() => {
    if (canSearch) {
      movieSearch(searchInput);
    }
  }, [shortMoviesOnly]);

  return (
    <>
      <Header loggedIn={loggedIn} headerColor={headerColor} />
      <main>
        <SearchForm
          movieSearch={movieSearch}
          searchInput={searchInput}
          setSearchInput={setSearchInput}
          handleToggleShortMovies={handleToggleShortMovies}
          shortMoviesOnly={shortMoviesOnly}
        />
        <MoviesCardList
          filteredMovies={filteredMovies}
          isInfoTooltip={isInfoTooltip}
          onSaveMovie={onSaveMovie}
          onDeleteMovie={onDeleteMovie}
          savedMovies={savedMovies}
          setSavedMovies={setSavedMovies}
          preloaderLoading={preloaderLoading}
        />
      </main>
      <Footer />
    </>
  );
}

export default Movies;
