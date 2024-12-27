import React from "react";
import "./HeaderItem.css";

export default function HeaderItem({ children, title, desc,desc2 }) {
  return (
    <div className="header-item">
      <div className="div-icon">
        <div className="icon">{children}</div>
      </div>
      <div className="pt-5">
        <p className="text-danger fw-bold">{title}</p>
        <p className="text-secondary">{desc}</p>
        <p className="text-secondary">{desc2}</p>
      </div>
    </div>
  );
}
