import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Update active section based on scroll position
      const sections = [
        "home",
        "about",
        "services",
        "skills",
        "projects",
        "contact",
      ];
      const current = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });

      if (current) {
        setActiveSection(current);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const navItems = [
    { name: "Home", to: "home" },
    { name: "About", to: "about" },
    { name: "Services", to: "services" },
    { name: "Skills", to: "skills" },
    { name: "Projects", to: "projects" },
    { name: "Contact", to: "contact" },
  ];

  return (
    <header
      className={`fixed w-full top-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-lg py-2"
          : "bg-transparent py-4"
      }`}>
      <div className="px-4 sm:px-6 lg:px-8 box-border w-full">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link
            to="home"
            smooth={true}
            duration={500}
            className="flex items-center space-x-3 cursor-pointer group">
            <div className="w-10 h-10 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
              <span className="text-white font-bold text-lg">ME</span>
            </div>
            <div
              className={`font-sans font-bold text-xl transition-colors duration-300 ${
                isScrolled ? "text-secondary-500" : "text-white"
              }`}>
              Mihretu
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                smooth={true}
                duration={500}
                spy={true}
                offset={-70}
                onSetActive={() => setActiveSection(item.to)}
                className={`px-4 py-2 rounded-xl font-medium transition-all duration-300 relative group ${
                  isScrolled
                    ? "text-neutral-800 hover:text-primary-500"
                    : "text-white hover:text-primary-300"
                } ${
                  activeSection === item.to
                    ? isScrolled
                      ? "text-primary-500 font-bold"
                      : "text-primary-300 font-bold"
                    : ""
                }`}>
                {item.name}
                {/* Active indicator */}
                <span
                  className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-primary-500 rounded-full transition-all duration-300 ${
                    activeSection === item.to
                      ? "scale-100"
                      : "scale-0 group-hover:scale-100"
                  }`}></span>

                {/* Hover background */}
                <span
                  className={`absolute inset-0 rounded-xl transition-all duration-300 -z-10 ${
                    isScrolled
                      ? "bg-primary-50 group-hover:bg-primary-50"
                      : "bg-white/10 group-hover:bg-white/20"
                  } ${
                    activeSection === item.to
                      ? isScrolled
                        ? "bg-primary-50"
                        : "bg-white/20"
                      : "opacity-0 group-hover:opacity-100"
                  }`}></span>
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:flex shrink-0">
            <Link
              to="contact"
              smooth={true}
              duration={500}
              className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 ${
                isScrolled
                  ? "bg-primary-500 text-white hover:bg-primary-500 shadow-lg"
                  : "bg-white text-secondary-500 hover:bg-neutral-100 shadow-lg"
              }`}>
              Get In Touch
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className={`lg:hidden p-3 rounded-xl transition-colors duration-300 ${
              isScrolled
                ? "hover:bg-neutral-100 text-neutral-800"
                : "hover:bg-white/20 text-white"
            }`}
            aria-label="Toggle menu">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden fixed inset-0 z-40 transition-all duration-500 ${
            isMenuOpen
              ? "opacity-100 visible"
              : "opacity-0 invisible pointer-events-none"
          }`}>
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={closeMenu}></div>

          {/* Menu Panel */}
          <div
            className={`absolute top-0 right-0 w-80 h-full bg-white shadow-2xl transform transition-transform duration-500 ${
              isMenuOpen ? "translate-x-0" : "translate-x-full"
            }`}>
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-neutral-200">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-xl flex items-center justify-center">
                  <span className="text-white font-bold text-lg">ME</span>
                </div>
                <div className="font-sans font-bold text-secondary-500">Mihretu</div>
              </div>

              <button
                onClick={closeMenu}
                className="p-2 hover:bg-neutral-100 rounded-lg transition-colors"
                aria-label="Close menu">
                <svg
                  className="w-5 h-5 text-neutral-800"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            {/* Navigation Links */}
            <nav className="p-6">
              <ul className="space-y-2">
                {navItems.map((item) => (
                  <li key={item.to}>
                    <Link
                      to={item.to}
                      smooth={true}
                      duration={500}
                      spy={true}
                      offset={-70}
                      onSetActive={() => setActiveSection(item.to)}
                      onClick={closeMenu}
                      className={`flex items-center px-4 py-3 rounded-xl font-medium transition-all duration-300 ${
                        activeSection === item.to
                          ? "bg-primary-50 text-primary-500 font-bold"
                          : "text-neutral-800 hover:bg-neutral-50 hover:text-primary-500"
                      }`}>
                      <span
                        className={`w-2 h-2 rounded-full mr-3 transition-all duration-300 ${
                          activeSection === item.to
                            ? "bg-primary-500 scale-125"
                            : "bg-neutral-300"
                        }`}></span>
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>

              {/* Mobile CTA */}
              <div className="mt-8 pt-6 border-t border-neutral-200">
                <Link
                  to="contact"
                  smooth={true}
                  duration={500}
                  onClick={closeMenu}
                  className="w-full bg-gradient-to-r from-primary-500 to-secondary-500 text-white font-semibold py-3  rounded-xl hover:from-primary-500 hover:to-secondary-500 transition-all duration-300 transform hover:scale-105 shadow-lg text-center block">
                  Get In Touch
                </Link>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}
