import React, { useState } from "react";
import GetTouch from "./home-sub-component/GetTouch";
import MapView from "./home-sub-component/MapView";
import Staff from "../assets/Staff.png";
import Img from "../assets/Frame 98.png";
import GroupBooking from "./home-sub-component/GroupBooking";

export default function ResponsibleHospitality() {
  const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 3, 4, 5, 67, 8, 5, 4, 5, 3];
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
          Special Request
        </div>
      </div>
      <div className="resort_history_row">
        <div className="resort_history_row_img">
          <img src={Img} alt="Img" />
        </div>
        <div className="resort_history_row_content">
          <div className="para">
            Jara Beach Resort is committed to being a responsible hospitality
            establishment. We operate fully 'off' the national grid and are
            working our way towards full sustainability. From solar technology
            to limited generator running time, Jara continues to balance
            environmentally-friendly best practice with providing the very best
            beach experience in Nigeria. We welcome all guests to help be a part
            of the solution! <br />
            <div style={{ marginBottom: "1em" }} />
            We use a mix of generators and solar power. Our schedule ensures a
            warm shower and cool room as you prepare for dinner, ahead of a
            comfortable night’s sleep. All lights, appliances and plugs for
            small devices will run around the clock - you won't miss out on
            anything! All rooms have rechargeable fans. Air-Conditioners and
            Water Heaters will operate between the following times: 5pm–7pm and
            9pm–10am.
            <br />
            <div style={{ marginBottom: "1em" }} />
          </div>
        </div>
      </div>
      <GroupBooking />

      <GetTouch />
      <MapView />
    </>
  );
}
