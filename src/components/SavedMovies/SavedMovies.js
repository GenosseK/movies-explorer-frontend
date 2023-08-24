import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearchForm from '../SearchForm/SearchForm';
import './SavedMovies.css';

function SavedMovies({ loggedIn, headerColor }) {
    return (
        <>
        <Header loggedIn={loggedIn} headerColor={headerColor} />
        <SearchForm />
        <MoviesCardList />
        <Footer />
        </>
    )
};

export default SavedMovies;