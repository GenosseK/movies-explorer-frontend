import Header from "../Header/Header";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import SearchForm from "../SearchForm/SearchForm";
import Footer from "../Footer/Footer";
import "./Movies.css";
import { useEffect, useState } from "react";

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
  const [isLoadingMovies, setIsLoadingMovies] = useState(true);

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
      ? movies.filter((movie) => movie.duration < 40)
      : movies;

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
    if (!isLoadingMovies) {
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
        />
      </main>
      <Footer />
    </>
  );
}

export default Movies;
