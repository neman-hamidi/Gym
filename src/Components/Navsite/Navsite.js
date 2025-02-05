import React from "react";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import InstagramIcon from "@mui/icons-material/Instagram";
import PhoneIcon from "@mui/icons-material/Phone";
import TelegramIcon from "@mui/icons-material/Telegram";
import TwitterIcon from "@mui/icons-material/Twitter";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import "./Navsite.css";

const socialIcons = [
  { Icon: InstagramIcon, key: "instagram" },
  { Icon: WhatsAppIcon, key: "whatsapp" },
  { Icon: TelegramIcon, key: "telegram" },
  { Icon: TwitterIcon, key: "twitter" },
];

export default function Navsite() {
  return (
    <div className="row Navbars-bg">
      <div className="col-6 col-md-4 Navbars-col">
          <p className="p-icon">
            {socialIcons.map(({ Icon, key }) => (
              <Icon key={key} className="fs-icon" />
            ))}
          </p>
      </div>
      <div className="col-6 col-md-4 Navbars-col">
        <p className="p-navbar-loc">
          <LocationOnIcon />
          آدرس باشگاه شما ...
        </p>
      </div>
      <div className="d-none d-md-block  col-4 Navbars-col">
        <p>
          <PhoneIcon />
          09105679278
        </p>
      </div>
    </div>
  );
}
