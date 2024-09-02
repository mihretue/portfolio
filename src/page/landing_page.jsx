import React from "react";
import MainSection from "../components/MainSection";
import About from "../components/About";
import Expertise from "../components/Expertise";
import SkillSet from "../components/SkillSet";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Testimony from "../components/Testimony";
import NavBar from "../components/navigation";
const LandinPage = ()=>{

  return (

  <div class=" text-gray-100 text-[15px]">
    <NavBar/>
    <MainSection/>
    <About/>
    <div class="px-4 sm:px-10">
      <Expertise/>
      <SkillSet/>
      <Projects/>
      <Testimony/>
      <Contact/>
    </div>
      
  </div>
)
    }

  export default LandinPage; 