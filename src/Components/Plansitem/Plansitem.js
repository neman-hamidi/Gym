import React from "react";
import PropTypes from "prop-types";
import "./Plansitem.css";

const Plansitem = ({ title, src }) => (
  <div className="col-md-3 col-12 plan-bg">
    <div className="div-img">
      <img src={src} alt={title || "image"} className="img-fluid" />
    </div>
    <div className="text-center desc-div">
      <p className="text-warning fw-bold my-5 fs-2">{title}​​​​​​​</p>
      <button className="btn btn-danger">برنامه رایگان</button>
    </div>
  </div>
);
Plansitem.propTypes = {
  title: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
};

export default Plansitem;
