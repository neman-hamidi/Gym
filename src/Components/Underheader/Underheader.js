import React from "react";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import GroupsIcon from "@mui/icons-material/Groups";
import HeaderItem from "../HeaderItem/HeaderItem";
import "./Underheader.css";

const headerItems = [
  {
    title: "تجهیزات مدرن بدنسازی",
    desc: "ما با پیشروان تامین کننده تجهیزات تناسب اندام همکاری می‌کنیم تا نتایج برتر کسب کنیم.",
    Icon: FitnessCenterIcon,
  },
  {
    title: "رویکرد فردی",
    desc: "هر مشتری از رویال فیتنس یک برنامه شخصی برای آموزش و تغذیه دارد.",
    Icon: ThumbUpOffAltIcon,
  },
  {
    title: "مربیان واجد شرایط",
    desc: "مربیان ما سال‌ها تجربه در انواع مختلف بدنسازی و ورزش دارند.",
    Icon: GroupsIcon,
  },
];
const Underheader = () => (
  <>
    <div className="text-center">
      <h2 className="fs-3 fw-bold mt-5">خوش آمدید</h2>
      <div className="underline"></div>
      <p className="text-secondary p-1">
        به وب سایت رویال فیتنس خوش آمدید! امیدواریم که شما از خدمات و فرصتهای ما
        به مشتریان وفادار و بالقوه ما قدردانی کنیم.
      </p>
      <p className="text-secondary">در اینجا برخی از آنها آورده شده است:</p>
    </div>
    <div className="header-grid">
      {headerItems.map(({ title, desc, Icon }, index) => (
        <HeaderItem key={index} title={title} desc={desc}>
          <Icon className="text-white" />
        </HeaderItem>
      ))}
    </div>
  </>
);
export default Underheader;
