import { useState } from "react";
import "../styles/Slideshow.scss";

function Slideshow({ pictures }) {
  const [current, setCurrent] = useState(0);
  const total = pictures.length;

  // Gestion du clic sur la flèche gauche
  const prevSlide = () => {
    setCurrent(current === 0 ? total - 1 : current - 1);
  };

  // Gestion du clic sur la flèche droite
  const nextSlide = () => {
    setCurrent(current === total - 1 ? 0 : current + 1);
  };

  // Si une seule image, pas de flèches ni de numérotation
  if (total === 1) {
    return (
      <div className="slideshow">
        <img src={pictures[0]} alt="photo logement" className="slide-img" />
      </div>
    );
  }

  return (
    <div className="slideshow">
      <img src={pictures[current]} alt={`photo ${current + 1}`} className="slide-img" />
      <button className="arrow left" onClick={prevSlide}>&lt;</button>
      <button className="arrow right" onClick={nextSlide}>&gt;</button>
      <div className="slide-count">{current + 1} / {total}</div>
    </div>
  );
}

export default Slideshow;