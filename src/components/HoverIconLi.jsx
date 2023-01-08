import { useState } from "react";

export default function HoverIconLi({ link, baseImg, name, goto }) {
  return (
    <>
      {goto ? (
        <li className="icon" onClick={goto}>
          <span className="icon-link">
            <img src={baseImg} alt={name} className="icon-img" />
          </span>
        </li>
      ) : (
        <li className="icon">
          <a href={link} className="icon-link">
            <img src={baseImg} alt={name} className="icon-img" />
          </a>
        </li>
      )}
    </>
  );
}
