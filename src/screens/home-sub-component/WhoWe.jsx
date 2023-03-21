import React, { useState } from "react";

const HotelIframe = () => {
  return (
    <iframe
      width="560"
      height="315"
      src="https://www.youtube.com/embed/PIEtOBJd5R8"
      title="YouTube video player"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowFullScreen
    ></iframe>
  );
};

export default function WhoWe() {
  return (
    <>
      <div className="who_we_container">
        <div
          data-aos="fade-up"
          data-aos-delay="50"
          data-aos-duration="1000"
          className="who_we_container_content"
        >
          <div className="who_we_container_left">
            <div
              style={{ color: "#7878", letterSpacing: "6px", marginBottom: 8 }}
              className="para"
            >
              ABOUT US
            </div>
            <div style={{ color: "#fff" }} className="hero_heading">
              Who We Are
            </div>
            <div style={{ textAlign: "start" }} className="para">
              Nestled in Museyo next to Eleko, just one hour by road from Lekki
              Phase One, Jara Beach Resort is the first of its kind,
              award-winning, all-inclusive, family-run, oceanfront getaway in
              Lagos.
            </div>
            <button style={{ marginTop: 20 }} className="white_button">
              Learn More
            </button>
          </div>
          <div className="who_we_container_right">
            <div className="who_we_container_right_entry">
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/iGgBsoLe2Wk"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
            <div className="who_we_container_right_entry">
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/5_vYZhw_2o0"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
            <div className="who_we_container_right_entry">
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/KIBD1Ir3DOo"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
            <div className="who_we_container_right_entry">
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/jevfn7qgfos"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
