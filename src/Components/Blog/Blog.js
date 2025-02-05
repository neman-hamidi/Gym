import React from "react";
import "./Blog.css";
import Blogitem from "../Blogitem/Blogitem";

const blogItems = [
  {
    title: "آموزش فردی: از کجا شروع کنیم",
    desc: "۰۲ دی ۹۸",
    src: "z1.png",
  },
  {
    title: "از کجا شروع کنیم",
    desc: "۱۸ بهمن ۹۷",
    src: "z2.png",
  },
  {
    title: "چگونه یک بدن عضلانی کامل حفظ شود",
    desc: "۱۸ بهمن ۹۷",
    src: "z3.png",
  },
  {
    title: "عناصر یک تمرین ورزشی مناسب",
    desc: "۱۸ بهمن ۹۷",
    src: "z4.png",
  },
];

const Blog = () => {
  return (
    <>
      <header className="mt-5 text-center">
        <h2 className="fs-3 fw-bold">​آخرین پست های وبلاگ </h2>
        <div className="underline"></div>
      </header>
      <div className="blogitem text-center container">
        {blogItems.map((item, index) => (
          <Blogitem key={index} {...item} />
        ))}
      </div>
      <div className="text-center my-4">
        <button className="btn btn-outline-warning">
          مشاهده تمام وبلاگ ها
        </button>
      </div>
    </>
  );
};
export default Blog;
