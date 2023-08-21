import './MovieCard.css';

function MovieCard({ card }) {
    return (
        <li className='card'>
            <img className='card__image' src={card.image} alt={card.title}></img>
            <div className='card__info'>
                <h2 className='card__title'>Криминальное чтиво</h2>
                <p className='card__length'>1ч 42</p>
                <button className='card__like-button' aria-label='Сохранить' type='button'></button>
            </div>
        </li>
    )   
};

export default MovieCard;