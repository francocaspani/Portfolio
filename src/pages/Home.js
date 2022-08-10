import React from "react";
import Hero from "../components/Hero/Hero";
import Projects from "../components/Projects/Projects";
import About from "../components/About/About";
import Contact from "../components/Contact/Contact";
import FixSocialIcon from "../components/SocialIcon/FixSocialIcon";
function Home() {
  return (
    <>
      <Hero />
      <Projects />
      <About />
      <Contact />
      <FixSocialIcon />
    </>
  );
}

export default Home;
