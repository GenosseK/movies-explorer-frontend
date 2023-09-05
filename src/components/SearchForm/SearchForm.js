import "./SearchForm.css";

function SearchForm({ movieSearch, searchInput, setSearchInput, handleToggleShortMovies, shortMoviesOnly }) {
    const handleSearch = (e) => {
        e.preventDefault();
        movieSearch(searchInput);
    };

    return (
        <form className="search" onSubmit={handleSearch}>
            <div className="search__container">
                <input
                    className="search__input"
                    placeholder="Фильмы"
                    type="text"
                    value={searchInput}
                    onChange={(e) => setSearchInput(e.target.value)}
                    required
                />
                <button className="search__button" />
            </div>
            <div className="search__toggle">
                <label className="search__tumbler">
                    <input type="checkbox" className="search__checkbox" checked={shortMoviesOnly} // Bind to the state variable
                        onChange={handleToggleShortMovies} />
                    <span className="search__slider" />
                </label>
                <p className="search__toggle-title">Короткометражки</p>
            </div>
        </form>
    );
}

export default SearchForm;
