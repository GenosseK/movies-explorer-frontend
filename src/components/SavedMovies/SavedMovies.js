import { useEffect, useState } from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import SearchForm from "../SearchForm/SearchForm";
import "./SavedMovies.css";

function SavedMovies({
  loggedIn,
  headerColor,
  isInfoTooltip,
  setIsInfoTooltip,
  onSaveMovie,
  savedMovies,
  onDeleteMovie,
}) {
  const [searchInput, setSearchInput] = useState("");
  const [filteredMovies, setFilteredMovies] = useState(savedMovies);
  const [shortMoviesOnly, setShortMoviesOnly] = useState(
    localStorage.getItem("shortSavedMoviesOnly") === "true"
  );

  const movieSearch = (query) => {
    const lowercaseSearch = query.toLowerCase();

    if (!query) {
      setFilteredMovies(savedMovies); // Reset filteredMovies to all saved movies when the search input is empty
      return;
    }

    // Apply the filter based on the 'shortMoviesOnly' state first
    const filteredBySearch = savedMovies.filter((movie) => {
      const nameRU = movie.nameRU.toLowerCase();
      const nameEN = movie.nameEN.toLowerCase();
      return (
        nameRU.includes(lowercaseSearch) || nameEN.includes(lowercaseSearch)
      );
    });

    setFilteredMovies(filteredBySearch);

    if (filteredBySearch.length === 0) {
      setIsInfoTooltip("Ничего не найдено");
    }
  };

  const handleToggleShortMovies = () => {
    const updatedValue = !shortMoviesOnly;
    setShortMoviesOnly(updatedValue);
    localStorage.setItem("shortSavedMoviesOnly", updatedValue.toString());
  };

  useEffect(() => {
    if (savedMovies.length > 0) {
      // Apply the filter based on the 'shortMoviesOnly' state
      const filteredByDuration = shortMoviesOnly
        ? savedMovies.filter((movie) => movie.duration < 40)
        : savedMovies;

      // Then apply the search query filter
      const filteredBySearch = filteredByDuration.filter((movie) => {
        const nameRU = movie.nameRU.toLowerCase();
        const nameEN = movie.nameEN.toLowerCase();
        return (
          nameRU.includes(searchInput.toLowerCase()) ||
          nameEN.includes(searchInput.toLowerCase())
        );
      });

      setFilteredMovies(filteredBySearch);
    }
  }, [shortMoviesOnly, searchInput, savedMovies]);

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
          isInfoTooltip={isInfoTooltip}
          isSavedMovies={true}
          onSaveMovie={onSaveMovie}
          savedMovies={savedMovies}
          onDeleteMovie={onDeleteMovie}
          filteredMovies={filteredMovies}
        />
      </main>
      <Footer />
    </>
  );
}

export default SavedMovies;
