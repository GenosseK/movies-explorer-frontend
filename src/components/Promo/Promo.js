import './Promo.css';
import promo from '../../images/landing-logo.svg';

function Promo() {
    return (
        <section className='promo'>
            <div className='promo__container'>
                <h1 className='promo__title'>Учебный проект студента факультета Веб-разработки.</h1>
                <img className='promo__logo' src={promo} alt='Логотип Практикума' />
            </div>
        </section>
    )
};

export default Promo;