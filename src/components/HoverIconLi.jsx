import { useState } from "react";

export default function HoverIconLi({ link, baseImg, hoverImg, name }) {
  const [imgSrc, setImgSrc] = useState(baseImg);

  const handleMouseEnter = () => {
    setImgSrc(hoverImg);
  };

  const handleMouseLeave = () => {
    setImgSrc(baseImg);
  };

  if (!hoverImg) {
    return (
      <li className="icon">
        <a href={link} className="icon-link">
          <img src={imgSrc} alt={name} className="icon-img" />
        </a>
      </li>
    );
  }

  return (
    <li
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="icon"
    >
      <a href={link} className="icon-link">
        <img src={imgSrc} alt={name} className="icon-img" />
      </a>
    </li>
  );
}
