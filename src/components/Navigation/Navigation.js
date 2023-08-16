import './Navigation.css';
import { Link } from 'react-router-dom';

function Navigation() {
    return (
        <div className='navigation__auth'>
            <Link to='/signup' className='navigation__link'>Регистрация</Link>
            <Link to='/signin'>
            <button className='navigation__button'>Войти</button>
            </Link>
        </div>
    )
};

export default Navigation;