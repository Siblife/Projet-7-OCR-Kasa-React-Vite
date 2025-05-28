import { useState } from "react";
import "../styles/Collapse.scss";

function Collapse({ title, children }) {
  const [open, setOpen] = useState(false);

  return (
    <div className={`collapse ${open ? "open" : ""}`}>
      <div className="collapse_header" onClick={() => setOpen(!open)}>
        <span>{title}</span>
        <span className={`arrow ${open ? "up" : "down"}`}>▼</span>
      </div>
      <div className="collapse_content">
        {children}
      </div>
    </div>
  );
}

export default Collapse;