import "../styles/navbar.scss";
import koi from "/white-koi-kanji.svg";
import laptopCode from "/white-laptop-code.svg";
import emailSvg from "/white-email.svg";
import HoverIconLi from "./HoverIconLi";

export default function Navbar({ gotoHero, gotoProjects }) {
  return (
    <nav className="nav">
      <ul className="nav-ul">
        <HoverIconLi
          goto={gotoHero}
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
          goto={gotoProjects}
          baseImg={laptopCode}
          name={"goto see my projects!"}
        />
      </ul>
    </nav>
  );
}
