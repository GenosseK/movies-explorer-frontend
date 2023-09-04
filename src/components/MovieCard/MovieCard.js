import React from 'react';
import './MovieCard.css';

function MovieCard({ movie }) {

    const [isLiked, setIsLiked] = React.useState(false);

    const handleLikeClick = () => {
        setIsLiked(!isLiked);
    };

    const likeButtonClassName = `card__like-button ${isLiked ? 'card__like-button_active' : ''}`;

    return (
        <li className='card'>
            <img className='card__image' src={`https://api.nomoreparties.co/${movie.image.url}`} alt={movie.nameRU}></img>
            <div className='card__element'>
                <div className='card__info'>
                    <h2 className='card__title'>{movie.nameRU}</h2>
                    <p className='card__length'>{Math.floor(movie.duration / 60)}ч {movie.duration % 60}м</p>
                </div>
                <button className={likeButtonClassName} aria-label='Сохранить' type='button' onClick={handleLikeClick}></button>
            </div>
        </li>
    )
};

export default MovieCard;