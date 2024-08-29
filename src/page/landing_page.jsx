import React from "react";
import MainSection from "../components/MainSection";
import About from "../components/About";
import Expertise from "../components/Expertise";
import SkillSet from "../components/SkillSet";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import NavBar from "../components/NavBar";
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
      <div class="mt-32 max-w-7xl mx-auto">
        <div class="mb-16 max-w-2xl text-center mx-auto">
          <h2 class="md:text-4xl text-3xl font-semibold md:!leading-[50px] mb-6">What our happy client say</h2>
          <p class="text-gray-400">Laboris qui Lorem ad tempor ut reprehenderit. Nostrud anim nulla officia ea sit
            deserunt. Eu eu quis anim aute Laboris qui Lorem ad tempor ut reprehenderit.</p>
        </div>
        <div class="grid md:grid-cols-3 gap-12 max-md:justify-center text-center mt-16">
          <div>
            <div class="flex flex-col items-center">
              <img src="https://readymadeui.com/profile_2.webp"
                class="w-24 h-24 rounded-full shadow-xl border-2 border-white" />
              <div class="mt-4">
                <h4 class="text-base">John Doe</h4>
                <p class="text-xs text-blue-600 mt-2">CEO, Company</p>
              </div>
            </div>
            <div class="mt-6">
              <p class="text-gray-400">The service was amazing. I never had to wait that long for my food. The staff was
                friendly and attentive, and the delivery was impressively prompt.</p>
            </div>
            <div class="flex justify-center space-x-2 mt-4">
              <svg class="w-4 fill-blue-600" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
              </svg>
              <svg class="w-4 fill-blue-600" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
              </svg>
              <svg class="w-4 fill-blue-600" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
              </svg>
              <svg class="w-4 fill-[#CED5D8]" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
              </svg>
              <svg class="w-4 fill-[#CED5D8]" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
              </svg>
            </div>
          </div>
          <div>
            <div class="flex flex-col items-center">
              <img src="https://readymadeui.com/profile_3.webp"
                class="w-24 h-24 rounded-full shadow-xl border-2 border-white" />
              <div class="mt-4">
                <h4 class="text-base">Mark Adair</h4>
                <p class="text-xs text-blue-600 mt-2">CEO, Company</p>
              </div>
            </div>
            <div class="mt-6">
              <p class="text-gray-400">The service was amazing. I never had to wait that long for my food. The staff was
                friendly and attentive, and the delivery was impressively prompt.</p>
            </div>
            <div class="flex justify-center space-x-2 mt-4">
              <svg class="w-4 fill-blue-600" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
              </svg>
              <svg class="w-4 fill-blue-600" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
              </svg>
              <svg class="w-4 fill-blue-600" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
              </svg>
              <svg class="w-4 fill-blue-600" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
              </svg>
              <svg class="w-4 fill-blue-600" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
              </svg>
            </div>
          </div>
          <div>
            <div class="flex flex-col items-center">
              <img src="https://readymadeui.com/profile_4.webp"
                class="w-24 h-24 rounded-full shadow-xl border-2 border-white" />
              <div class="mt-4">
                <h4 class="text-base">Simon Konecki</h4>
                <p class="text-xs text-blue-600 mt-2">CEO, Company</p>
              </div>
            </div>
            <div class="mt-6">
              <p class="text-gray-400">The service was amazing. I never had to wait that long for my food. The staff was
                friendly and attentive, and the delivery was impressively prompt.</p>
            </div>
            <div class="flex justify-center space-x-2 mt-4">
              <svg class="w-4 fill-blue-600" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
              </svg>
              <svg class="w-4 fill-blue-600" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
              </svg>
              <svg class="w-4 fill-blue-600" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
              </svg>
              <svg class="w-4 fill-blue-600" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
              </svg>
              <svg class="w-4 fill-[#CED5D8]" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <Contact/>
    </div>
      
  </div>
)
    }

  export default LandinPage; 