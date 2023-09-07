import React from "react";
import mainApi from "../../utils/MainApi";
import "./MovieCard.css";

function MovieCard({ movie, onSaveMovie, onDeleteMovie, savedMovies }) {
  const [isLiked, setIsLiked] = React.useState(false);

  const handleLikeClick = () => {
    if (!isLiked) {
      console.log("Movie not liked. Saving...", movie);
      // Call the onSaveMovie function if the movie is not liked
      onSaveMovie(movie);
    } else {
      console.log("Movie already liked. Deleting...", movie);
      console.log("Deleting movie with _id:", movie.movieId);
      // Call the onDeleteMovie function if the movie is already liked
      onDeleteMovie(movie.id); // Pass the movie ID to delete
    }
    setIsLiked(!isLiked);
  };

  const likeButtonClassName = `card__like-button ${
    isLiked ? "card__like-button_active" : ""
  }`;

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
          onClick={handleLikeClick}
        ></button>
      </div>
    </li>
  );
}

export default MovieCard;
