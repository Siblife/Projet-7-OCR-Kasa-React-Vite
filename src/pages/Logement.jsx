import {useParams } from "react-router-dom";
import logements from "../logements.json";


function Logement() {
  const { id } = useParams();
  const logement = logements.find((item) => item.id === id);

  if (!logement) return <div>Logement non trouvé</div>;

  return (
    <div className="logement-page">
      /* Slideshow */
      /* Titre + localisation */
      /* Tags */
      /* Host + Rating */
      <p>{logement.tags}</p>
      <p>{logement.host.name}</p>
      <img src={logement.host.picture} alt="" />
      /* Description (Collapse) */
      /* Équipements (Collapse) */
      
    </div>
  );
}

export default Logement;