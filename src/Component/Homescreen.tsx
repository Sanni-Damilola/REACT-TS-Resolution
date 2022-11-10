import React from "react";
import Agency from "./Agency";
import Features from "./Features";
import Hero from "./Hero";
import Ourapporach from "./Ourapporach";
import SpecializationComp from "./Specialization";
import img from "./Asset/circle7.jpg";
import img2 from "./Asset/circle1.jpg";
import img3 from "./Asset/circle2.jpg";

const Homescreen = () => {
  return (
    <div>
      <Hero />
      <Agency />
      <SpecializationComp />
      <Features />
      <Ourapporach row="value" image={img} />
      <Ourapporach row="" image={img2} />
      <Ourapporach row="value" image={img3} />
    </div>
  );
};

export default Homescreen;
