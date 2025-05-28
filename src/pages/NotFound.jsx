import { Link } from "react-router-dom";
import "../styles/NotFound.scss";

function NotFound() {
  return (
    <div className="notfound_container">
      <h1 className="notfound_title">404</h1>
      <p className="notfound_text">Oups! La page que vous demandez n'existe pas.</p>
      <Link to="/" className="notfound_link">Retourner sur la page d’accueil</Link>
    </div>
  );
}

export default NotFound;