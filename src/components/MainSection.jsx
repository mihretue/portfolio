import React from "react";
import BackgroundImage from "../Image/pppp.jpg";
import { Element } from "react-scroll";

export default function MainSection() {
  return (
    <Element name="home" className="section">
      <div className="relative min-h-screen overflow-hidden">
        {/* Background with overlay */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${BackgroundImage})` }}>
          <div className="absolute inset-0 bg-black/50 backdrop-blur-[0.5px]"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 flex items-center justify-center min-h-screen pt-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            {/* Welcome Text */}
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight drop-shadow-lg">
                Hi, I'm <span className="text-blue-400">Mihretu Endeshaw</span>
              </h1>
              <h2 className="text-xl sm:text-2xl lg:text-3xl text-gray-100 mb-8 font-light drop-shadow-md">
                Full Stack Developer &amp; Software Engineer
              </h2>
              <p className="text-lg sm:text-xl text-gray-200 mb-12 max-w-2xl mx-auto leading-relaxed drop-shadow-md">
                I create beautiful, functional websites and applications that
                deliver exceptional user experiences and drive business growth.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a
                  href="#project"
                  className="px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg">
                  View My Work
                </a>
                <a
                  href="/MIHRETUL-Resume.pdf"
                  download="MIHRETUL-Resume.pdf"
                  className="px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-gray-800 transition-all duration-300 transform hover:scale-105 shadow-lg">
                  Download CV
                </a>
              </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
              <div className="animate-bounce">
                <svg
                  className="w-6 h-6 text-white drop-shadow-lg"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 14l-7 7m0 0l-7-7m7 7V3"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Element>
  );
}
