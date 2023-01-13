// import { useRef, useEffect, useState } from "react";
import japanLights from "/img/japan-lights.jpg";
import streetJapan from "/img/street.jpg";
import lamps from "/img/lamps.jpg";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ProjectsContainer from "./components/ProjectsContainer";
import AboutMe from "./components/AboutMe";
import { ParallaxLayer, Parallax } from "@react-spring/parallax";
import { useRef } from "react";

export default function App() {
  const parallaxRef = useRef();

  const gotoHero = () => {
    parallaxRef.current.scrollTo(0);
  };

  const gotoProjects = () => {
    parallaxRef.current.scrollTo(1.4);
  };

  return (
    <>
      <Navbar {...{ gotoHero }} {...{ gotoProjects }} />

      <Parallax pages={3.5} ref={parallaxRef}>
        <ParallaxLayer
          speed={1.2}
          style={{
            height: "fit-content",
          }}
        >
          <Hero />
        </ParallaxLayer>

        <ParallaxLayer
          offset={1}
          speed={1.5}
          style={{
            height: "fit-content",
          }}
        >
          <AboutMe />
        </ParallaxLayer>

        <ParallaxLayer offset={2} speed={1}>
          <ProjectsContainer />
        </ParallaxLayer>
      </Parallax>
    </>
  );
}
