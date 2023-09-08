import React from "react";
import MovieCard from "../MovieCard/MovieCard";
import { cards } from "../../utils/constants";
import "./MoviesCardList.css";
import Preloader from "../Preloader/Preloader";

function MoviesCardList({
  filteredMovies,
  isInfoTooltip,
  isSavedMovies,
  onSaveMovie,
  onDeleteMovie,
  savedMovies,
  setSavedMovies
}) {
  const [isLoading, setLoading] = React.useState(false);

  const handlePreloader = () => {
    setLoading(true);
  };

  return (
    <section className="cards">
      {!isSavedMovies && filteredMovies.length === 0 && (
        <div className="cards__info-tooltip">
          <p className="cards__info-tooltip_text">{isInfoTooltip}</p>
        </div>
      )}
      {!isSavedMovies && filteredMovies.length > 0 && (
        <ul className="cards__grid">
          {filteredMovies.map((movie) => (
            <MovieCard
              movie={movie}
              key={movie.id}
              onSaveMovie={onSaveMovie}
              onDeleteMovie={onDeleteMovie}
              savedMovies={savedMovies}
              setSavedMovies={setSavedMovies}
            />
          ))}
        </ul>
      )}
      {!isSavedMovies && filteredMovies.length > 0 && // Conditionally render if there are found movies
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


      {isSavedMovies && savedMovies.length === 0 && (
        <div className="cards__info-tooltip">
          <p className="cards__info-tooltip_text">{isInfoTooltip}</p>
        </div>
      )}
      {isSavedMovies && savedMovies.length > 0 && (
        <ul className="cards__grid">
          {savedMovies.map((movie) => (
            <MovieCard
              movie={movie}
              key={movie.id}
              onSaveMovie={onSaveMovie}
              onDeleteMovie={onDeleteMovie}
              savedMovies={savedMovies}
              setSavedMovies={setSavedMovies}
            />
          ))}
        </ul>
      )}

      {isSavedMovies && savedMovies.length > 0 && // Conditionally render if there are found movies
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
