import { Link } from 'react-router-dom';
import '/src/styles/Header.scss';

function Header() {
  return (
    <header>
        <img src=".\src\assets\LOGO_mobile.svg" alt="Logo Kasa" />
      <nav>
        <Link to="/">Accueil</Link>
        <Link to="/about">À propos</Link>
      </nav>
    </header>
  );
}
export default Header