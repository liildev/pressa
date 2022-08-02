import React from "react";
import "./_styles.scss";
import Filter from "../Filter/Filter";

export default function Hero() {
  return (
    <section className="hero">
      <div className="container hero__container">
        <h1 className="hero__title">
          Eng so’ngi master klasslar va tadbirlar bizning saytda
        </h1>
        <Filter />
      </div>
    </section>
  );
}
