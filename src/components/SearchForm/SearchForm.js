import './SearchForm.css';

function SearchForm() {
    return (
        <form className='search'>
            <div className='search__container'>
                <input className='search__input' placeholder='Фильмы' type='text' required />
                <button className='search__button' />
            </div>
            <div className='search__toggle'>
                <label className="search__tumbler">
                    <input type="checkbox" className="search__checkbox" />
                    <span className="search__slider" />
                </label>
                <p className='search__toggle-title'>Короткометражки</p>
            </div>
        </form>
    )
};

export default SearchForm;