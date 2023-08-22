import "./Header.css";
import logo from "../../images/logo.svg";
import { Link } from "react-router-dom";
import Navigation from "../Navigation/Navigation";
import NavAuth from "../NavAuth/NavAuth";

function Header({ loggedIn }) {
  return (
    <header className="header">
      <Link to="/">
        <img 
        className="header__logo" 
        src={logo} 
        alt="Логотип приложения" 
        />
      </Link>      
      {!loggedIn && <NavAuth />}
      {loggedIn && <Navigation />}
    </header>
  );
}

export default Header;
