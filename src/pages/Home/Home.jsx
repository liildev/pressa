import React from "react";
import Announces from "../../components/Announces/Announces";
import Hero from "../../components/Hero/Hero";
import Banners from "../../components/Banners/Banners";

function Home() {
  return (
    <>
      <Hero />
      <Announces />
      <Banners />
    </>
  );
}

export default Home;
