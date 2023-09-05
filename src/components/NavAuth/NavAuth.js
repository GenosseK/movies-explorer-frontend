import { Link } from 'react-router-dom';
import './NavAuth.css';

function NavAuth() {
    return (
        <div className='header__auth'>
            <Link to='/signup' className='header__link'>Регистрация</Link>
            <Link to='/signin'>
                <button className='header__button'>Войти</button>
            </Link>
        </div>
    )
};

export default NavAuth;