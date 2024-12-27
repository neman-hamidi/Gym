import React from "react";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import InstagramIcon from "@mui/icons-material/Instagram";
import PhoneIcon from "@mui/icons-material/Phone";
import TelegramIcon from "@mui/icons-material/Telegram";
import TwitterIcon from "@mui/icons-material/Twitter";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import "./Navsite.css";

export default function Navsite() {
  return (
      <div className="row Navbars-bg">
        <div className="col-6 col-md-4 Navbars-col">
          <p className="p-icon">
            <InstagramIcon className="fs-icon" />
            <WhatsAppIcon className="fs-icon"/>
            <TelegramIcon className="fs-icon"/>
            <TwitterIcon className="fs-icon" />
          </p>
        </div>
        <div className="col-6 col-md-4 Navbars-col">
          <p className="p-navbar-loc">
            <span>
              <LocationOnIcon />
            </span>
            آدرس باشگاه شما ...
          </p>
        </div>
        <div className="d-none d-md-block  col-4 Navbars-col">
          <p>
            <span>
              <PhoneIcon />
            </span>
            09105679278
          </p>
        </div>
      </div>
  );
}
