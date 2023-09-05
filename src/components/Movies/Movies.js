import Header from "../Header/Header";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import SearchForm from "../SearchForm/SearchForm";
import Footer from "../Footer/Footer";
import "./Movies.css";
import moviesApi from "../../utils/MoviesApi";
import { useEffect, useState } from "react";

function Movies({
  loggedIn,
  headerColor,
  movies,
}) {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [searchInput, setSearchInput] = useState("");
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [shortMoviesOnly, setShortMoviesOnly] = useState(false);
  const [isInfoTooltip, setIsInfoTooltip] = useState(false);

  const movieSearch = (query) => {
    const lowercaseSearch = query.toLowerCase();
  
    if (!query) {
      setFilteredMovies([]);
      return;
    }
  
    // Apply the filter based on the 'shortMoviesOnly' state first
    const filteredByDuration = shortMoviesOnly
      ? movies.filter((movie) => movie.duration < 40)
      : movies;
  
    // Then apply the search query filter
    const filteredBySearch = filteredByDuration.filter(
      (movie) =>
        movie.nameRU.toLowerCase().includes(lowercaseSearch) ||
        movie.nameEN.toLowerCase().includes(lowercaseSearch)
    );
  
    setFilteredMovies(filteredBySearch);
  
    // Check if there are no search results and set isInfoTooltip to true
    if (filteredBySearch.length === 0) {
      setIsInfoTooltip(true);
    } else {
      setIsInfoTooltip(false);
    }
  };

  const handleToggleShortMovies = () => {
    // Toggle the 'shortMoviesOnly' state when the checkbox is clicked
    setShortMoviesOnly(!shortMoviesOnly);
  };

  useEffect(() => {
    if (movies.length > 0) {
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
        <MoviesCardList filteredMovies={filteredMovies} isInfoTooltip={isInfoTooltip} />
      </main>
      <Footer />
    </>
  );
}

export default Movies;
