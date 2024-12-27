import React from "react";
import "./Blog.css";
import Blogitem from "../Blogitem/Blogitem";

export default function Blog() {
  return (
    <>
      <div>
        <p className="fs-3 fw-bold mt-5 text-center">​آخرین پست های وبلاگ        </p>
        <div className="underline"></div>
      </div>
      <div className="blogitem text-center container">
        <Blogitem
          title="آموزش فردی: از کجا شروع کنیم"
          desc="۰۲ دی ۹۸"
          src="z1.png"
        />
        <Blogitem title="از کجا شروع کنیم" desc="۱۸ بهمن ۹۷" src="z2.png" />
        <Blogitem
          title="چگونه یک بدن عضلانی کامل حفظ شود"
          desc="۱۸ بهمن ۹۷"
          src="z3.png"
        />
        <Blogitem
          title="عناصر یک تمرین ورزشی مناسب"
          desc="۱۸ بهمن ۹۷"
          src="z4.png"
        />
      </div>
      <div className="text-center my-4">
        <div className="btn btn-outline-warning">مشاهده تمام وبلاگ ها</div>
      </div>
    </>
  );
}
