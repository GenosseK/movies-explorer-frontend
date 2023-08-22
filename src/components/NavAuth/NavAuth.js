import { Link } from 'react-router-dom';
import './NavAuth.css';

function NavAuth() {
    return (
        <div className='navigation__auth'>
            <Link to='/signup' className='navigation__link'>Регистрация</Link>
            <Link to='/signin'>
                <button className='navigation__button'>Войти</button>
            </Link>
        </div>
    )
};

export default NavAuth;