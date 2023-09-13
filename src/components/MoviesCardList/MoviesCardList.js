import React, { useState } from "react";
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
}) {
  
  const [isLoading, setLoading] = useState(false);
  const [displayCount, setDisplayCount] = useState(10); // Number of cards to initially display
  const cardsPerPage = 3; // Number of cards to load at each "Ещё" button click

  const handlePreloader = () => {
    setLoading(true);
    // Simulate loading for demonstration purposes
    setTimeout(() => {
      setLoading(false);
      setDisplayCount(displayCount + cardsPerPage); // Load more cards
    }, 1000);
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
              onClick={handlePreloader}
            >
              Ещё
            </button>
          </div>
        ))}
    </section>
  );
}

export default MoviesCardList;
