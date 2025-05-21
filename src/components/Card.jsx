import "../styles/Card.scss";

function Card({ title, cover }) {
  return (
    <div className="cardLogement">
      <img src={cover} alt={title} className="cardImg" />
      <p className="cardTitle">{title}</p>
    </div>
  );
}

export default Card;
