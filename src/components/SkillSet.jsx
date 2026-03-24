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
import FastIcon from "../Image/svg/FastAPI.svg";
import PostgresIcon from "../Image/svg/PostgresSQL.svg";
import GitIcon from "../Image/svg/GitHub.svg";
import AWSIcon from "../Image/svg/AWS.svg";
import DockerIcon from "../Image/svg/Docker.svg";
import PandasIcon from "../Image/svg/Pandas.svg";
import VercelIcon from "../Image/svg/Vercel.svg";
import PostmanIcon from "../Image/svg/Postman.svg";
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
  { id: 11, name: "FastAPI", icon: FastIcon },
  { id: 12, name: "PostgreSQL", icon: PostgresIcon },
  { id: 13, name: "GitHub", icon: GitIcon },
  { id: 14, name: "AWS", icon: AWSIcon },
  { id: 15, name: "Docker", icon: DockerIcon },
  { id: 16, name: "Pandas", icon: PandasIcon },
  { id: 17, name: "Vercel", icon: VercelIcon },
  { id: 18, name: "Postman", icon: PostmanIcon },
];

export default function SkillSet() {
  return (
    <Element name="skill">
      <div className="py-20  bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header Section */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center mb-4">
              <div className="w-2 h-2 bg-accent-400 rounded-full mr-2"></div>
              <span className="text-accent-600 font-semibold uppercase tracking-wider text-sm">
                Technologies
              </span>
              <div className="w-2 h-2 bg-accent-400 rounded-full ml-2"></div>
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold text-neutral-900 mb-4">
              Tech Stack
            </h2>
            <div className="w-20 h-1 bg-accent-500 mx-auto mb-6"></div>
            <p className="text-xl text-neutral-600 w-full mx-auto">
              Technologies and tools I work with
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {ImageFile.map((item, index) => {
              return (
                <div
                  key={index}
                  className="bg-white p-6 rounded-2xl shadow-card hover:shadow-card-hover 
                            border border-neutral-100 hover:border-accent-200
                            flex flex-col justify-center items-center text-center
                            transition-all duration-300 cursor-pointer
                            transform hover:scale-105 group">
                  <img
                    src={item.icon}
                    alt={item.name}
                    title={item.name}
                    className="object-contain h-16 w-16 mb-3 group-hover:scale-110 transition-transform duration-300"
                  />
                  <span className="text-sm font-semibold text-neutral-700 group-hover:text-accent-600 transition-colors duration-300">
                    {item.name}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </Element>
  );
}
