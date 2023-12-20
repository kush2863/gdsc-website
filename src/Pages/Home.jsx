import React from "react";
import Hero from "../Components/Home/Hero";
import WhyToJoin from "../Components/Home/WhyToJoin";
import HowToJoin from "../Components/Home/HowToJoin";
import Gallery from "../Components/Home/Gallery";
import Question from "../Components/Home/Question";
import Events from "../Components/Home/Events";

const Home = () => {
  return (
    <div>
      <Hero />
      <WhyToJoin />
      <HowToJoin />
      <Gallery />
      <Question />
      <Events />
    </div>
  );
};

export default Home;
