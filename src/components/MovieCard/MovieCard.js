import React, { useEffect } from "react";
import mainApi from "../../utils/MainApi";
import "./MovieCard.css";

function MovieCard({
  movie,
  onSaveMovie,
  onDeleteMovie,
  savedMovies,
  setSavedMovies,
}) {
  const [isLiked, setIsLiked] = React.useState(false);
  const likeButtonClassName = `card__like-button ${
    isLiked ? "card__like-button_active" : ""
  }`;

  useEffect(() => {
    // окрашиваем кнопку лайка, если фильм нашелся в сохраненных
    if (savedMovies.some((savedMovie) => savedMovie.movieId === movie.id)) {
      setIsLiked(true);
    }
  }, [savedMovies, movie.id]);

  const savedMovieCheck = () => {
    return savedMovies.find((savedMovie) => savedMovie.movieId === movie.id);
  };

  const handleLikeClick = () => {
    onSaveMovie(movie);
    setIsLiked(true);
  };

  const handleDislikeClick = () => {
    const savedMovie = savedMovieCheck();
    onDeleteMovie(savedMovie);
    setIsLiked(false);
  };


  const openTrailer = () => {
    if (movie.trailerLink) {
      window.open(movie.trailerLink, "_blank");
    }
  };

  return (
    <li className="card">
      <img
        className="card__image"
        src={`https://api.nomoreparties.co/${movie.image.url}`}
        alt={movie.nameRU}
        onClick={openTrailer}
      ></img>
      <div className="card__element">
        <div className="card__info">
          <h2 className="card__title">{movie.nameRU}</h2>
          <p className="card__length">
            {Math.floor(movie.duration / 60)}ч {movie.duration % 60}м
          </p>
        </div>
        <button
          className={likeButtonClassName}
          aria-label="Сохранить"
          type="button"
          onClick={isLiked ? handleDislikeClick : handleLikeClick}
        ></button>
      </div>
    </li>
  );
}

export default MovieCard;
