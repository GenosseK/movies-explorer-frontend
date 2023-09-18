import './Form.css';
import logo from '../../images/logo.svg';
import { Link } from 'react-router-dom';

function Form(props) {

    const { greeting, children, button, question, path, link } = props;

    return (
        <section className='form'>
            <div className='form__container'>
                <Link to='/'>
                    <img className="form__logo" src={logo} alt="Логотип приложения" />
                </Link>
                <h2 className='form__title'> {greeting} </h2>
                <form className='form__inputs'> {children} 
                
                <button className='form__button' type='submit' disabled >{button}</button>
                </form>
                <p className='form__text'>
                    {question}
                    <Link to={path} className='form__link'>{link}</Link>
                </p>
            </div>
        </section>
    )
};

export default Form;