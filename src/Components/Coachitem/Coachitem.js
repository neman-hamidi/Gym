import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import PhoneIcon from "@mui/icons-material/Phone";
import TelegramIcon from "@mui/icons-material/Telegram";
import "./Coachitem.css";

export default function Coachitem({ src, title, skill }) {
  return (
    <div className="col-3 text-center">
      <div className="img-coach">
        <img src={src} alt="" />
      </div>
      <div className="py-3">
        <p className="fw-bold d-inline fs-4">{title}</p>
        <span className="fs-6 text-danger pe-2 fw-bold">{skill}</span>
      </div>
      <p className="text-secondary">
        وی می تواند تمام خصوصیات تناسب اندام و ایروبیک را به صورت گروهی یا
        جداگانه به شما یاد دهد.​​​​​​​​​​​​​​
      </p>
      <div className="icons-span">
        <span>
          <InstagramIcon />
        </span>
        <span>
          <PhoneIcon />
        </span>
        <span>
          <TelegramIcon />
        </span>
      </div>
    </div>
  );
}
