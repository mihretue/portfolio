import React from "react";
import { Element } from "react-scroll";

export default function About() {
  const skills = [
    {
      category: "Frontend",
      items: ["React", "JavaScript", "HTML/CSS", "Tailwind CSS"],
    },
    {
      category: "Backend",
      items: ["Node.js", "Express.js", "Django", "Python"],
    },
    { category: "Database", items: ["MongoDB", "PostgreSQL", "MySQL"] },
    {
      category: "Tools & Other",
      items: ["Docker", "AWS", "OCR", "Automation", "Figma"],
    },
  ];

  return (
    <Element name="about" className="section">
      <div className="py-20  bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header Section */}
          <div className="mb-16 text-center">
            <div className="inline-flex items-center justify-center mb-4">
              <div className="w-2 h-2 bg-accent-400 rounded-full mr-2"></div>
              <span className="text-accent-600 font-semibold uppercase tracking-wider text-sm">
                About Me
              </span>
              <div className="w-2 h-2 bg-accent-400 rounded-full ml-2"></div>
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold text-neutral-900 mb-4">
              Mihretu Endeshaw
            </h2>
            <div className="w-20 h-1 bg-accent-500 mx-auto mb-6"></div>
            <p className="text-xl text-neutral-600 w-full mx-auto">
              Full Stack Developer & Software Engineer
            </p>
          </div>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-3 gap-12 items-start">
            {/* Text Content */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl shadow-card hover:shadow-card-hover transition-all duration-300 p-8 sm:p-10 border border-neutral-100">
                <div className="flex items-start mb-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-accent-100 rounded-lg flex items-center justify-center mr-4">
                    <span className="text-2xl">👋</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-neutral-900 mb-2">
                      Hello!
                    </h3>
                    <p className="text-neutral-600">
                      I'm a versatile Software Engineer passionate about
                      building exceptional digital experiences
                    </p>
                  </div>
                </div>

                <div className="space-y-6 text-neutral-700 leading-relaxed text-lg">
                  <p>
                    I specialize in the{" "}
                    <span className="text-accent-600 font-semibold">
                      MERN stack
                    </span>{" "}
                    (MongoDB, Express.js, React, Node.js) and{" "}
                    <span className="text-accent-600 font-semibold">
                      Django
                    </span>
                    , building full-stack applications that are robust, secure,
                    and optimized for real-world use. I turn complex
                    requirements into clean, intuitive user experiences and
                    reliable backend architectures.
                  </p>

                  <p>
                    Alongside JavaScript, I'm deeply experienced in{" "}
                    <span className="text-accent-600 font-semibold">
                      Python
                    </span>
                    , using it not only with Django but also for automation,
                    data analysis, OCR, workflow optimization, and backend
                    development. My ability to combine Python's power with
                    modern frontend engineering allows me to build applications
                    that are both intelligent and user-centric.
                  </p>

                  <p>
                    I have hands-on experience with{" "}
                    <span className="text-accent-600 font-semibold">
                      Enterprise integrations
                    </span>
                    , PDF automation, LibreOffice conversions,
                    file-processing pipelines, scalable workflows, and
                    role-based automation — engineering robust systems that handle 
                    file conversion, dynamic sealing, performance optimization, 
                    and multi-site user role automation.
                  </p>

                  <p className="font-semibold text-neutral-900 border-l-4 border-accent-500 pl-4 bg-accent-50 py-3 rounded-r-lg">
                    I thrive in environments where problem-solving, ownership,
                    and innovation matter. Whether writing pixel-perfect UI from
                    Figma, building backend APIs, optimizing workflows, or
                    delivering complete end-to-end features, I bring precision,
                    adaptability, and a relentless commitment to quality.
                  </p>
                </div>
              </div>
            </div>

            {/* Skills Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-8">
                <div className="bg-white rounded-2xl shadow-card p-8 border border-neutral-100">
                  <h3 className="text-2xl font-bold text-neutral-900 mb-6 text-center">
                    Technical Skills
                  </h3>

                  <div className="space-y-6">
                    {skills.map((skillGroup, index) => (
                      <div key={index} className="group">
                        <h4 className="text-lg font-semibold text-accent-600 mb-3 flex items-center">
                          <span className="w-2 h-2 bg-accent-400 rounded-full mr-2"></span>
                          {skillGroup.category}
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {skillGroup.items.map((skill, skillIndex) => (
                            <span
                              key={skillIndex}
                              className="px-3 py-2 bg-neutral-100 text-neutral-700 rounded-lg text-sm font-medium hover:bg-accent-100 hover:text-accent-700 transition-all duration-200 cursor-default group-hover:scale-105">
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Experience Highlights */}
                  <div className="mt-8 pt-6 border-t border-neutral-200">
                    <h4 className="text-lg font-semibold text-neutral-900 mb-4 text-center">
                      Expertise Areas
                    </h4>
                    <div className="grid grid-cols-2 gap-3 text-center">
                      <div className="bg-primary-50 text-primary-700 py-2 px-3 rounded-lg text-sm font-medium">
                        Full Stack
                      </div>
                      <div className="bg-secondary-50 text-secondary-700 py-2 px-3 rounded-lg text-sm font-medium">
                        Automation
                      </div>
                      <div className="bg-primary-50 text-primary-700 py-2 px-3 rounded-lg text-sm font-medium">
                        Workflow Optimization
                      </div>
                      <div className="bg-secondary-50 text-secondary-700 py-2 px-3 rounded-lg text-sm font-medium">
                        Enterprise Systems
                      </div>
                    </div>
                  </div>
                </div>

                {/* CTA Card */}
                <div className="mt-6 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-2xl p-6 text-center text-white shadow-card">
                  <h4 className="text-xl font-bold mb-2">
                    Let's Build Together
                  </h4>
                  <p className="text-primary-100 mb-4 text-sm">
                    Ready to bring your ideas to life with cutting-edge
                    technology
                  </p>
                  <button className="bg-white text-primary-600  py-2 px-3 rounded-lg font-semibold hover:bg-neutral-100 transition-colors duration-200">
                    Get In Touch
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Element>
  );
}
