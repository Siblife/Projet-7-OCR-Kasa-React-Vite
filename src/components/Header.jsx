import { Link } from 'react-router-dom';
import '/src/styles/Header.scss';
import logo from './../assets/LOGO_mobile.svg'

function Header() {
  return (
    <header>
        <img src={logo} alt="Logo Kasa" />
      <nav>
        <Link to="/">Accueil</Link>
        <Link to="/about">À propos</Link>
      </nav>
    </header>
  );
}
export default Header