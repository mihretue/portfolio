import React from "react";
import MainSection from "../components/MainSection";
import About from "../components/About";
import Expertise from "../components/Expertise";
import SkillSet from "../components/SkillSet";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
// import Testimony from "../components/Testimony";
import NavBar from "../components/navigation";

const LandinPage = () => {
  return (
    <div className="text-neutral- text-[15px]">
      <NavBar />
      <MainSection />
      <About />
      <Expertise />
      <SkillSet />
      <Projects />
      <Contact />
    </div>
  );
};

export default LandinPage;
