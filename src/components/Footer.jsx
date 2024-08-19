import React from 'react'
import {Link} from 'react-router-dom'
export default function Footer() {
  return (
    <div>
      <footer className="bg-[#111] px-4 sm:px-10 py-12 mt-32">
      <div className="lg:max-w-[50%] mx-auto text-center">
        <h2 className="md:text-4xl text-3xl font-semibold md:!leading-[50px] mb-6">Newsletter</h2>
        <p className="text-gray-400">
          Subscribe to our newsletter and stay up to date with the latest news,
          updates, and exclusive offers. Get valuable insights. Join our community today!
        </p>
        <div className="bg-[#444] flex px-2 py-1 rounded-md text-left mt-10">
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full outline-none bg-transparent pl-2"
          />
          <button
            type="button"
            className="px-6 py-3 rounded-md text-gray-100 bg-blue-700 hover:bg-blue-800 transition-all ml-auto"
          >
            Submit
          </button>
        </div>
      </div>
      <hr className="border-gray-400 my-12" />
      <div className="grid max-sm:grid-cols-1 max-lg:grid-cols-2 lg:grid-cols-4 gap-8">
        <div>
          <h4 className="text-lg mb-6">About Us</h4>
          <p className="text-gray-400 mb-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean gravida,
            mi eu pulvinar cursus, sem elit interdum mauris.
          </p>
        </div>
        <div>
          <h4 className="text-lg mb-6">Services</h4>
          <ul className="space-y-4">
            <li><Link to="#"className="text-gray-400 hover:text-blue-600 transition-all">Web Development</Link></li>
            <li><Link to="#"className="text-gray-400 hover:text-blue-600 transition-all">Mobile App Development</Link></li>
            <li><Link to="#"className="text-gray-400 hover:text-blue-600 transition-all">UI/UX Design</Link></li>
            <li><Link to="#"className="text-gray-400 hover:text-blue-600 transition-all">Digital Marketing</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-lg mb-6">Resources</h4>
          <ul className="space-y-4">
            <li><Link to="#"className="text-gray-400 hover:text-blue-600 transition-all">Webinars</Link></li>
            <li><Link to="#"className="text-gray-400 hover:text-blue-600 transition-all">Ebooks</Link></li>
            <li><Link to="#"className="text-gray-400 hover:text-blue-600 transition-all">Templates</Link></li>
            <li><Link to="#"className="text-gray-400 hover:text-blue-600 transition-all">Tutorials</Link></li>
          </ul>
        </div>
        <div>
            <h4 className="text-lg mb-6">About Us</h4>
            <ul className="space-y-4">
            <li><Link to="#"className="text-gray-400 hover:text-blue-600 transition-all">Our Story</Link></li>
            <li><Link to="#"className="text-gray-400 hover:text-blue-600 transition-all">Mission and Values</Link></li>
            <li><Link to="#"className="text-gray-400 hover:text-blue-600 transition-all">Team</Link></li>
            <li><Link to="#"className="text-gray-400 hover:text-blue-600 transition-all">Testimonials</Link></li>
            </ul>
        </div>
      </div>
    </footer>
    </div>
  )
}
