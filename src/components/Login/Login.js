import Form from '../Form/Form';
import './Login.css';

function Login() {

    const handleInputChange = (event) => {
        const input = event.target;
        const errorSpan = input.nextElementSibling; // Следующий элемент после инпута – это span с ошибкой
        if (!input.validity.valid) {
            errorSpan.textContent = input.validationMessage;
        } else {
            errorSpan.textContent = '';
        }
    };

    return (
        <>
            <Form greeting='Рады видеть!' button='Войти' question='Ещё не зарегистрированы?' path='/signup' link='Регистрация'>

                <label className='form__item'>E-mail
                    <input className='form__input' type='email' defaultValue='akazhanov72@yandex.ru' onInput={handleInputChange} required />
                    <span className='form__error'></span>
                </label>

                <label className='form__item'>Пароль
                    <input className='form__input' type='password' defaultValue='••••••••••••••' minLength="2" maxLength="30" onInput={handleInputChange} required />
                    <span className='form__error'></span>
                </label>
                
            </Form>

        </>
    )
};

export default Login;