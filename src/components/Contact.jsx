import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";
import styled from "styled-components";
import { Element } from "react-scroll";

const BubbleContainer = styled.div`
  position: relative;
  width: 100%;
  min-height: 100vh;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 80%;
    background: linear-gradient(135deg, #d5d9e0 0%, #e8edf5 100%);
    border-radius: 50% 50% 0 0;
    transform: scale(1.2);
    
    @media (max-width: 768px) {
      height: 75%;
      border-radius: 40% 40% 0 0;
      transform: scale(1.1);
    }
    
    @media (max-width: 480px) {
      height: 70%;
      border-radius: 30% 30% 0 0;
    }
  }
`;

const ContactCard = styled.div`
  background: white;
  border-radius: 24px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
`;

export default function Contact() {
  const form = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const onEmailSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      await emailjs.sendForm(
        "service_8qlkrnt",
        "template_k65h2qr",
        form.current,
        "1rMUjiTsdPJZ4tleB"
      );

      setSubmitStatus("success");
      form.current.reset();
    } catch (err) {
      console.log("FAILED...", err.text);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: "📧",
      title: "Email",
      value: "mihretuendeshaw84@gmail.com",
      link: "mailto:mihretuendeshaw84@gmail.com",
    },
    {
      icon: "📱",
      title: "Phone",
      value: "+251963319727",
      link: "tel:+251963319727",
    },
    {
      icon: "📍",
      title: "Location",
      value: "Addis Ababa, Ethiopia",
      link: "#",
    },
  ];

  return (
    <Element name="contact" className="section">
      <BubbleContainer className="pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Header Section */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center mb-4">
              <div className="w-2 h-2 bg-green-400 rounded-full mr-2"></div>
              <span className="text-green-600 font-semibold uppercase tracking-wider text-sm">
                Get In Touch
              </span>
              <div className="w-2 h-2 bg-green-400 rounded-full ml-2"></div>
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
              Let's Work Together
            </h2>
            <div className="w-20 h-1 bg-green-500 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              I'd love to hear from you! Whether you have a project in mind or
              just want to connect, feel free to reach out. I'm always open to
              discussing new opportunities.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Information */}
            <div className="space-y-8">
              <ContactCard className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Contact Information
                </h3>
                <p className="text-gray-600 mb-8 leading-relaxed">
                  Feel free to reach out through any of these channels. I
                  typically respond within 24 hours and would be happy to
                  discuss your project requirements.
                </p>

                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <a
                      key={index}
                      href={info.link}
                      className="flex items-center p-4 rounded-2xl bg-gray-50 hover:bg-green-50 transition-all duration-300 group border border-transparent hover:border-green-200">
                      <div className="flex items-center justify-center w-12 h-12 bg-green-100 rounded-xl text-green-600 text-xl group-hover:scale-110 transition-transform duration-300 mr-4">
                        {info.icon}
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900 group-hover:text-green-700 transition-colors">
                          {info.title}
                        </div>
                        <div className="text-gray-600 group-hover:text-gray-700">
                          {info.value}
                        </div>
                      </div>
                    </a>
                  ))}
                </div>

                {/* Social Links */}
                <div className="mt-8 pt-6 border-t border-gray-200">
                  <h4 className="font-semibold text-gray-900 mb-4">
                    Follow Me
                  </h4>
                  <div className="flex space-x-4">
                    {[
                      {
                        name: "GitHub",
                        icon: "💻",
                        link: "https://github.com/mihretue",
                      },
                      {
                        name: "LinkedIn",
                        icon: "💼",
                        link: "www.linkedin.com/in/mihretu-endeshaw-63a23b339",
                      },
                      {
                        name: "Twitter",
                        icon: "🐦",
                        link: "https://x.com/EndeshawMihretu",
                      },
                    ].map((social, index) => (
                      <a
                        key={index}
                        href={social.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center w-12 h-12 bg-gray-100 rounded-xl hover:bg-green-100 hover:text-green-600 transition-all duration-300 text-lg"
                        title={social.name}>
                        {social.icon}
                      </a>
                    ))}
                  </div>
                </div>
              </ContactCard>
            </div>

            {/* Contact Form */}
            <ContactCard className="p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Send Message
              </h3>

              {/* Status Messages */}
              {submitStatus === "success" && (
                <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-2xl text-green-700 flex items-center">
                  <span className="text-lg mr-2">✅</span>
                  Message sent successfully! I'll get back to you soon.
                </div>
              )}

              {submitStatus === "error" && (
                <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-2xl text-red-700 flex items-center">
                  <span className="text-lg mr-2">❌</span>
                  Failed to send message. Please try again or contact me
                  directly.
                </div>
              )}

              <form ref={form} onSubmit={onEmailSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-gray-700 font-semibold text-sm uppercase tracking-wide">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      disabled={isSubmitting}
                      className="w-full border border-gray-300 rounded-2xl p-4 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all duration-300 bg-white disabled:bg-gray-100 disabled:cursor-not-allowed"
                      placeholder="Enter your name"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-gray-700 font-semibold text-sm uppercase tracking-wide">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      disabled={isSubmitting}
                      className="w-full border border-gray-300 rounded-2xl p-4 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all duration-300 bg-white disabled:bg-gray-100 disabled:cursor-not-allowed"
                      placeholder="Enter your email"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-gray-700 font-semibold text-sm uppercase tracking-wide">
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    disabled={isSubmitting}
                    className="w-full border border-gray-300 rounded-2xl p-4 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all duration-300 bg-white disabled:bg-gray-100 disabled:cursor-not-allowed"
                    placeholder="What's this about?"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-gray-700 font-semibold text-sm uppercase tracking-wide">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    required
                    disabled={isSubmitting}
                    rows="6"
                    className="w-full border border-gray-300 rounded-2xl p-4 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all duration-300 bg-white resize-none disabled:bg-gray-100 disabled:cursor-not-allowed"
                    placeholder="Tell me about your project or inquiry..."></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-green-500 to-emerald-600 text-white font-semibold py-4 px-8 rounded-2xl hover:from-green-600 hover:to-emerald-700 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none shadow-lg hover:shadow-xl flex items-center justify-center">
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-t-2 border-b-2 border-white mr-2"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <svg
                        className="w-5 h-5 ml-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                        />
                      </svg>
                    </>
                  )}
                </button>
              </form>
            </ContactCard>
          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-16">
            <p className="text-gray-600 mb-4">Prefer a more direct approach?</p>
            <a
              href="mailto:mihretuendeshaw84@gmail.com"
              className="inline-flex items-center px-8 py-4 border-2 border-green-500 text-green-600 font-semibold rounded-2xl hover:bg-green-500 hover:text-white transition-all duration-300">
              📧 Email Me Directly
            </a>
          </div>
        </div>
      </BubbleContainer>
    </Element>
  );
}
