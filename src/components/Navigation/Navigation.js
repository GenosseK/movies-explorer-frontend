import './Navigation.css';
import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import account_button from '../../images/account_button.svg'
import cross from '../../images/cross.svg';

function Navigation({ headerColor }) {

    const location = useLocation();

    const [screenWidth, setScreenWidth] = useState(window.innerWidth);
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    useEffect(() => {
        const handleResize = () => {
            setScreenWidth(window.innerWidth);
        };

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);


    const handleHamburgerClick = () => {
        setIsMenuOpen(!isMenuOpen);
    }

    const handleCloseClick = () => {
        setIsMenuOpen(false);
    }

    const profileButtonClass = `header__profile-button ${headerColor === "blue" ? "header__profile-button_blue" : "header__profile-button_black"
        }`;

    const profileImageClass = `header__profile-button-image ${headerColor === "blue" ? "header__profile-button-image_blue" : "header__profile-button-image_black"
        }`;

    return (
        <>
            {screenWidth <= 800 ? (
                <>
                    <button className="header__hamburger" onClick={handleHamburgerClick}>
                        <span className="header__hamburger-bar"></span>
                        <span className="header__hamburger-bar"></span>
                        <span className="header__hamburger-bar"></span>
                    </button>
                    <div className={`header__menu ${isMenuOpen ? "open" : ""}`}>
                        <button className="header__close-button" onClick={handleCloseClick}>
                            <img src={cross} alt="Закрыть" className="header__close-icon" />
                        </button>
                        <div className="header__menu-links">
                            <Link className={`header__menu-link ${location.pathname === '/' ? 'active' : ''}`} to='/'>Главная</Link>
                            <Link className={`header__menu-link ${location.pathname === '/movies' ? 'active' : ''}`} to='/movies'>Фильмы</Link>
                            <Link className={`header__menu-link ${location.pathname === '/saved-movies' ? 'active' : ''}`} to='/saved-movies'>Сохранённые фильмы</Link>

                        </div>
                        <div className="header__account-button">
                        <Link to="/profile" className="header__profile-button header__profile-button_black">
                                <p className="header__profile-button-text">Аккаунт</p>
                                <img className="header__profile-button-image header__profile-button-image_black" src={account_button} alt="Аккаунт" />
                        </Link>
                        </div>
                    </div>
                </>
            ) : (
                <div className="header__navigation">
                    <div className="header__links-left">
                        <Link to="/movies" className={`header__link ${location.pathname === '/movies' ? 'active' : ''}`}>
                            Фильмы
                        </Link>
                        <Link to="/saved-movies" className={`header__link ${location.pathname === '/saved-movies' ? 'active' : ''}`}>
                            Сохранённые фильмы
                        </Link>
                    </div>
                    <div className="header__links-right">
                        <Link to="/profile" className={`header__profile-link ${profileButtonClass}`}>
                                <p className="header__profile-button-text">Аккаунт</p>
                                <img className={profileImageClass} src={account_button} alt="Аккаунт" />
                        </Link>
                    </div>
                </div>
            )}
        </>
    )
};

export default Navigation;