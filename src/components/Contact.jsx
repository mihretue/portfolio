import React, { useRef } from "react";
import emailjs from "emailjs-com";
import styled from "styled-components";
import { Element } from "react-scroll";
const Bubble = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  
  &::after {
    content: '';
    border-top-left-radius: 50% 100%;
    border-top-right-radius: 50% 100%;
    position: absolute;
    bottom: 0;
    z-index: -1;
    width: 100%;
    height: 124%;
    background-color:#d5d9e0;
  }
  
  @media screen and (max-width: 968px) {
    &::after {
      display: block;
    }
  }
`;

export default function Contact() {
  const form = useRef();

  const onEmailSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_8qlkrnt",
        "template_k65h2qr",
        form.current,
        "1rMUjiTsdPJZ4tleB"
      )
      .then(
        () => {
          console.log("Email sent");
        },
        (err) => {
          console.log("FAILED...", err.text);
        }
      );
  };
  return (
    <Element name="contact" className="section">
      <Bubble className="mt-52 py-14 max-w-7xl mx-auto font-serif">
        <div className="mb-16 max-w-2xl text-center mx-auto">
          <h2 className="md:text-4xl text-3xl font-semibold font-serif md:!leading-[50px] mb-6 text-green-500">
            Get In Touch!
          </h2>
          <p className="text-green-500 font-semibold font-serif">
            I'd love to hear from you! Whether you have a project in mind or
            just want to connect, feel free to reach out.
          </p>
        </div>
        <form
          ref={form}
          onSubmit={onEmailSubmit}
          className="container mx-auto row col-6 mt-44 text-black d-flex align-items-center justify-center">
          <div className="space-y-4">
            <div className="flex flex-col space-y-1">
              <label className="text-black-400 font-semibold">Name</label>
              <input
                type="text"
                name="name"
                required
                className="border border-blue-500 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-500 transition duration-300 ease-in-out"
              />
            </div>

            <div className="flex flex-col space-y-1">
              <label className="text-gray-700 font-semibold">Email</label>
              <input
                type="email"
                name="email"
                required
                className="border border-blue-500 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-500 transition duration-300 ease-in-out"
              />
            </div>

            <div className="flex flex-col space-y-1">
              <label className="text-gray-700 font-semibold">Message</label>
              <textarea
                name="message"
                required
                className="border border-blue-500 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-500 transition duration-300 ease-in-out"
                rows="4"></textarea>
            </div>
            <button
              type="submit"
              className="border border-blue-500 text-white font-bold py-2 px-6 bg-green-500 hover:bg-green-600 rounded transition-colors duration-300">
              Send Message
            </button>
          </div>
        </form>
      </Bubble>
    </Element>
  );
}
