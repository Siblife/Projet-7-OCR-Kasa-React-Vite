import { useState } from "react";
import "../styles/Collapse.scss";

function Collapse({ title, children }) {
  const [open, setOpen] = useState(false);

  return (
    <div className={`collapse ${open ? "open" : ""}`}>
      <div className="collapse_header" onClick={() => setOpen(!open)}>
        <span>{title}</span>
        <i className={`fa-solid fa-chevron-${open ? "up" : "down"} arrow`}></i>
      </div>
      <div className="collapse_content">{children}</div>
    </div>
  );
}

export default Collapse;
