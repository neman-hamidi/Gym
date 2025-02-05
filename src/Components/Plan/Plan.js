import React from "react";
import Plansitem from "../Plansitem/Plansitem";
import "./Plan.css";

const plansData = [
  { title: "CIRCLE STUDIO​​​​​​​", src: "q1.png" },
  { title: "FITNESS​​​​​​​", src: "q2.png" },
  { title: "BODYBUILDING​​", src: "q3.png" },
  { title: "CROSSFIT​​​​​​​", src: "q1.png" },
];
const Plan = () => (
  <div className="container my-5">
    <div className="row div-row-height">
      {plansData.map((plan, index) => (
        <Plansitem key={index} {...plan} />
      ))}
    </div>
  </div>
);
export default Plan;
