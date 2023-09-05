import React from 'react';
import MovieCard from '../MovieCard/MovieCard';
import { cards } from '../../utils/constants';
import './MoviesCardList.css';
import Preloader from '../Preloader/Preloader';

function MoviesCardList({ filteredMovies, isInfoTooltip }) {

    const [isLoading, setLoading] = React.useState(false);

    const handlePreloader = () => {
        setLoading(true);
    };

    return (
        <section className="cards">
            {isInfoTooltip ? (
                <div className='cards__info-tooltip'>
                <p className="cards__info-tooltip_text">Ничего не найдено</p>
                </div>
            ) : (
                <ul className="cards__grid">
                    {filteredMovies.map((movie) => (
                        <MovieCard movie={movie} key={movie.id} />
                    ))}
                </ul>
            )}
            {filteredMovies.length > 0 && ( // Conditionally render if there are found movies
                isLoading ? (<Preloader />) : (
                    <div className='cards__button-container'>
                        <button className='cards__loader-button' type='button' onClick={handlePreloader}>Ещё</button>
                    </div>
                ))
            }
        </section>
    )
}

export default MoviesCardList;