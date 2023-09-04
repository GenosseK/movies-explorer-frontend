import React from 'react';
import MovieCard from '../MovieCard/MovieCard';
import { cards } from '../../utils/constants';
import './MoviesCardList.css';
import Preloader from '../Preloader/Preloader';

function MoviesCardList({ filteredMovies }) {

    const [isLoading, setLoading] = React.useState(false);

    const handlePreloader = () => {
        setLoading(true);
    };

    return (
        <section className="cards">
            <ul className='cards__grid'>
                {filteredMovies.map((movie) => (
                    <MovieCard movie={movie} key={movie.id} />
                ))}
            </ul>
            {isLoading ? (<Preloader />) : (
                <div className='cards__button-container'>
                    <button className='cards__loader-button' type='button' onClick={handlePreloader}>Ещё</button>
                </div>)}
        </section>
    )
}

export default MoviesCardList;