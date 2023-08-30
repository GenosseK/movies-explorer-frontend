import Header from '../Header/Header';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearchForm from '../SearchForm/SearchForm';
import Footer from '../Footer/Footer';
import './Movies.css';

function Movies({ loggedIn, headerColor }) {
    return (
        <>
            <Header loggedIn={loggedIn} headerColor={headerColor} />
            <main>
                <SearchForm />
                <MoviesCardList />
            </main>
            <Footer />
        </>
    )
};

export default Movies;