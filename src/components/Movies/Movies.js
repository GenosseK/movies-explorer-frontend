import Header from '../Header/Header';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearchForm from '../SearchForm/SearchForm';
import Footer from '../Footer/Footer';
import './Movies.css';

function Movies({ loggedIn }) {
    return (
        <>
        <Header loggedIn={loggedIn} />
        <SearchForm />
        <MoviesCardList />
        <Footer />
        </>
    )
};

export default Movies;