import { NavLink } from "react-router-dom";
import "/src/styles/Header.scss";
import logo from "./../assets/LOGO_mobile.svg";

function Header() {
  return (
    <header>
      <img src={logo} alt="Logo Kasa" />
      <nav>
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Accueil
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          À propos
        </NavLink>
      </nav>
    </header>
  );
}
export default Header;
