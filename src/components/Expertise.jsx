import React from 'react'
import Api from '../Image/svg/api-svgrepo-com.svg'
import Auction from '../Image/svg/auction-bid-svgrepo-com.svg'
import Commerce from '../Image/svg/commerce-and-shopping-ecommerce-svgrepo-com.svg'
import DataAnalysis from '../Image/svg/data-analysis-svgrepo-com.svg'
import Sharepoint from '../Image/svg/ms-sharepoint-svgrepo-com.svg'
import UI from '../Image/svg/ui-states-svgrepo-com.svg'
import Selenium from '../Image/svg/selenium-svgrepo-com.svg'
import Software from "../Image/svg/software-svgrepo-com.svg"

export default function Expertise() {
  return (
    <div>
      <div class="mt-32 max-w-7xl mx-auto">
        <div class="mb-16 max-w-2xl text-center mx-auto">
          <h2 class="md:text-4xl text-3xl font-semibold font-serif md:!leading-[50px] mb-6 text-green-500">Service</h2>
          <p class="text-green-500 font-semibold font-serif">Transforming Ideas into Digital Realities with Precision and Creativity.</p>
        </div>
        <div class="grid lg:grid-cols-3 md:grid-cols-2 gap-12 mt-16">
          <div class="text-center bg-white px-6 py-8 rounded-2xl shadow">
            <img src={UI} className='w-12 mb-6 inline-block rounded-xl' />
            <h3 class="text-xl mb-4 text-black">Frontend Development</h3>
            <p class="text-green-500 font-serif">I specialize in crafting visually stunning and highly responsive web applications using the latest frontend technologies. With expertise in HTML, CSS, React, and Tailwind CSS, I transform Figma designs into seamless digital experiences that work flawlessly across all devices.</p>
            <a href="javascript:void(0);" class="text-blue-600 inline-block mt-4 hover:underline">Learn more</a>
          </div>
          <div class="text-center bg-white px-6 py-8 rounded-2xl shadow">
            <img src={Software} className='w-12 mb-6 inline-block  rounded-xl'/>
            <h3 class="text-xl text-black mb-4">Full Stack Development</h3>
            <p class="text-green-500 font-serif">As a skilled full-stack developer, I build dynamic web applications from the ground up. Leveraging my knowledge of the MERN stack (MongoDB, Express.js, React, Node.js) and Django, I deliver robust and scalable solutions tailored to your business needs.</p>
            <a href="javascript:void(0);" class="text-blue-600 inline-block mt-4 hover:underline">Learn more</a>
          </div>
          <div class="text-center bg-white px-6 py-8 rounded-2xl shadow">
            <img src={Api} className='w-12 mb-6 inline-block  rounded-xl' />
            <h3 class="text-xl mb-4 text-black">API Integration</h3>
            <p class="text-green-500 font-serif">I integrate third-party APIs to extend the functionality of your web applications, from payment gateways to cloud storage solutions. My experience includes working with REST APIs and Data Insights API, ensuring smooth and reliable performance.</p>
            <a href="javascript:void(0);" class="text-blue-600 inline-block mt-4 hover:underline">Learn more</a>
          </div>
          <div class="text-center bg-white px-6 py-8 rounded-2xl shadow">
            <img src={Sharepoint} className='w-12 mb-6 inline-block rounded-xl' />
            <h3 class="text-xl mb-4 text-black">SharePoint Solutions</h3>
            <p class="text-green-500 font-serif">With hands-on experience in SharePoint, I design and maintain efficient intranet sites for organizations, including government projects. My services include custom SharePoint site design, InfoPath form creation, and seamless integration with existing systems.</p>
            <a href="javascript:void(0);" class="text-blue-600 inline-block mt-4 hover:underline">Learn more</a>
          </div>
          <div class="text-center bg-white px-6 py-8 rounded-2xl shadow">
            <img src={DataAnalysis} className='w-12 mb-6 inline-block  rounded-xl' />
            <h3 class="text-xl mb-4 text-black">Data Analysis</h3>
            <p class="text-green-500 font-serif">Combining my expertise in Python with advanced data analysis techniques, I provide insights that drive informed decision-making. Whether you need data scraping, processing, or visualization, I deliver actionable results to support your business goals.</p>
            <a href="javascript:void(0);" class="text-blue-600 inline-block mt-4 hover:underline">Learn more</a>
          </div>
        </div>
      </div>
    </div>
  )
}
