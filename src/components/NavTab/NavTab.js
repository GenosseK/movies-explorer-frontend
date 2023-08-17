import './NavTab.css';

function NavTab() {
    return (
        <nav className='navtab'>
            <ul className='navtab__list'>
                <li className='navtab__link'>
                    <a href='#about-project' className='navtab__link_text'>О проекте</a>
                </li>
                <li className='navtab__link'>
                    <a href='#techs' className='navtab__link_text'>Технологии</a>
                </li>
                <li className='navtab__link'>
                    <a href='#about-me' className='navtab__link_text'>Студент</a>
                </li>
            </ul>
        </nav>
    )
}

export default NavTab;