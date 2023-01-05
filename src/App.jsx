// import { useRef, useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import japanLights from "/img/japan-lights.jpg";
import streetJapan from "/img/street.jpg";
import lamps from "/img/lamps.jpg";

import Container from "./components/Container";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

export default function App() {
  const { ref: myRef, inView: myElementIsVisible } = useInView();
  const { ref: magicSectionRef, inView: magicSectionIsVisible } = useInView();
  return (
    <>
      <Navbar />
      <Hero />
      <section>
        <Container>
          <h1 className={""}>Space Jelly</h1>

          <p className={""}>
            Cosmic web dev tutorials that will shock you with joy!
          </p>
        </Container>
      </section>

      <section>
        <Container>
          <h2 className={""}>Latest Posts</h2>

          <ul className={""}>
            <li>
              <a href="https://spacejelly.dev/posts/how-to-automatically-tag-categorize-images-using-ai-with-google-vision-cloudinary/">
                How to Automatically Tag & Categorize Images Using AI with
                Google Vision & Cloudinary
              </a>
            </li>
            <li>
              <a href="https://spacejelly.dev/posts/how-to-authenticate-spotify-web-api-requests-in-next-js-with-netlify-api-auth/">
                How to Authenticate Spotify Web API Requests in Next.js with
                Netlify API Auth
              </a>
            </li>
            <li>
              <a href="https://spacejelly.dev/posts/how-to-generate-personalized-social-media-cards-for-landing-pages-with-next-js-cloudinary/">
                How to Generate Personalized Social Media Cards for Landing
                Pages with Next.js & Cloudinary
              </a>
            </li>
          </ul>
        </Container>
      </section>

      <section backgroundColor="primary">
        <Container>
          <h2 className={""}>Courses</h2>

          <ul className={""}>
            <li>
              <a href="https://egghead.io/courses/create-an-ecommerce-store-with-next-js-and-stripe-checkout-562c?af=atzgap">
                Create an eCommerce Store with Next.js and Stripe Checkout
              </a>
            </li>
            <li>
              <a href="https://spacejelly.dev/levelupecommerce">
                Ecommerce on the Jamstack
              </a>
            </li>
            <li>
              <a href="https://fromdesignto.dev/">From Design to Development</a>
            </li>
          </ul>
        </Container>
      </section>

      <section backgroundColor="secondary">
        <Container>
          <h2 className={""}>Filler content</h2>

          <p>There can be something cool here too.</p>
        </Container>
      </section>

      <section>
        <Container>
          <h2 className={""}>Filler content</h2>

          <p>There can be something cool here too.</p>
        </Container>
      </section>

      <section backgroundColor="primary">
        <Container>
          <h2 ref={magicSectionRef} className={""}>
            Magic 🪄
          </h2>

          <p>
            <span className={`${""} ${magicSectionIsVisible ? "" : ""}`}>
              🚀
            </span>
          </p>
        </Container>
      </section>

      <section backgroundColor="secondary">
        <Container>
          <h2 ref={myRef} className={""}>
            Have you scrolled down here yet? 🧐
          </h2>

          <p>{myElementIsVisible ? "Yes! 🥳" : "No 🙈"}</p>
        </Container>
      </section>

      <section>
        <Container>
          <h2 className={""}>Call to Action</h2>

          <p>Sign up now!</p>
        </Container>
      </section>
    </>
  );
}

//
