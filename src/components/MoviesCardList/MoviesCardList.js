import MovieCard from '../MovieCard/MovieCard';
import './MoviesCardList.css';
import like from '../../images/heart-active.svg'

function MoviesCardList({ cards }) {
    return (
        <section className="cards">
            <ul className='cards__grid'>
                <li className='card'>
                    <img className='card__image' src='https://mykaleidoscope.ru/uploads/posts/2021-10/1634188547_20-mykaleidoscope-ru-p-rizhii-tsvet-volos-devushki-krasivaya-pric-20.jpg' alt='Фильм'></img>
                    <div className='card__element'>
                        <div className='card__info'>
                            <h2 className='card__title'>Криминальное чтиво</h2>
                            <p className='card__length'>1ч 42</p>
                        </div>
                        <button className='card__like-button' aria-label='Сохранить' type='button'></button>
                    </div>
                </li>
                <li className='card'>
                    <img className='card__image' src='https://mykaleidoscope.ru/uploads/posts/2021-10/1634188547_20-mykaleidoscope-ru-p-rizhii-tsvet-volos-devushki-krasivaya-pric-20.jpg' alt='Фильм'></img>
                    <div className='card__element'>
                        <div className='card__info'>
                            <h2 className='card__title'>Криминальное чтиво</h2>
                            <p className='card__length'>1ч 42</p>
                        </div>
                        <button className='card__like-button' aria-label='Сохранить' type='button'></button>
                    </div>
                </li>
                <li className='card'>
                    <img className='card__image' src='https://mykaleidoscope.ru/uploads/posts/2021-10/1634188547_20-mykaleidoscope-ru-p-rizhii-tsvet-volos-devushki-krasivaya-pric-20.jpg' alt='Фильм'></img>
                    <div className='card__element'>
                        <div className='card__info'>
                            <h2 className='card__title'>Криминальное чтиво</h2>
                            <p className='card__length'>1ч 42</p>
                        </div>
                        <button className='card__like-button' aria-label='Сохранить' type='button'></button>
                    </div>
                </li>
                <li className='card'>
                    <img className='card__image' src='https://sun9-46.userapi.com/impg/qpNKBfJNGiL8KcxSZiZUPdlxCl7IpkI2mNYC8Q/uF_kV-kfpn8.jpg?size=985x1080&quality=95&sign=e44a56fe595f22eaf91a4f11a037956a&type=album' alt='Фильм'></img>
                    <div className='card__element'>
                        <div className='card__info'>
                            <h2 className='card__title'>Криминальное чтиво</h2>
                            <p className='card__length'>1ч 42</p>
                        </div>
                        <button className='card__like-button' aria-label='Сохранить' type='button'></button>
                    </div>
                </li>
                <li className='card'>
                    <img className='card__image' src='https://sun9-46.userapi.com/impg/qpNKBfJNGiL8KcxSZiZUPdlxCl7IpkI2mNYC8Q/uF_kV-kfpn8.jpg?size=985x1080&quality=95&sign=e44a56fe595f22eaf91a4f11a037956a&type=album' alt='Фильм'></img>
                    <div className='card__element'>
                        <div className='card__info'>
                            <h2 className='card__title'>Криминальное чтиво</h2>
                            <p className='card__length'>1ч 42</p>
                        </div>
                        <button className='card__like-button' aria-label='Сохранить' type='button'></button>
                    </div>
                </li>
                <li className='card'>
                    <img className='card__image' src='https://sun9-46.userapi.com/impg/qpNKBfJNGiL8KcxSZiZUPdlxCl7IpkI2mNYC8Q/uF_kV-kfpn8.jpg?size=985x1080&quality=95&sign=e44a56fe595f22eaf91a4f11a037956a&type=album' alt='Фильм'></img>
                    <div className='card__element'>
                        <div className='card__info'>
                            <h2 className='card__title'>Криминальное чтиво</h2>
                            <p className='card__length'>1ч 42</p>
                        </div>
                        <button className='card__like-button' aria-label='Сохранить' type='button'></button>
                    </div>
                </li>
            </ul>

            <div className='card__button-container'>
                <button className='card__loader-button' type='button'>Ещё</button>
            </div>
        </section>
    )
}

export default MoviesCardList;