import React, { useState } from "react";
import GetTouch from "./home-sub-component/GetTouch";
import MapView from "./home-sub-component/MapView";
import activities from "../assets/experiences/Activities.png";
import inclusive from "../assets/experiences/All inclusive.png";
import children from "../assets/experiences/Children.png";
import boat from "../assets/experiences/Boat Transport.png";
import request from "../assets/experiences/Special Request.png";
import premium from "../assets/experiences/Premium Collection.png";
import menu from "../assets/experiences/Menus.png";
import club from "../assets/experiences/Club jara.png";
import { Link } from "react-router-dom";

export default function ExperiencesView() {
  return (
    <>
      <div className="components_section">
        <div
          data-aos="zoom-out"
          data-aos-delay="50"
          data-aos-duration="1000"
          style={{ color: "#fff", fontSize: 40, textAlign: "center" }}
          className="hero_heading"
        >
          Experiences
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
          Today's moments are tomorrow's memories. Want to make your stay at
          Jara even more memorable? You've come to the right page. Our massage
          services and unique beachside dining experiences are shared here.
        </div>
      </div>

      <div className="experience_content_container">
        <Link to="/activities" className="experience_content_card">
          <img src={activities} alt="activities" />
        </Link>{" "}
        <Link to="/all-inclusive" className="experience_content_card">
          <img src={inclusive} alt="activities" />
        </Link>{" "}
        <Link to="/children" className="experience_content_card">
          <img src={children} alt="activities" />
        </Link>{" "}
        <Link to="/boat-transport" className="experience_content_card">
          <img src={boat} alt="activities" />
        </Link>{" "}
        <Link to="/responsible-hospitality" className="experience_content_card">
          <img src={request} alt="activities" />
        </Link>{" "}
        <div className="experience_content_card">
          <img src={premium} alt="activities" />
        </div>
        <div className="experience_content_card">
          <img src={menu} alt="activities" />
        </div>
        <div className="experience_content_card">
          <img src={club} alt="activities" />
        </div>
      </div>

      <GetTouch />
      <MapView />
    </>
  );
}
