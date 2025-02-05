import React from "react";
import "./Blogitem.css";

const Blogitem = ({ src, title, desc }) => (
  <div className="blogitemMain">
    <div className="div-img-blog">
      <img src={src} alt={title || "Blog image"} />
    </div>
    <h4 className="mt-2">{title}</h4>
    <p className="text-secondary">{desc}</p>
  </div>
);
export default Blogitem;
