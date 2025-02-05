import React from "react";
import Coachitem from "../Coachitem/Coachitem";
import "./Coach.css";
const coaches = [
  { src: "v1.png", title: "محمد امینی", skill: "یوگا" },
  { src: "v2.png", title: "رضا پاکدامن", skill: "پرورش اندام" },
  { src: "v1.png", title: "محمد امینی", skill: "یوگا" },
  { src: "v2.png", title: "رضا پاکدامن", skill: "پرورش اندام" },
];
const Coach = () => (
  <div>
    <div className="text-center">
      <p className="fs-3 fw-bold mt-5">مربیان</p>
      <div className="underline"></div>
    </div>
    <div className="container">
      <div className="row coach-row">
        {coaches.map((coach, index) => (
          <Coachitem key={index} {...coach} />
        ))}
      </div>
      <div className="text-center mt-5">
        <button className="btn btn-danger">مشاهده همه مربیان</button>
      </div>
    </div>
  </div>
);
export default Coach;
