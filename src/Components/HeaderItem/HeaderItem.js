import React from "react";
import "./HeaderItem.css";

const HeaderItem = ({ children, title, desc, desc2 }) => (
  <div className="header-item">
    <div className="div-icon">
      <div className="icon">{children}</div>
    </div>
    <div className="pt-5">
      <h3 className="text-danger fw-bold">{title}</h3>
      {desc && <p className="text-secondary">{desc}</p>}
      {desc2 && <p className="text-secondary">{desc2}</p>}
    </div>
  </div>
);
export default HeaderItem;
