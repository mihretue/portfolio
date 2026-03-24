import React, { useState } from "react";
import Api from "../Image/svg/api-svgrepo-com.svg";
import Commerce from "../Image/svg/commerce-and-shopping-ecommerce-svgrepo-com.svg";
import DataAnalysis from "../Image/svg/data-analysis-svgrepo-com.svg";
import Sharepoint from "../Image/svg/ms-sharepoint-svgrepo-com.svg";
import UI from "../Image/svg/ui-states-svgrepo-com.svg";
import Software from "../Image/svg/software-svgrepo-com.svg";
import { Element } from "react-scroll";

export default function Expertise() {
  const [activeCard, setActiveCard] = useState(null);

  const services = [
    {
      icon: UI,
      title: "Frontend Development",
      description:
        "I specialize in crafting visually stunning and highly responsive web applications using the latest frontend technologies. With expertise in HTML, CSS, React, and Tailwind CSS, I transform Figma designs into seamless digital experiences that work flawlessly across all devices.",
      technologies: ["React", "JavaScript", "Tailwind CSS", "HTML5", "CSS3"],
      color: "from-primary-500 to-cyan-500",
    },
    {
      icon: Software,
      title: "Full Stack Development",
      description:
        "As a skilled full-stack developer, I build dynamic web applications from the ground up. Leveraging my knowledge of the MERN stack (MongoDB, Express.js, React, Node.js) and Django, I deliver robust and scalable solutions tailored to your business needs.",
      technologies: ["MERN Stack", "Django", "Python", "MongoDB", "PostgreSQL"],
      color: "from-primary-500 to-secondary-500",
    },
    {
      icon: Api,
      title: "API Integration",
      description:
        "I integrate third-party APIs to extend the functionality of your web applications, from payment gateways to cloud storage solutions. My experience includes working with REST APIs and Data Insights API, ensuring smooth and reliable performance.",
      technologies: [
        "REST APIs",
        "GraphQL",
        "WebSocket",
        "Payment Gateways",
        "Cloud Services",
      ],
      color: "from-primary-500 to-secondary-500",
    },
    {
      icon: Sharepoint,
      title: "SharePoint Solutions",
      description:
        "With hands-on experience in SharePoint, I design and maintain efficient intranet sites for organizations, including government projects. My services include custom SharePoint site design, InfoPath form creation, and seamless integration with existing systems.",
      technologies: [
        "SharePoint",
        "SPFx",
        "Power Automate",
        "InfoPath",
        "Office 365",
      ],
      color: "from-orange-500 to-amber-500",
    },
    {
      icon: DataAnalysis,
      title: "Data Analysis",
      description:
        "Combining my expertise in Python with advanced data analysis techniques, I provide insights that drive informed decision-making. Whether you need data scraping, processing, or visualization, I deliver actionable results to support your business goals.",
      technologies: [
        "Python",
        "Pandas",
        "Data Visualization",
        "Web Scraping",
        "Automation",
      ],
      color: "from-red-500 to-rose-500",
    },
    {
      icon: Commerce,
      title: "E-Commerce Solutions",
      description:
        "Building modern e-commerce platforms with secure payment integrations, inventory management, and seamless user experiences. From small stores to enterprise marketplaces, I create solutions that drive sales and growth.",
      technologies: [
        "E-commerce",
        "Payment Processing",
        "Inventory Management",
        "Security",
        "Performance",
      ],
      color: "from-indigo-500 to-primary-500",
    },
  ];

  return (
    <Element name="services" className="section">
      <div className="py-20  bg-gradient-to-br from-neutral- to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header Section */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center mb-4">
              <div className="w-2 h-2 bg-primary-500 rounded-full mr-2"></div>
              <span className="text-primary-500 font-semibold uppercase tracking-wider text-sm">
                My Services
              </span>
              <div className="w-2 h-2 bg-primary-500 rounded-full ml-2"></div>
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold text-secondary-500 mb-4 font-sans">
              What I Do
            </h2>
            <div className="w-20 h-1 bg-primary-500 mx-auto mb-6"></div>
            <p className="text-xl text-neutral- w-full mx-auto leading-relaxed">
              Transforming Ideas into Digital Realities with Precision and
              Creativity
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className={`group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-neutral- ${
                  activeCard === index ? "scale-105 ring-2 ring-green-200" : ""
                }`}
                onMouseEnter={() => setActiveCard(index)}
                onMouseLeave={() => setActiveCard(null)}>
                {/* Gradient Top Bar */}
                <div className={`h-2 bg-gradient-to-r ${service.color}`}></div>

                <div className="p-8">
                  {/* Icon Container */}
                  <div
                    className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r ${service.color} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <img
                      src={service.icon}
                      alt={service.title}
                      className="w-8 h-8 filter brightness-0 invert"
                    />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-secondary-500 mb-4 group-hover:text-secondary-500 transition-colors duration-300">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-neutral- leading-relaxed mb-6 group-hover:text-neutral- transition-colors duration-300">
                    {service.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {service.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-neutral- text-neutral- text-sm font-medium rounded-full group-hover:bg-neutral- transition-colors duration-300">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Hover Effect Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-white to-gray-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-16">
            <div className="bg-gradient-to-r from-primary-500 to-secondary-500 rounded-2xl p-8 text-white shadow-lg w-full mx-auto">
              <h3 className="text-2xl font-bold mb-4">
                Ready to Start Your Project?
              </h3>
              <p className="text-green-100 mb-6 text-lg">
                Let's collaborate to bring your vision to life with cutting-edge
                technology and innovative solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-primary-500  py-3 px-6 rounded-lg font-semibold hover:bg-neutral- transition-colors duration-300 shadow-md">
                  Get Free Consultation
                </button>
                <button className="border-2 border-white text-white  py-3 px-4 rounded-lg font-semibold hover:bg-white hover:text-primary-500 transition-all duration-300">
                  View My Work
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Element>
  );
}
