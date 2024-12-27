import React from "react";
import Plansitem from "../Plansitem/Plansitem";

import "./Plan.css";
export default function Plan() {
  return (
    <div className="container my-5">
      <div className="row div-row-height">
        <Plansitem title="CIRCLE STUDIO​​​​​​​" src="q1.png" />
        <Plansitem title="FITNESS​​​​​​​" src="q2.png" />
        <Plansitem title="BODYBUILDING​​" src="q3.png" />
        <Plansitem title="CROSSFIT​​​​​​​" src="q1.png"/>
      </div>
    </div>
  );
}
