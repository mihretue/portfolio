import React from 'react'
import Bid from '../Image/svg/auction-bid-svgrepo-com.svg'
import WebScrap from '../Image/svg/selenium-svgrepo-com.svg'
import Commerce from '../Image/svg/commerce-and-shopping-ecommerce-svgrepo-com.svg'
import Gitt from '../Image/svg/github-svgrepo-com.svg'
import { Link } from 'react-router-dom'
import { Element } from 'react-scroll'
export default function Projects() {
  return (
    <Element name='project' className='section'>
    <div>
        <div class="mt-32 rounded-md px-4 py-12">
        <div class="grid md:grid-cols-2 justify-center items-center gap-12 max-w-7xl mx-auto">
          <div>
            <img src={Commerce} alt="Premium Benefits" class="w-8/12 mx-auto" title='E-comerce App'/>
          </div>
          <div class="max-md:text-center ">
            <h2 class="md:text-4xl text-3xl font-semibold md:!leading-[50px] text-black mb-6">E-Commerce Web Application
            </h2>
            <p class="text-green-500 font-serif">A feature-rich e-commerce platform built with the MERN stack, offering a seamless shopping experience. It includes dynamic product management, secure payment integration, and a responsive user interface, ensuring a smooth and engaging experience for both customers and administrators.</p>
            <Link to='https://github.com/mihretue/E-commerce' className='transition-all mt-10 p-2 px-6 py-3.5 rounded-md'>
              <img src={Gitt} className='w-9'/>
            </Link>
          </div>
        </div>
      </div>

      <div class="mt-32 rounded-md px-4 py-12">
        <div class="grid md:grid-cols-2 justify-center items-center gap-12 max-w-7xl mx-auto">
          <div class="max-md:text-center">
            <h2 class="md:text-4xl text-3xl font-semibold md:!leading-[50px] text-black mb-6">Bank Exchange Rate Aggregator</h2>
            <p class="text-green-500 font-serif ">A Django-React web application that scrapes and displays real-time exchange rate information from various banks. This app provides users with an easy-to-navigate interface to compare currency rates across different financial institutions, combining the power of Django for the backend and React for the front-end.</p>
            <Link to='https://github.com/mihretue/exchange_rate_scraping' className='transition-all mt-10 p-2 px-6 py-3.5 rounded-md'>
              <img src={Gitt} className='w-9'/>
            </Link>
          </div>
          <div>
            <img src={WebScrap} alt="Premium Benefits" class="w-8/12 mx-auto" title='Bank Exchange Rate made with WEb scrap and django' />
          </div>
        </div>
      </div>

      <div class="mt-32 rounded-md px-4 py-12">
        <div class="grid md:grid-cols-2 justify-center items-center gap-12 max-w-7xl mx-auto">
          <div>
            <img src={Bid} alt="Premium Benefits" class="w-8/12 mx-auto" title='E-comerce App'/>
          </div>
          <div class="max-md:text-center">
            <h2 class="md:text-4xl text-3xl font-semibold md:!leading-[50px] text-black mb-6">Bid Management System for Public Procurement Agency
            </h2>
            <p class="text-green-500 font-serif">
              A MERN stack-based bid management system designed for public procurement agencies. This application streamlines the bidding process, enabling efficient submission, review, and approval of bids. It offers a user-friendly interface for both bidders and administrators, ensuring transparency and smooth workflow management throughout the procurement process.
            </p>
            <Link to='https://github.com/mihretue/Bid-management-project' className='transition-all mt-10 p-2 px-6 py-3.5 rounded-md'>
              <img src={Gitt} className='w-9'/>
            </Link>
          </div>
        </div>
      </div>
    </div>
    </Element>
  )
}
