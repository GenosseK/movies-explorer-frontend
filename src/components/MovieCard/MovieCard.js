import './MovieCard.css';

function MovieCard({ card }) {
    return (
        <li className='card'>
        <img className='card__image' src={card.image} alt={card.name}></img>
        <div className='card__element'>
            <div className='card__info'>
                <h2 className='card__title'>{card.name}</h2>
                <p className='card__length'>{card.time}</p>
            </div>
            <button className='card__like-button' aria-label='Сохранить' type='button'></button>
        </div>
    </li>
    )   
};

export default MovieCard;