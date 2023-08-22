import './Navigation.css';
import { Link } from 'react-router-dom';
import account_button from '../../images/account_button.svg'

function Navigation() {
    return (
        <div className='navigation__loggedIn'>
            <div className='navigation__links-left'>
                <Link to='/movies' className='navigation__link'>Фильмы</Link>
                <Link to='saved-movies' className='navigation__link'>Сохранённые фильмы</Link>
            </div>
            <div className='navigation__links-right'>
                <Link to='/profile'>
                    <button className='navigation__account-button'>
                        <p className='navigation__account-button_text'>Аккаунт</p>
                        <img className='navigation__account-button_image' src={account_button} alt='Аккаунт'/>
                    </button>
                </Link>
            </div>
        </div>
    )
};

export default Navigation;