import "../styles/Card.scss";
import { Link } from "react-router-dom";

function Card({ title, cover, id }) {
  return (
    <div className="cardLogement">
      <Link to={`/logement/${id}`}>
      <img src={cover} alt={title} className="cardImg" />
      </Link>
      <p className="cardTitle">{title}</p>
    </div>
  );
}

export default Card;
