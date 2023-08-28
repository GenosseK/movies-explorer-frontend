import React from 'react';
import MovieCard from '../MovieCard/MovieCard';
import { cards } from '../../utils/constants';
import './MoviesCardList.css';
import like from '../../images/heart-active.svg';
import Preloader from '../Preloader/Preloader';

function MoviesCardList() {

    const [isLoading, setLoading] = React.useState(false);

    const handlePreloader = () => {
        setLoading(true);
    };

    return (
        <section className="cards">
            <ul className='cards__grid'>
                {cards.slice().map((card, i) => (
                    <MovieCard
                        card={card}
                    />
                ))}
            </ul>
            {isLoading ? (<Preloader />) : (
                <div className='card__button-container'>
                    <button className='card__loader-button' type='button' onClick={handlePreloader}>Ещё</button>
                </div>)}
        </section>
    )
}

export default MoviesCardList;