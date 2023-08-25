import Form from '../Form/Form';
import './Register.css';

function Register() {
    return (
        <>
            <Form greeting='Добро пожаловать!' button='Зарегестрироваться' question='Уже зарегистрированы?' path='/signin' link='Войти'>

                <label className='form__item'>
                    <p className='form__item-text'>Имя</p>
                    <input className='form__input' type='name' defaultValue='Алексей' required />
                    <p className='form__error'>Что-то пошло не так...</p>
                </label>

                <label className='form__item'>
                    <p className='form__item-text'>E-mail</p>
                    <input className='form__input' type='email' defaultValue='akazhanov72@yandex.ru' required />
                    <p className='form__error'>Что-то пошло не так...</p>
                </label>

                <label className='form__item'>
                    <p className='form__item-text'>Пароль</p>
                    <input className='form__input' type='password' defaultValue='••••••••••••••' required />
                    <p className='form__error'>Что-то пошло не так...</p>
                </label>

            </Form>
        </>
    )
};

export default Register;