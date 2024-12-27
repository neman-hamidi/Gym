import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import InstagramIcon from "@mui/icons-material/Instagram";
import TelegramIcon from "@mui/icons-material/Telegram";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import "swiper/swiper-bundle.css";
import "./Footer.css";

export default function Footer() {
  return (
    <div className="footer">
      <div className="pt-5">
        <p className="fs-3 fw-bold text-center text-white">نظر ورزشکاران</p>
        <div className="underline"></div>
        <div className="text-center my-4">
          <img src="blog.png" alt="" />
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
          <SwiperSlide>
            <div className="text-center">
              <div>
                <img src="v2.png" alt="" className="rounded-5" />
              </div>
              <h4 className="text-white mt-2">علی اراکی</h4>
              <p className="text-white">لورم و متن ساختگی بدون معنی</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="text-center">
              <div>
                <img src="v1.png" alt="" className="rounded-5" />
              </div>
              <h4 className="text-white mt-2">علی اراکی</h4>
              <p className="text-white">لورم و متن ساختگی بدون معنی</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="text-center">
              <div>
                <img src="v2.png" alt="" className="rounded-5" />
              </div>
              <h4 className="text-white mt-2">علی اراکی</h4>
              <p className="text-white">لورم و متن ساختگی بدون معنی</p>
            </div>
          </SwiperSlide>
        </Swiper>
        );
      </div>
      <div className="container-fluid footer-end">
        <div className="row text-center pt-5">
          <div className="col-md-4 mb-4 mb-md-0">
            <p className="text-warning">سالن ورزشگاه</p>
            <p className="text-white fw-bold fs-5">رویال فیتنس</p>
            <div className="d-flex gap-2 justify-content-center ">
              <div className="div-icons-footer">
                <InstagramIcon className="icons-footer-end " />
              </div>
              <div className="div-icons-footer">
                <TelegramIcon className="icons-footer-end " />
              </div>
              <div className="div-icons-footer">
                <FacebookIcon className="icons-footer-end " />
              </div>
              <div className="div-icons-footer">
                <TwitterIcon className="icons-footer-end " />
              </div>
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
    </div>
  );
}
