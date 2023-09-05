import { Link } from 'react-router-dom';
import './AboutUser.css';

function AboutUser() {
    return (
        <section className='profile'>
            <form className='profile__form'>
                <h2 className='profile__greeting'>Привет, Алексей!</h2>
                <div className='profile__inputs'>
                    <p className='profile__text'>Имя</p>
                    <div className='profile__area'>
                        <input className='profile__input profile__input_type_name' defaultValue='Алексей' required />
                    </div>
                    <p className='profile__text'>E-mail</p>
                    <div className='profile__area'>
                        <input className='profile__input profile__input_type_email' defaultValue='akazhanov72@yandex.ru' required />
                    </div>
                </div>
                <Link to='/profile' className='profile__button'>Редактировать</Link>
                <Link to='/' className='profile__link'>Выйти из аккаунта</Link>
            </form>
        </section>
    )
};

export default AboutUser;