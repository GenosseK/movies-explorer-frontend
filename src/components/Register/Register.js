import { useState } from "react";
import { Link } from "react-router-dom";
import Form from "../Form/Form";
import "./Register.css";
import logo from '../../images/logo.svg'
import {
    validateName,
    validateEmail,
    validatePassword,
} from "../../utils/FormValidation";

function Register({ onRegister }) {

    const [errors, setErrors] = useState({
        name: '',
        email: '',
        password: '',
      });

    const handleInputChange = (event) => {
        const input = event.target;
        const name = input.name;
        const value = input.value;
      
        // Call the appropriate validation function based on the input name
        let error = '';
        if (name === 'name') {
          error = validateName(value);
        } else if (name === 'email') {
          error = validateEmail(value);
        } else if (name === 'password') {
          error = validatePassword(value);
        }
      
        // Update the errors state
        setErrors({ ...errors, [name]: error });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        onRegister({ name, email, password });
    };

    <Form
        greeting="Добро пожаловать!"
        button="Зарегистрироваться"
        question="Уже зарегистрированы?"
        path="/signin"
        link="Войти"
        onSubmit={handleSubmit}
    ></Form>


    return (
        <section className='form'>

            <div className='form__container'>
                <Link to='/'>
                    <img className="form__logo" src={logo} alt="Логотип приложения" />
                </Link>
                <h2 className='form__title'> Добро пожаловать! </h2>
                <form className='form__inputs' onSubmit={handleSubmit}>
                    <label className="form__item">
                        Имя
                        <input
                            className="form__input"
                            type="text"
                            name="name"
                            placeholder="Алексей"
                            minLength="2"
                            maxLength="30"
                            required
                            onInput={handleInputChange}
                        />
                        <span className="form__error">{errors.name}</span>
                    </label>

                    <label className="form__item">
                        E-mail
                        <input
                            className="form__input"
                            type="email"
                            name="email"
                            placeholder="akazhanov72@yandex.ru"
                            required
                            onInput={handleInputChange}
                        />
                        <span className="form__error">{errors.email}</span>
                    </label>

                    <label className="form__item">
                        Пароль
                        <input
                            className="form__input"
                            type="password"
                            name="password"
                            placeholder="••••••••••••••"
                            minLength="2"
                            maxLength="30"
                            required
                            onInput={handleInputChange}
                        />
                        <span className="form__error">{errors.password}</span>
                    </label>
                    <button className='form__button' type='submit' >Зарегистрироваться</button>

                </form>
                <p className='form__text'>
                    Уже зарегистрированы?
                    <Link to="/signin" className='form__link'>Войти</Link>
                </p>

            </div>
        </section >
    );
}

export default Register;
