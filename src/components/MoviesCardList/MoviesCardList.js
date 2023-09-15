import React, { useEffect, useState } from "react";
import MovieCard from "../MovieCard/MovieCard";
import "./MoviesCardList.css";
import Preloader from "../Preloader/Preloader";

function MoviesCardList({
  filteredMovies,
  isInfoTooltip,
  isSavedMovies,
  onSaveMovie,
  onDeleteMovie,
  savedMovies,
  setSavedMovies,
  setFilteredMovies
}) {

  const [isLoading, setLoading] = useState(false);
  const [displayCount, setDisplayCount] = useState(getInitialDisplayCount());
  const cardsPerPage = getCardsPerPage();

  // Function to calculate the initial number of cards to display
  function getInitialDisplayCount() {
    const screenWidth = window.innerWidth;
    if (screenWidth >= 1708) {
      return 15;
    } else if (screenWidth >= 1066) {
      return 12;
    } else if (screenWidth >= 451) {
      return 8;
    } else {
      return 5;
    }
  }

  // Function to calculate the number of cards to load at each "Ещё" button click
  function getCardsPerPage() {
    const screenWidth = window.innerWidth;
    if (screenWidth >= 1708) {
      return 5;
    } else if (screenWidth >= 1387) {
      return 4;
    } else if (screenWidth >= 1066) {
      return 3;
    } else if (screenWidth >= 451) {
      return 2;
    } else {
      return 2;
    }
  }

  // Update the displayCount when the window size changes
  useEffect(() => {
    function handleResize() {
      setDisplayCount(getInitialDisplayCount());
    }

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleLoadMore = () => {
    setDisplayCount(displayCount + cardsPerPage);
  };

  return (
    <section className="cards">
      {filteredMovies.length === 0 && (
        <div className="cards__info-tooltip">
          <p className="cards__info-tooltip_text">{isInfoTooltip}</p>
        </div>
      )}
      {filteredMovies.length > 0 && (
        <ul className="cards__grid">
          {filteredMovies.slice(0, displayCount).map((movie) => (
            <MovieCard
              movie={movie}
              key={movie.id ?? movie.movieId}
              onSaveMovie={onSaveMovie}
              onDeleteMovie={onDeleteMovie}
              savedMovies={savedMovies}
              setSavedMovies={setSavedMovies}
              filteredMovies={filteredMovies}
              setFilteredMovies={setFilteredMovies}
            />
          ))}
        </ul>
      )}
      {filteredMovies.length > displayCount &&
        (isLoading ? (
          <Preloader />
        ) : (
          <div className="cards__button-container">
            <button
              className="cards__loader-button"
              type="button"
              onClick={handleLoadMore}
            >
              Ещё
            </button>
          </div>
        ))}
    </section>
  );
}

export default MoviesCardList;
