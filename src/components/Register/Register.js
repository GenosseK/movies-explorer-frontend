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
            <Form greeting='Добро пожаловать!' button='Зарегестрироваться' question='Уже зарегистрированы?' path='/signin' link='Войти'>

                <label className='form__item'>
                    <p className='form__item-text'>Имя</p>
                    <input className='form__input' type='name' defaultValue='Алексей' minLength="2" maxLength="30" required onInput={handleInputChange} />
                    <span className='form__error'></span>
                </label>

                <label className='form__item'>
                    <p className='form__item-text'>E-mail</p>
                    <input className='form__input' type='email' defaultValue='akazhanov72@yandex.ru' required onInput={handleInputChange} />
                    <span className='form__error'></span>
                </label>

                <label className='form__item'>
                    <p className='form__item-text'>Пароль</p>
                    <input className='form__input' type='password' defaultValue='••••••••••••••' minLength='2' maxLength='30' required onInput={handleInputChange} />
                    <span className='form__error'></span>
                </label>

            </Form>
        </>
    )
};

export default Register;