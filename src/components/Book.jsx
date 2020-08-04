import React, { useEffect, useState } from "react";
import gsap from "gsap";

export default function Book({ title, url, message, author }) {
  useEffect(() => {
    gsap.fromTo(
      "figure",
      { y: "random(400, -400)", opacity: 0 },
      { y: 0, opacity: 1, duration: 1.5 }
    );
  }, []);
  function mouseOver(e) {
    if (!e.target.matches("figure > img")) return;
    gsap.timeline().to(e.target, 0.9, { scale: 1.2 });
  }
  function mouseLeave(e) {
    if (!e.target.matches("figure > img")) return;
    gsap.timeline().to(e.target, 0.9, { scale: 1 });
  }
  return (
    <figure onMouseOver={mouseOver} onMouseOut={mouseLeave}>
      <h2> {title}</h2>
      <img src={url} alt={message} />
      <figcaption>
        <h3>{title}</h3>
        <span className="author">{author} 저</span>
        <p>{message}</p>
      </figcaption>
    </figure>
  );
}
