import Form from '../Form/Form';
import './Login.css';

function Login() {
    return (
        <>
            <Form greeting='Рады видеть!' button='Войти' question='Ещё не зарегистрированы?' path='signup' link='Регистрация'>

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

export default Login;