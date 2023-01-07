import "../styles/hero.scss";

export default function Hero() {
  return (
    <div className="hero" id="hero">
      <p className="intro">Hi, My Name Is:</p>
      <p className="name">Adan Moreno</p>
      <div className="wrap-container">
        <div className="wrap-gradient">
          <p className="charge">Full Stack</p>
          <p className="charge">Web Dev</p>
        </div>
      </div>

      <p className="likes">I like to build cool apps that have a purpose</p>

      <div className="buttons">
        <a className="gradient-btn" href="#">
          LinkedIn
        </a>
        <a className="gradient-btn" href="#">
          Twitter
        </a>
      </div>
    </div>
  );
}
