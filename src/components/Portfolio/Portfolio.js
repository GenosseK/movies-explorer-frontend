import './Portfolio.css';


function Portfolio() {
    return (
        <section className='portfolio'>
            <h2 className='portfolio__header'>Портфолио</h2>

            <ul className='portfolio__list'>
                <li className='portfolio__list-item'>
                    <a className='portfolio__link' href='https://github.com/GenosseK/how-to-learn' target='_blank' rel='noopener noreferrer'>Статичный сайт</a>
                </li>
                <li className='portfolio__list-item'>
                    <a className='portfolio__link' href='https://github.com/GenosseK/russian-travel' target='_blank' rel='noopener noreferrer'>Адаптивный сайт</a>
                </li>
                <li className='portfolio__list-item'>
                    <a className='portfolio__link' href='https://github.com/GenosseK/react-mesto-api-full-gha' target='_blank' rel='noopener noreferrer'>Одностраничное приложение</a>
                </li>
            </ul>
        </section>
    )
};

export default Portfolio;