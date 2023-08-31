import "./Header.css";
import logo from "../../images/logo.svg";
import { Link } from "react-router-dom";
import Navigation from "../Navigation/Navigation";
import NavAuth from "../NavAuth/NavAuth";

function Header({ loggedIn, headerColor }) {

  const headerClass = `header ${headerColor === "blue" ? "header_blue" : "header_black"}`;

  return (
    <header className={headerClass}>
      <Link to="/">
        <img 
        className="header__logo" 
        src={logo} 
        alt="Логотип приложения" 
        />
      </Link>      
      {!loggedIn && <NavAuth />}
      {loggedIn && <Navigation headerColor={headerColor} />}
    </header>
  );
}

export default Header;
