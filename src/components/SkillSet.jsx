import React from "react";
import BootstrapIcon from "../Image/svg/bootstrap-fill-svgrepo-com.svg";
import JavascriptIcon from "../Image/svg/javascript-svgrepo-com.svg";
import TailwindIcon from "../Image/svg/tailwindcss-icon-svgrepo-com.svg";
import NodeIcon from "../Image/svg/node-js-svgrepo-com.svg";
import ReactIcon from "../Image/svg/reactjs-svgrepo-com.svg";
import PythonIcon from "../Image/svg/python-svgrepo-com.svg";
import HtmlIcon from "../Image/svg/html5-svgrepo-com.svg";
import CssIcon from "../Image/svg/css-svgrepo-com.svg";
import DjagnoIcon from "../Image/svg/django-svgrepo-com.svg";
import MongoIcon from "../Image/svg/mongo-svgrepo-com.svg";
import { Element } from "react-scroll";

const ImageFile = [
  { id: 1, name: "Bootstrap", icon: BootstrapIcon },
  { id: 2, name: "JavaScript", icon: JavascriptIcon },
  { id: 3, name: "Tailwind CSS", icon: TailwindIcon },
  { id: 4, name: "Node.js", icon: NodeIcon },
  { id: 5, name: "React JS", icon: ReactIcon },
  { id: 6, name: "Python", icon: PythonIcon },
  { id: 7, name: "HTML5", icon: HtmlIcon },
  { id: 8, name: "CSS3", icon: CssIcon },
  { id: 9, name: "Django", icon: DjagnoIcon },
  { id: 10, name: "MongoDB", icon: MongoIcon },
];

export default function SkillSet() {
  return (
    <Element name="skill">
      <div className="mt-32 max-w-8xl mx-auto flex flex-col items-center">
        <div className="mb-16 max-w-2xl text-center mx-auto">
          <h2 className="md:text-4xl text-3xl font-semibold text-lime-500 font-serif md:!leading-[50px] mb-6">
            Tech Stack
          </h2>
        </div>
        <div className="grid lg:grid-cols-12 md:grid-cols-6 gap-9 mt-16 mx-6 items-center">
          {ImageFile.map((item, index) => {
            return (
              <div
                key={index}
                className="bg-white px-1 py-3 rounded-2xl shadow 
                            flex justify-center items-center text-center
                            hover:scale-110 hover:shadow-xl transition-all duration-300 cursor-pointer">
                <img
                  src={item.icon}
                  alt={item.name}
                  title={item.name}
                  className="object-contain h-full w-full"
                />
              </div>
            );
          })}
        </div>
      </div>
    </Element>
  );
}
