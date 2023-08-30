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

    const profileButtonClass = `navigation__profile-button ${headerColor === "blue" ? "navigation__profile-button_blue" : "navigation__profile-button_black"
        }`;

    const profileImageClass = `navigation__profile-button_image ${headerColor === "blue" ? "navigation__profile-button_image_blue" : "navigation__profile-button_image_black"
        }`;

    return (
        <>
            {screenWidth <= 800 ? (
                <>
                    <button className="navigation__hamburger" onClick={handleHamburgerClick}>
                        <span className="navigation__hamburger-bar"></span>
                        <span className="navigation__hamburger-bar"></span>
                        <span className="navigation__hamburger-bar"></span>
                    </button>
                    <div className={`navigation__menu ${isMenuOpen ? "open" : ""}`}>
                        <button className="navigation__close-button" onClick={handleCloseClick}>
                            <img src={cross} alt="Закрыть" className="navigation__close-icon" />
                        </button>
                        <div className="navigation__menu_links">
                            <Link className={`navigation__menu_link ${location.pathname === '/' ? 'active' : ''}`} to='/'>Главная</Link>
                            <Link className={`navigation__menu_link ${location.pathname === '/movies' ? 'active' : ''}`} to='/movies'>Фильмы</Link>
                            <Link className={`navigation__menu_link ${location.pathname === '/saved-movies' ? 'active' : ''}`} to='/saved-movies'>Сохранённые фильмы</Link>

                        </div>
                        <div className="navigation__menu_account-button">
                        <Link to="/profile" className="navigation__profile-button navigation__profile-button_black">
                                <p className="navigation__profile-button_text">Аккаунт</p>
                                <img className="navigation__profile-button_image navigation__profile-button_image_black" src={account_button} alt="Аккаунт" />
                        </Link>
                        </div>
                    </div>
                </>
            ) : (
                <div className="navigation__loggedIn">
                    <div className="navigation__links-left">
                        <Link to="/movies" className="navigation__link">
                            Фильмы
                        </Link>
                        <Link to="/saved-movies" className="navigation__link">
                            Сохранённые фильмы
                        </Link>
                    </div>
                    <div className="navigation__links-right">
                        <Link to="/profile" className={`navigation__profile-link ${profileButtonClass}`}>
                                <p className="navigation__profile-button_text">Аккаунт</p>
                                <img className={profileImageClass} src={account_button} alt="Аккаунт" />
                        </Link>
                    </div>
                </div>
            )}
        </>
    )
};

export default Navigation;