import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.scss";
import Home from "./screens/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import AOS from "aos";
import "aos/dist/aos.css";
import RoomsView from "./screens/RoomsView";
import Gallery from "./screens/Gallery";
import Media from "./screens/Media";
import EventsBooking from "./screens/EventsBooking";
import About from "./screens/About";
import Contact from "./screens/Contact";
import ExperiencesView from "./screens/ExperiencesView";
import Activities from "./screens/Activities";
import AllInclusive from "./screens/AllInclusive";
import ChildrenView from "./screens/ChildrenView";
import BoatTransport from "./screens/BoatTransport";
import ResponsibleHospitality from "./screens/ResponsibleHospitality";

export default function App() {
  AOS.init();
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/rooms" element={<RoomsView />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/media" element={<Media />} />
        <Route path="/events" element={<EventsBooking />} />
        <Route path="/about" element={<About />} />
        <Route
          path="/responsible-hospitality"
          element={<ResponsibleHospitality />}
        />
        <Route path="/experiences" element={<ExperiencesView />} />
        <Route path="/activities" element={<Activities />} />
        <Route path="/all-inclusive" element={<AllInclusive />} />
        <Route path="/children" element={<ChildrenView />} />
        <Route path="/boat-transport" element={<BoatTransport />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  );
}
