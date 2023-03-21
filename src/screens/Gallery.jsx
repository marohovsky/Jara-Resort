import React, { useState } from "react";
import GetTouch from "./home-sub-component/GetTouch";
import MapView from "./home-sub-component/MapView";
import RoomPic from "../assets/rooms/Villa.png";

const HotelIframe = ({ style }) => {
  return (
    <iframe
      width="560"
      height="315"
      style={{ height: "100%", width: "100%" }}
      src="https://www.youtube.com/embed/PIEtOBJd5R8"
      title="YouTube video player"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowFullScreen
    ></iframe>
  );
};
export default function Gallery() {
  return (
    <>
      <div className="components_section">
        <div
          data-aos="zoom-out"
          data-aos-delay="50"
          data-aos-duration="1000"
          style={{ color: "#fff", fontSize: 40 }}
          className="hero_heading"
        >
          Photos & Videos
        </div>
      </div>
      <div className="components_section_content">
        <div
          style={{
            color: "#787878",
            width: "100%",
            maxWidth: "800px",
            margin: "0px auto",
            padding: "2em 0em",
          }}
          className="para"
        >
          JARA BEACH RESORT is located on the beautiful Museyo coast line,
          sitting on 5,000 sqm of serenity.
        </div>
      </div>
      <div className="gallery_container">
        <div className="gallery_row">
          <img src={RoomPic} alt="galleryPic" className="gallery_row_pic" />
          <img src={RoomPic} alt="galleryPic" className="gallery_row_pic" />
          <img src={RoomPic} alt="galleryPic" className="gallery_row_pic" />
          <img src={RoomPic} alt="galleryPic" className="gallery_row_pic" />
          <img src={RoomPic} alt="galleryPic" className="gallery_row_pic" />
        </div>
      </div>

      <div className="hotel_view_video_container">
        <div className="hotel_view_video_container_entry">
          <HotelIframe />
        </div>
        <div className="hotel_view_video_container_entry">
          <HotelIframe />
        </div>
        <div className="hotel_view_video_container_entry">
          <HotelIframe />
        </div>
        <div className="hotel_view_video_container_entry">
          <HotelIframe />
        </div>
      </div>

      <GetTouch />
      <MapView />
    </>
  );
}
