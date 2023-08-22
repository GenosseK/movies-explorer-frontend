import './Main.css'
import AboutMe from "../../AboutMe/AboutMe";
import AboutProject from "../../AboutProject/AboutProject";
import Header from '../../Header/Header';
import Footer from "../../Footer/Footer";
import NavTab from "../../NavTab/NavTab";
import Portfolio from "../../Portfolio/Portfolio";
import Promo from "../../Promo/Promo";
import Techs from "../../Techs/Techs";

function Main({ loggedIn }) {
    return (
        <>
        <Header loggedIn={loggedIn} />
        <Promo />
        <NavTab />
        <AboutProject />
        <Techs />
        <AboutMe />
        <Portfolio />
        <Footer />
        </>
    )
};

export default Main;