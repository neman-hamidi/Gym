import React from "react";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import GroupsIcon from "@mui/icons-material/Groups";
import HeaderItem from "../HeaderItem/HeaderItem";
import "./Underheader.css";

export default function Underheader() {
  return (
    <div>
      <div className="text-center">
        <p className="fs-3 fw-bold mt-5">خوش آمدید</p>
        <div className="underline"></div>
        <p className="text-secondary p-1">
          به وب سایت رویال فیتنس خوش آمدید! امیدواریم که شما از خدمات و فرصتهای
          ما به مشتریان وفادار و بالقوه ما قدردانی کنیم.
        </p>
        <p className="text-secondary">در اینجا برخی از آنها آورده شده است:</p>
      </div>
      <div className="header-grid">
        <HeaderItem
          title="تجهیزات مدرن بدنسازی"
          desc="ما با پیشروان تامین کننده تجهیزات تناسب اندام"
          desc2="همکاری می کنیم تا نتایج برتر کسب کنیم."
        >
          <FitnessCenterIcon className="text-white" />
        </HeaderItem>
        <HeaderItem
          title="رویکرد فردی"
          desc="هر مشتری از رویال فیت نس یک برنامه شخصی برای"
          desc2="آموزش و تغذیه دارد."
        >
          <ThumbUpOffAltIcon className="text-white" />
        </HeaderItem>
        <HeaderItem
          title="مربیان واجد شرایط"
          desc="مربیان ما سالها تجربه در انواع مختلف بدنسازی و"
          desc2="ورزش دارند."
        >
          <GroupsIcon className="text-white" />
        </HeaderItem>
      
      </div>
    </div>
  );
}
