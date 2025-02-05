import React from "react";
import "./Header.css";

const Header = () => (
  <header className="Header">
    <div className="row Header-row pt-2">
      <div className="col-md-2 col-6">
        <span className="text-warning d-none d-md-block">سالن ورزشگاه</span>
        <p className="fw-bold fs-4 royal-p-header">رویال فیتنس</p>
      </div>
      <div className="col-8 col-md-8 justify-content-md-center Header-mid d-none d-md-flex">
        {[
          "خانه",
          "تعرفه ها",
          "مربیان",
          "سوالات متداول",
          "وبلاگ",
          "تماس با ما",
        ].map((item) => (
          <h4 key={item}>{item}</h4>
        ))}
      </div>
      <div className="col-md-2 col-6 justify-content-end ps-2 login">
        <p>ورود/ثبت نام</p>
      </div>
    </div>
    <div className="middle-header">
      <h2>هرگز تسلیم نشوید!</h2>
      <p>
        هر مربی بدن سازی برای شکل دادن بدن خود به چیزی که باید به آن افتخار کند
        ، به فداکاری و تلاش زیادی نیاز دارد.
      </p>
      <p> ما می توانیم هر آنچه را برای آن لازم دارید به شما ارائه دهیم.</p>
      <button className="btn btn-danger">شروع کنید</button>
    </div>
  </header>
);
export default Header;
