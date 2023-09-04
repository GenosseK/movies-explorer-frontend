import Header from '../Header/Header';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearchForm from '../SearchForm/SearchForm';
import Footer from '../Footer/Footer';
import './Movies.css';
import moviesApi from '../../utils/MoviesApi';
import { useEffect, useState } from 'react';

function Movies({ loggedIn, headerColor, movies, setIsInfoToolTip, IsInfoToolTip }) {

    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');
    const [searchInput, setSearchInput] = useState('');
    const [filteredMovies, setFilteredMovies] = useState([]);

    const movieSearch = (query) => {
        const lowercaseSearch = query.toLowerCase();

        const filtered = movies.filter(
            (movie) =>
              movie.nameRU.toLowerCase().includes(lowercaseSearch) ||
              movie.nameEN.toLowerCase().includes(lowercaseSearch)
          );
        
          setFilteredMovies(filtered);

    }

    return (
        <>
            <Header loggedIn={loggedIn} headerColor={headerColor} />
            <main>
                <SearchForm movieSearch={movieSearch} searchInput={searchInput} setSearchInput={setSearchInput} />
                <MoviesCardList filteredMovies={filteredMovies}/>
            </main>
            <Footer />
        </>
    )
};

export default Movies;