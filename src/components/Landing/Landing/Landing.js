import AboutMe from "../../AboutMe/AboutMe";
import AboutProject from "../../AboutProject/AboutProject";
import Header from "../../common/Header/Header";
import Footer from "../../Footer/Footer";
import NavTab from "../../NavTab/NavTab";
import Portfolio from "../../Portfolio/Portfolio";
import Promo from "../../Promo/Promo";
import Techs from "../../Techs/Techs";

function Landing() {
    return (
        <>
        <Header />
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

export default Landing;