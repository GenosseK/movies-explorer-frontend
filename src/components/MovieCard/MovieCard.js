import React from 'react';
import './MovieCard.css';

function MovieCard({ card }) {

    const [isLiked, setIsLiked] = React.useState(false);

    const handleLikeClick = () => {
        setIsLiked(!isLiked);
    };

    const likeButtonClassName = `card__like-button ${isLiked ? 'card__like-button_active' : ''}`;

    return (
        <li className='card'>
        <img className='card__image' src={card.image} alt={card.title}></img>
        <div className='card__element'>
            <div className='card__info'>
                <h2 className='card__title'>{card.title}</h2>
                <p className='card__length'>{card.length}</p>
            </div>
            <button className={likeButtonClassName} aria-label='Сохранить' type='button' onClick={handleLikeClick}></button>
        </div>
    </li>
    )   
};

export default MovieCard;