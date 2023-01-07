import "../styles/navbar.scss";
import myLogo from "/8koi-svg.svg";

export default function Navbar() {
  return (
    <nav className="nav">
      <ul>
        <li>
          <a href="#hero">
            <img src={myLogo} alt="go to home page" />
          </a>
        </li>
        {/* <li>
          <a className="hover-ani" href="#">
            About Me
          </a>
        </li> */}
        <li>
          <a className="hover-ani" href="#projects">
            Projects
          </a>
        </li>
        <li>
          <a className="hover-ani" href="#">
            Contact Me
          </a>
        </li>
      </ul>
    </nav>
  );
}
