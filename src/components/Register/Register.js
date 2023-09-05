import Form from '../Form/Form';
import './Register.css';

function Register() {

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
            <Form greeting='Добро пожаловать!' button='Зарегистрироваться' question='Уже зарегистрированы?' path='/signin' link='Войти'>

                <label className='form__item'>Имя
                    <input className='form__input' type='text' defaultValue='Алексей' minLength="2" maxLength="30" required onInput={handleInputChange} />
                    <span className='form__error'></span>
                </label>

                <label className='form__item'>E-mail
                    <input className='form__input' type='email' defaultValue='akazhanov72@yandex.ru' required onInput={handleInputChange} />
                    <span className='form__error'></span>
                </label>

                <label className='form__item'>Пароль
                    <input className='form__input' type='password' defaultValue='••••••••••••••' minLength='2' maxLength='30' required onInput={handleInputChange} />
                    <span className='form__error'></span>
                </label>

            </Form>
        </>
    )
};

export default Register;