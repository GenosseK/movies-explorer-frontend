import { useEffect, useState } from 'react';
import mainApi from '../../utils/MainApi';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearchForm from '../SearchForm/SearchForm';
import './SavedMovies.css';

function SavedMovies({ loggedIn, headerColor, isInfoTooltip, setIsInfoTooltip, onSaveMovie, savedMovies, onDeleteMovie  }) {

    return (
        <>
            <Header loggedIn={loggedIn} headerColor={headerColor} />
            <main>
                <SearchForm />
                <MoviesCardList isInfoTooltip={isInfoTooltip} isSavedMovies={true} onSaveMovie={onSaveMovie} savedMovies={savedMovies} onDeleteMovie={onDeleteMovie} />
            </main>
            <Footer />
        </>
    )
};

export default SavedMovies;