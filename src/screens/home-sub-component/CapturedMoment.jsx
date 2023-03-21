import React from "react";
import logo from "../../assets/logo.png";
import hero1 from "../../assets/hero/2.png";

export default function CapturedMoment() {
  const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 3];
  return (
    <>
      <div
        data-aos="fade-up"
        data-aos-delay="50"
        data-aos-duration="1000"
        className="room_container"
      >
        <div
          style={{ color: "#7878", letterSpacing: "6px", marginBottom: 8 }}
          className="para"
        >
          GALLERY
        </div>
        <div style={{ textAlign: "center" }} className="hero_heading">
          Captured Moments <br />
          At Jara
        </div>
        <div className="moments_jara_top">
          <div className="moments_jara_top_left">
            <div className="avatar">
              <img src={logo} alt="logo" />
            </div>
            <span>
              <div
                style={{ textAlign: "left", color: "#000", fontWeight: "500" }}
                className="para"
              >
                jarabeachresortng
              </div>
              <div
                style={{ textAlign: "left", marginBottom: 40 }}
                className="para"
              >
                58k Followers
              </div>{" "}
              <div
                style={{
                  textAlign: "left",
                  color: "#000",
                  fontWeight: "500",
                  textTransform: "uppercase",
                }}
                className="para"
              >
                jara beach resort
              </div>
              <div style={{ textAlign: "left" }} className="para">
                Nigeria's award-winning, all-inclusive family-run, 12 room
                oceanfront resort <br /> (by road) in Lagos 🇳🇬 Pricing,
                availability and bookings
              </div>
              <a
                style={{ textAlign: "left", color: "#2A66AE", marginTop: 10 }}
                className="para"
              >
                https://linktr.ee/jarabeachresortng
              </a>
            </span>
          </div>
          <button className="black_button">Follow</button>
        </div>
        <div className="moments_jara_pic_show">
          {data.map((index) => {
            return (
              <div key={index} className="moments_jara_pic_show_entry_new">
                <img src={hero1} alt="hero1" />
              </div>
            );
          })}
        </div>
        <button className="black_button">Load More</button>
      </div>
    </>
  );
}
