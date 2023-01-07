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
  const { ref, inView } = useInView();

  return (
    <>
      {/* <Navbar /> */}
      <Hero />
      <ProjectsContainer />

      <section>
        <h2 ref={ref} className={""}>
          Have you scrolled down here yet? 🧐
        </h2>

        <p>{inView ? "Yes! 🥳" : "No 🙈"}</p>
      </section>
    </>
  );
}

//
