import './Footer.css';

function Footer() {

    const currentYear = new Date().getFullYear();

    return (
        <footer className='footer'>
            <h2 className='footer__title'>Учебный проект Яндекс.Практикум х BeatFilm.</h2>
            <div className='footer__container'>
                <p className='footer__copyright'>&copy; {currentYear}</p>
                <nav className='footer__nav'>
                    <ul className='footer__nav-list'>
                        <li className='footer__nav-item'>
                            <a className='footer__nav-link' href='https://practicum.yandex.ru/web/'>Яндекс.Практикум</a>
                        </li>
                        <li className='footer__nav-item'>
                            <a className='footer__nav-link' href='https://github.com/GenosseK'>Github</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </footer>
    )
};

export default Footer;