import './AboutMe.css';

function AboutMe() {
    return (
        <section className='about-me' id='about-me'>
            <h2 className='about-me__header'>Студент</h2>

            <div className='about-me__container'>
                <div className='about-me__info'>
                    <h3 className='about-me__name'>Алексей</h3>
                    <p className='about-me__job'>Front-end developer, 25 лет</p>
                    <p className='about-me__description'>Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня есть жена
                        и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить. С 2015 года работал в компании «СКБ Контур». После того, как прошёл курс по веб-разработке, начал заниматься фриланс-заказами и ушёл с постоянной работы.</p>

                    <ul className='about-me__links'>
                        <li><a className='about-me__link' href='https://github.com/GenosseK'>Github</a></li>
                        <li><a className='about-me__link' href='https://vk.com/genossek'>VK</a></li>
                    </ul>
                </div>

                <img className='about-me__image' src='' alt='Это я' />

            </div>
        </section>
    )
};

export default AboutMe;