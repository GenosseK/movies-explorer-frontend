import { Link } from "react-router-dom";
import "../Form/Form.css";
import "./Login.css";
import logo from "../../images/logo.svg";
import { useState } from "react";
import { validateEmail, validatePassword } from "../../utils/FormValidation";

function Login({ onLogginIn }) {
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [isFormValid, setIsFormValid] = useState(false);

  const handleInputChange = (event) => {
    const input = event.target;
    const name = input.name;
    const value = input.value;

    let error = "";
    if (name === "email") {
      error = validateEmail(value);
    } else if (name === "password") {
      error = validatePassword(value);
    }

    setErrors({ ...errors, [name]: error });

    const inputs = document.querySelectorAll(".form__input");
    const isAnyInputInvalid = Array.from(inputs).some(
      (input) => !input.validity.valid
    );
    setIsFormValid(!isAnyInputInvalid);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    onLogginIn({ email, password });
  };

  return (
    <section className="form">
      <div className="form__container">
        <Link to="/">
          <img className="form__logo" src={logo} alt="Логотип приложения" />
        </Link>
        <h2 className="form__title"> Рады видеть! </h2>
        <form className="form__inputs" onSubmit={handleSubmit}>
          <label className="form__item">
            E-mail
            <input
              className="form__input"
              type="email"
              name="email"
              placeholder="akazhanov72@yandex.ru"
              onInput={handleInputChange}
              required
              autoComplete="email"
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
              onInput={handleInputChange}
              required
              autoComplete="current-password"
            />
            <span className="form__error">{errors.password}</span>
          </label>
          <button
            className={`form__button ${
              !isFormValid && "form__button_disabled"
            }`}
            type="submit"
            disabled={!isFormValid}
          >
            Войти
          </button>
        </form>
        <p className="form__text">
          Ещё не зарегистрированы?
          <Link to="/signup" className="form__link">
            Регистрация
          </Link>
        </p>
      </div>
    </section>
  );
}

export default Login;
