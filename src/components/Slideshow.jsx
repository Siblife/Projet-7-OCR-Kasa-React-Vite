import { useState } from "react";
import "../styles/Slideshow.scss";
import "../styles/fontawesome.scss";

function Slideshow({ pictures = [] }) {
  const [current, setCurrent] = useState(0);
  const total = pictures.length;

  if (!Array.isArray(pictures) || total === 0) return null;

  const goToPrev = () =>
    setCurrent((prev) => (prev === 0 ? total - 1 : prev - 1));
  const goToNext = () =>
    setCurrent((prev) => (prev === total - 1 ? 0 : prev + 1));

  return (
    <div className="slideshow_container">
      {total > 1 && (
        <button
          className="slideshow_arrow slideshow_arrow_left"
          onClick={goToPrev}
          aria-label="Précédent"
        >
          <i className="fa-solid fa-chevron-left" aria-hidden="true"></i>
        </button>
      )}
      <img
        src={pictures[current]}
        alt={`Photo ${current + 1}`}
        className="slideshow_image"
      />
      {total > 1 && (
        <button
          className="slideshow_arrow slideshow_arrow_right"
          onClick={goToNext}
          aria-label="Suivant"
        >
          <i className="fa-solid fa-chevron-right" aria-hidden="true"></i>
        </button>
      )}
    </div>
  );
}

export default Slideshow;
