// import { useRef, useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import japanLights from "/img/japan-lights.jpg";
import streetJapan from "/img/street.jpg";
import lamps from "/img/lamps.jpg";

import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ProjectsContainer from "./components/ProjectsContainer";

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <ProjectsContainer />
    </>
  );
}
