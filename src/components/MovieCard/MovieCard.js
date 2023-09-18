import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./MovieCard.css";
import { formatMovieDuration } from "../../utils/constants";

function MovieCard({
  movie,
  onSaveMovie,
  onDeleteMovie,
  savedMovies,
  setSavedMovies,
  filteredMovies,
  setFilteredMovies,
}) {
  const location = useLocation();

  const [isLiked, setIsLiked] = React.useState(false);
  let likeButtonClassName = "card__like-button";

  if (location.pathname === "/movies") {
    likeButtonClassName += isLiked ? " card__like-button_active" : "";
  } else if (location.pathname === "/saved-movies") {
    likeButtonClassName = "card__like-delete";
  }

  useEffect(() => {
    // окрашиваем кнопку лайка, если фильм нашелся в сохраненных
    if (
      savedMovies.some(
        (savedMovie) => savedMovie.movieId === movie.id || movie.movieId
      )
    ) {
      setIsLiked(true);
    }
  }, [savedMovies, movie.id]);

  const savedMovieCheck = () => {
    return savedMovies.find(
      (savedMovie) => savedMovie.movieId === movie.id || movie.movieId
    );
  };

  const handleLikeClick = () => {
    if (location.pathname === "/movies") {
      onSaveMovie(movie);
      setIsLiked(true);
    }
  };

  const handleDislikeClick = () => {
    const savedMovie = savedMovieCheck();
    onDeleteMovie(savedMovie);
    setIsLiked(false);
    if (location.pathname === "/saved-movies") {
      const updatedFilteredMovies = filteredMovies.filter(
        (filteredMovie) => filteredMovie.id !== movie.id
      );
      setFilteredMovies(updatedFilteredMovies);
    }
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
        src={
          movie.image.url
            ? `https://api.nomoreparties.co/${movie.image.url}`
            : movie.image
        }
        alt={movie.nameRU}
        onClick={openTrailer}
      ></img>
      <div className="card__element">
        <div className="card__info">
          <h2 className="card__title">{movie.nameRU}</h2>
          <p className="card__length">{formatMovieDuration(movie.duration)}</p>
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
