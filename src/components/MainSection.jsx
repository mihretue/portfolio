import React from "react";
import BackgroundImage from "../Image/pppp.png";
import { Element } from "react-scroll";

export default function MainSection() {
  return (
    <Element name="home" className="section">
      <div className="relative min-h-screen overflow-hidden">
        {/* Hero Image as <img> */}
        <img
          src={BackgroundImage}
          alt="Hero background"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Light overlay to ensure text contrast (optional) */}
        <div className="absolute inset-0 bg-black/30"></div>

        {/* Hero Content */}
        <div className="relative z-10 flex flex-col items-center justify-center min-h-screen pt-20 text-center text-white">
          <div className="w-full px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 drop-shadow-lg mt-16">
              Engineering Robust Web Solutions
            </h1>
            <p className="text-lg md:text-xl max-w-2xl mx-auto drop-shadow-md text-neutral-50 leading-relaxed">
              Transforming complex requirements into elegant, high-performance applications. Specializing in the MERN stack, Django, and scalable digital architectures.
            </p>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
            <div className="animate-bounce">
              <svg
                className="w-6 h-6 text-white drop-shadow-lg"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
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
    </Element>
  );
}