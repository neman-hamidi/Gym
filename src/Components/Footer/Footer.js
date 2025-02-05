import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import InstagramIcon from "@mui/icons-material/Instagram";
import TelegramIcon from "@mui/icons-material/Telegram";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import "swiper/swiper-bundle.css";
import "./Footer.css";

const testimonials = [
  {
    imgSrc: "v2.png",
    name: "علی اراکی",
    feedback: "لورم و متن ساختگی بدون معنی",
  },
  {
    imgSrc: "v1.png",
    name: "علی اراکی",
    feedback: "لورم و متن ساختگی بدون معنی",
  },
  {
    imgSrc: "v2.png",
    name: "علی اراکی",
    feedback: "لورم و متن ساختگی بدون معنی",
  },
];

const TestimonialSlide = ({ imgSrc, name, feedback }) => (
  <SwiperSlide>
    <div className="text-center">
      <img src={imgSrc} alt={name} className="rounded-5" />
      <h4 className="text-white mt-2">{name}</h4>
      <p className="text-white">{feedback}</p>
    </div>
  </SwiperSlide>
);

const Footer = () => (
  <footer className="footer">
    <div className="pt-5">
      <p className="fs-3 fw-bold text-center text-white">نظر ورزشکاران</p>
      <div className="underline"></div>
      <div className="text-center my-4">
        <img src="blog.png" alt="Blog" />
      </div>
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        breakpoints={{
          640: {
            slidesPerView: 3,
          },
        }}
        className="my-5"
      >
        {testimonials.map((testimonial, index) => (
          <TestimonialSlide key={index} {...testimonial} />
        ))}
      </Swiper>
      );
    </div>
    <div className="container-fluid footer-end">
      <div className="row text-center pt-5">
        <div className="col-md-4 mb-4 mb-md-0">
          <p className="text-warning">سالن ورزشگاه</p>
          <p className="text-white fw-bold fs-5">رویال فیتنس</p>
          <div className="d-flex gap-2 justify-content-center ">
            {[InstagramIcon, TelegramIcon, FacebookIcon, TwitterIcon].map(
              (Icon, index) => (
                <div className="div-icons-footer" key={index}>
                  <Icon className="icons-footer-end" />
                </div>
              )
            )}
          </div>
        </div>
        <div className="col-md-4">
          <p className="text-white fw-bold">تماس با ما</p>
          <p className="text-secondary">تلفن:09105679278</p>
          <p className="text-secondary">تلگرام:@neman_h_s</p>
        </div>
        <div className="col-md-4">
          <p className="text-white fw-bold">خبرنامه</p>
          <p className="text-secondary">
            با ویژگی ها و فناوری های همیشه آینده محصول ما همراه باشید. نامه
            الکترونیکی خود را وارد کنید و در خبرنامه ما مشترک شوید.
          </p>
        </div>
      </div>
      <p className="text-white text-center my-2 pb-4">
        تمام حقوق این سایت متعلق به سالن ورزش رویال فیتنس است.
      </p>
    </div>
  </footer>
);
export default Footer;
