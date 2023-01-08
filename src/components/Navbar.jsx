import "../styles/navbar.scss";
import koi from "/love.svg";
import laptopCode from "/laptop-code.svg";
import emailSvg from "/email.svg";
import HoverIconLi from "./HoverIconLi";

export default function Navbar() {
  return (
    <nav className="nav">
      <ul className="nav-ul">
        <HoverIconLi
          link={"#"}
          baseImg={koi}
          name={"go back to the beginning!"}
        />

        <HoverIconLi
          link={
            "mailto:adan.more70@gmail.com?subject=I%20found%20your%20portfolio%20to%20be%20pretty%20interesting%2C%20would%20you%20like%20to%20schedule%20a%20call%3F"
          }
          baseImg={emailSvg}
          name={"send me an email!"}
        />

        <HoverIconLi
          link={"#projects"}
          baseImg={laptopCode}
          name={"goto see my projects!"}
        />
      </ul>
    </nav>
  );
}
