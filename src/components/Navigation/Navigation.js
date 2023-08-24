import './Navigation.css';
import { Link } from 'react-router-dom';
import account_button from '../../images/account_button.svg'

function Navigation({ headerColor }) {

    const profileButtonClass = `navigation__profile-button ${headerColor === "blue" ? "navigation__profile-button_blue" : "navigation__profile-button_black"
        }`;

    const profileImageClass = `navigation__profile-button_image ${headerColor === "blue" ? "navigation__profile-button_image_blue" : "navigation__profile-button_image_black"
        }`;

    return (
        <div className='navigation__loggedIn'>
            <div className='navigation__links-left'>
                <Link to='/movies' className='navigation__link'>Фильмы</Link>
                <Link to='/saved-movies' className='navigation__link'>Сохранённые фильмы</Link>
            </div>
            <div className='navigation__links-right'>
                <Link to='/profile' className='navigation__profile-link'>
                    <button className={profileButtonClass}>
                        <p className='navigation__profile-button_text'>Аккаунт</p>
                        <img className={profileImageClass} src={account_button} alt='Аккаунт' />
                    </button>
                </Link>
            </div>
        </div>
    )
};

export default Navigation;