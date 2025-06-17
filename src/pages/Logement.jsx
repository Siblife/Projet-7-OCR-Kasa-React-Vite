import { useParams, Navigate } from "react-router-dom";
import logements from "../logements.json";
import Slideshow from "../components/Slideshow";
import Collapse from "../components/Collapse";
import "../styles/fontawesome.scss";
import "../styles/Logement.scss";

function Logement() {
  const { id } = useParams();
  const logement = logements.find((item) => item.id === id);

  if (!logement) return <Navigate to="/404" replace />;

  return (
    <div className="logement_page">
      <Slideshow pictures={logement.pictures} />
      <div className="logement_top">
        <div className="logement_col_left">
          <h1 className="logement_title">{logement.title}</h1>
          <p className="logement_location">{logement.location}</p>
          <div className="logement_tags">
            {logement.tags.map((tag, idx) => (
              <span className="logement_tag" key={idx}>
                {tag}
              </span>
            ))}
          </div>
        </div>
        <div className="logement_col_right">
          <div className="logement_host_block">
            {(() => {
              const [prenom, ...nom] = logement.host.name.split(" ");
              return (
                <span className="host_name">
                  <span>{prenom}</span>
                  <br />
                  <span>{nom.join(" ")}</span>
                </span>
              );
            })()}
            <img
              className="host_picture"
              src={logement.host.picture}
              alt={logement.host.name}
            />
          </div>
          <div className="logement_rating logement_rating_right">
            {[1, 2, 3, 4, 5].map((n) => (
              <i
                key={n}
                className={
                  "fa-solid fa-star star" +
                  (n <= Number(logement.rating) ? " filled" : "")
                }
                aria-hidden="true"
              ></i>
            ))}
          </div>
        </div>
      </div>
      <div className="logement_collapses">
        <Collapse title="Description">{logement.description}</Collapse>
        <Collapse title="Équipements">
          <ul>
            {logement.equipments.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </Collapse>
      </div>
    </div>
  );
}

export default Logement;
