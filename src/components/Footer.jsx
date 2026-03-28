import React from "react";
import Git from "../Image/svg/github-svgrepo-com.svg";
import Facebook from "../Image/svg/facebook-1-svgrepo-com.svg";
import LinkedIn from "../Image/svg/linkedin-color-svgrepo-com.svg";
import { Element } from "react-scroll";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  const services = [
    "Frontend Development",
    "Full Stack Solutions",
    "API Integration",
    "Data Analysis",
  ];

  const socialLinks = [
    {
      icon: Git,
      alt: "GitHub",
      href: "https://github.com/mihretue",
      color: "hover:bg-secondary-500",
    },
    {
      icon: Facebook,
      alt: "Facebook",
      href: "https://facebook.com/mihretue",
      color: "hover:bg-primary-500",
    },
    {
      icon: LinkedIn,
      alt: "LinkedIn",
      href: "www.linkedin.com/in/mihretu-endeshaw-63a23b339",
      color: "hover:bg-primary-800",
    },
  ];

  return (
    <Element name="footer">
      <footer className="bg-gradient-to-br from-neutral- to-white border-t border-neutral-">
        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {/* Brand & Contact */}
            <div className="lg:col-span-1">
              <div className="mb-6">
                <h2 className="text-2xl font-bold text-secondary-500 mb-2 font-sans">
                  Mihretu Endeshaw
                </h2>
                <p className="text-neutral- text-lg font-semibold">
                  Full Stack Developer
                </p>
              </div>

              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <span className="text-primary-500 text-lg mt-1">📧</span>
                  <div>
                    <p className="text-neutral- text-sm">Email</p>
                    <a
                      href="mailto:mihretuendeshaw84@gmail.com"
                      className="text-primary-500 hover:text-primary-600 font-semibold transition-colors">
                      mihretuendeshaw84@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <span className="text-primary-500 text-lg mt-1">📍</span>
                  <div>
                    <p className="text-neutral- text-sm">Location</p>
                    <p className="text-secondary-500 font-medium">
                      Addis Ababa, Ethiopia
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold text-secondary-500 mb-6 uppercase tracking-wider">
                Quick Links
              </h3>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-neutral- hover:text-primary-500 transition-colors duration-300 font-medium flex items-center group">
                      <span className="w-2 h-2 bg-primary-500 rounded-full mr-3 group-hover:scale-125 transition-transform"></span>
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-lg font-semibold text-secondary-500 mb-6 uppercase tracking-wider">
                Services
              </h3>
              <ul className="space-y-3">
                {services.map((service, index) => (
                  <li key={index}>
                    <span className="text-neutral- font-medium flex items-center group">
                      <span className="w-2 h-2 bg-blue-400 rounded-full mr-3 group-hover:scale-125 transition-transform"></span>
                      {service}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Connect & Newsletter */}
            <div>
              <h3 className="text-lg font-semibold text-secondary-500 mb-6 uppercase tracking-wider">
                Let's Connect
              </h3>
              <p className="text-neutral- mb-6 leading-relaxed">
                Ready to start your next project? Let's discuss how I can help
                bring your ideas to life.
              </p>

              {/* Social Links */}
              <div className="flex space-x-4 mb-6">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-12 h-12 bg-white border border-neutral- rounded-2xl flex items-center justify-center transition-all duration-300 transform hover:scale-110 shadow-sm ${social.color} group`}>
                    <img
                      src={social.icon}
                      alt={social.alt}
                      className="w-6 h-6 group-hover:filter group-hover:brightness-0 group-hover:invert transition-all"
                    />
                  </a>
                ))}
              </div>

              {/* Call to Action */}
              <a
                href="#contact"
                className="inline-block bg-gradient-to-r from-primary-500 to-secondary-500 text-white font-semibold  py-3 rounded-2xl hover:from-primary-500 hover:to-secondary-500 transition-all duration-300 transform hover:scale-105 shadow-lg text-sm">
                Start a Project
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-neutral- bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              {/* Copyright */}
              <div className="text-neutral- text-sm">
                © {currentYear} Mihretu Endeshaw. All rights reserved.
              </div>

              {/* Additional Links */}
              <div className="flex items-center space-x-6 text-sm">
                <a
                  href="#privacy"
                  className="text-neutral- hover:text-primary-500 transition-colors">
                  Privacy Policy
                </a>
                <a
                  href="#terms"
                  className="text-neutral- hover:text-primary-500 transition-colors">
                  Terms of Service
                </a>
                <div className="flex items-center space-x-2 text-neutral-">
                  <span className="w-2 h-2 bg-primary-500 rounded-full animate-pulse"></span>
                  <span>Available for new projects</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Back to Top Button */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-8 right-8 w-12 h-12 bg-primary-500 text-white rounded-2xl shadow-lg hover:bg-primary-500 transition-all duration-300 transform hover:scale-110 flex items-center justify-center z-50"
          aria-label="Back to top">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 15l7-7 7 7"
            />
          </svg>
        </button>
      </footer>
    </Element>
  );
}
