import React, { useEffect, useState } from "react";
import home1 from "../assets/hero/1.png";
import home2 from "../assets/hero/2.png";
import home3 from "../assets/hero/3.png";
import home4 from "../assets/hero/4.png";
import home5 from "../assets/hero/6.png";
import home6 from "../assets/hero/7.jpeg";
import home7 from "../assets/hero/8.jpg";
import home8 from "../assets/hero/9.png";
import home9 from "../assets/hero/11.jpeg";
import home10 from "../assets/hero/12.jpg";
import home11 from "../assets/hero/13.png";
import home12 from "../assets/hero/14.jpeg";
import home13 from "../assets/hero/15.jpeg";
import home14 from "../assets/hero/16.jpeg";
import home15 from "../assets/hero/17.jpeg";
import home16 from "../assets/hero/18.jpeg";
import home17 from "../assets/hero/19.jpeg";
import home18 from "../assets/hero/20.jpeg";
import certificate from "../assets/certification/Jollof by Jara.png";
import certificate2 from "../assets/certification/Travellers' Choice 2021.png";
import certificate3 from "../assets/certification/Travellers' Choice 2021.png";
import certificate4 from "../assets/certification/TripAdvisor TC 22.png";
import WhoWe from "./home-sub-component/WhoWe";
import Rooms from "./home-sub-component/Rooms";
import Experience from "./home-sub-component/Experience";
import GroupBooking from "./home-sub-component/GroupBooking";
import CapturedMoment from "./home-sub-component/CapturedMoment";
import GuestSays from "./home-sub-component/GuestSays";
import GetTouch from "./home-sub-component/GetTouch";
import MapView from "./home-sub-component/MapView";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import { Autoplay, Pagination, Navigation } from "swiper";
import axios from "axios";

export default function Home() {
  return (
    <>
      <div className="main_container">
        <div
          data-aos="zoom-out"
          data-aos-delay="50"
          data-aos-duration="1000"
          className="main_container_top"
        >
          <Swiper
            slidesPerView={1}
            spaceBetween={30}
            slidesPerGroup={1}
            loop={true}
            autoplay={{ delay: 5000 }}
            pagination={{
              clickable: false,
            }}
            navigation={false}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper"
          >
            <SwiperSlide>
              <img
                className="main_container_top_image"
                src={home1}
                alt="image"
              />
              <img
                className="main_container_top_image"
                src={home2}
                alt="image"
              />
              <img
                className="main_container_top_image"
                src={home3}
                alt="image"
              />
              <img
                className="main_container_top_image"
                src={home4}
                alt="image"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="main_container_top_image"
                src={home5}
                alt="image"
              />
              <img
                className="main_container_top_image"
                src={home6}
                alt="image"
              />
              <img
                className="main_container_top_image"
                src={home7}
                alt="image"
              />
              <img
                className="main_container_top_image"
                src={home8}
                alt="image"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="main_container_top_image"
                src={home9}
                alt="image"
              />
              <img
                className="main_container_top_image"
                src={home10}
                alt="image"
              />
              <img
                className="main_container_top_image"
                src={home11}
                alt="image"
              />
              <img
                className="main_container_top_image"
                src={home12}
                alt="image"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="main_container_top_image"
                src={home13}
                alt="image"
              />
              <img
                className="main_container_top_image"
                src={home14}
                alt="image"
              />
              <img
                className="main_container_top_image"
                src={home15}
                alt="image"
              />
              <img
                className="main_container_top_image"
                src={home16}
                alt="image"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="main_container_top_image"
                src={home17}
                alt="image"
              />
              <img
                className="main_container_top_image"
                src={home18}
                alt="image"
              />
              <img
                className="main_container_top_image"
                src={home1}
                alt="image"
              />
              <img
                className="main_container_top_image"
                src={home2}
                alt="image"
              />
            </SwiperSlide>
          </Swiper>
        </div>
        <div
          data-aos="fade-up"
          data-aos-delay="100"
          data-aos-duration="1000"
          className="main_container_bottom"
        >
          <div className="hero_heading">
            Nigeria’s Premier All-Inclusive <br /> Overnight Beach Experience
          </div>
          <div className="para">
            The ultimate escape just a moment away from home.
          </div>
          <div style={{ display: "flex", marginTop: "2em", flexWrap: "wrap" }}>
            <button style={{ marginRight: "1em" }} className="black_button">
              Day Pass Booking
            </button>
            <button className="white_button">Overnight Booking</button>
          </div>
        </div>
      </div>

      <WhoWe />
      <Rooms />
      <Experience />
      <GroupBooking />
      <CapturedMoment />
      <GuestSays />
      <div style={{ textAlign: "center" }} className="hero_heading">
        Awards and <br /> Accreditation
      </div>
      <div style={{ minHeight: 0 }} className="main_container">
        <div
          data-aos="zoom-out"
          data-aos-delay="50"
          data-aos-duration="1000"
          className="main_container_top main_container_top_cerfitication"
        >
          <img src={certificate} alt="image" />
          <img src={certificate2} alt="image" />
          <img src={certificate3} alt="image" />
          <img src={certificate4} alt="image" />
        </div>
      </div>
      <GetTouch />
      <MapView />
    </>
  );
}
