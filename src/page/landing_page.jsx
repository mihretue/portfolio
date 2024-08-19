import React from "react";
import MainSection from "../components/MainSection";
import About from "../components/About";
const LandinPage = ()=>{

  return (

  <div class=" text-gray-100 text-[15px]">
    <MainSection/>
    <About/>
    <div class="px-4 sm:px-10">
      <div class="mt-32 max-w-7xl mx-auto">
        <div class="mb-16 max-w-2xl text-center mx-auto">
          <h2 class="md:text-4xl text-3xl font-semibold md:!leading-[50px] mb-6">Service</h2>
          <p class="text-gray-400">Qui elit labore in nisi dolore tempor anim laboris ipsum ad ad consequat id. Dolore
            et sint mollit in nisi tempor culpa consectetur.</p>
        </div>
        <div class="grid lg:grid-cols-3 md:grid-cols-2 gap-12 mt-16">
          <div class="text-center bg-white px-6 py-8 rounded-2xl shadow">
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor"
              class="w-12 mb-6 inline-block bg-amber-500 p-3 rounded-xl" viewBox="0 0 32 32">
              <path
                d="M28.068 12h-.128a.934.934 0 0 1-.864-.6.924.924 0 0 1 .2-1.01l.091-.091a2.938 2.938 0 0 0 0-4.147l-1.511-1.51a2.935 2.935 0 0 0-4.146 0l-.091.091A.956.956 0 0 1 20 4.061v-.129A2.935 2.935 0 0 0 17.068 1h-2.136A2.935 2.935 0 0 0 12 3.932v.129a.956.956 0 0 1-1.614.668l-.086-.091a2.935 2.935 0 0 0-4.146 0l-1.516 1.51a2.938 2.938 0 0 0 0 4.147l.091.091a.935.935 0 0 1 .185 1.035.924.924 0 0 1-.854.579h-.128A2.935 2.935 0 0 0 1 14.932v2.136A2.935 2.935 0 0 0 3.932 20h.128a.934.934 0 0 1 .864.6.924.924 0 0 1-.2 1.01l-.091.091a2.938 2.938 0 0 0 0 4.147l1.51 1.509a2.934 2.934 0 0 0 4.147 0l.091-.091a.936.936 0 0 1 1.035-.185.922.922 0 0 1 .579.853v.129A2.935 2.935 0 0 0 14.932 31h2.136A2.935 2.935 0 0 0 20 28.068v-.129a.956.956 0 0 1 1.614-.668l.091.091a2.935 2.935 0 0 0 4.146 0l1.511-1.509a2.938 2.938 0 0 0 0-4.147l-.091-.091a.935.935 0 0 1-.185-1.035.924.924 0 0 1 .854-.58h.128A2.935 2.935 0 0 0 31 17.068v-2.136A2.935 2.935 0 0 0 28.068 12ZM29 17.068a.933.933 0 0 1-.932.932h-.128a2.956 2.956 0 0 0-2.083 5.028l.09.091a.934.934 0 0 1 0 1.319l-1.511 1.509a.932.932 0 0 1-1.318 0l-.09-.091A2.957 2.957 0 0 0 18 27.939v.129a.933.933 0 0 1-.932.932h-2.136a.933.933 0 0 1-.932-.932v-.129a2.951 2.951 0 0 0-5.028-2.082l-.091.091a.934.934 0 0 1-1.318 0l-1.51-1.509a.934.934 0 0 1 0-1.319l.091-.091A2.956 2.956 0 0 0 4.06 18h-.128A.933.933 0 0 1 3 17.068v-2.136A.933.933 0 0 1 3.932 14h.128a2.956 2.956 0 0 0 2.083-5.028l-.09-.091a.933.933 0 0 1 0-1.318l1.51-1.511a.932.932 0 0 1 1.318 0l.09.091A2.957 2.957 0 0 0 14 4.061v-.129A.933.933 0 0 1 14.932 3h2.136a.933.933 0 0 1 .932.932v.129a2.956 2.956 0 0 0 5.028 2.082l.091-.091a.932.932 0 0 1 1.318 0l1.51 1.511a.933.933 0 0 1 0 1.318l-.091.091A2.956 2.956 0 0 0 27.94 14h.128a.933.933 0 0 1 .932.932Z"
                data-original="#000000" />
              <path d="M16 9a7 7 0 1 0 7 7 7.008 7.008 0 0 0-7-7Zm0 12a5 5 0 1 1 5-5 5.006 5.006 0 0 1-5 5Z"
                data-original="#000000" />
            </svg>
            <h3 class="text-xl mb-4 text-black">Tailored Customization</h3>
            <p class="text-orange-500">Customize our product to perfectly align with your brand and meet your unique
              requirements.</p>
            <a href="javascript:void(0);" class="text-blue-600 inline-block mt-4 hover:underline">Learn more</a>
          </div>
          <div class="text-center bg-[#111] px-6 py-8 rounded-2xl">
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor"
              class="w-12 mb-6 inline-block bg-gray-700 p-3 rounded-xl" viewBox="0 0 682.667 682.667">
              <defs>
                <clipPath id="a" clipPathUnits="userSpaceOnUse">
                  <path d="M0 512h512V0H0Z" data-original="#000000" />
                </clipPath>
              </defs>
              <g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"
                stroke-width="40" clip-path="url(#a)" transform="matrix(1.33 0 0 -1.33 0 682.667)">
                <path
                  d="M256 492 60 410.623v-98.925C60 183.674 137.469 68.38 256 20c118.53 48.38 196 163.674 196 291.698v98.925z"
                  data-original="#000000" />
                <path d="M178 271.894 233.894 216 334 316.105" data-original="#000000" />
              </g>
            </svg>
            <h3 class="text-xl mb-4">Robust Security Measures</h3>
            <p class="text-gray-400">Rest easy knowing that your data is safeguarded by the latest and most robust
              security measures available.</p>
            <a href="javascript:void(0);" class="text-blue-600 inline-block mt-4 hover:underline">Learn more</a>
          </div>
          <div class="text-center bg-[#111] px-6 py-8 rounded-2xl">
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor"
              class="w-12 mb-6 inline-block bg-gray-700 p-3 rounded-xl" viewBox="0 0 512.001 512.001">
              <path
                d="M271.029 0c-33.091 0-61 27.909-61 61s27.909 61 61 61 60-27.909 60-61-26.909-61-60-61zm66.592 122c-16.485 18.279-40.096 30-66.592 30-26.496 0-51.107-11.721-67.592-30-14.392 15.959-23.408 36.866-23.408 60v15c0 8.291 6.709 15 15 15h151c8.291 0 15-6.709 15-15v-15c0-23.134-9.016-44.041-23.408-60zM144.946 460.404 68.505 307.149c-7.381-14.799-25.345-20.834-40.162-13.493l-19.979 9.897c-7.439 3.689-10.466 12.73-6.753 20.156l90 180c3.701 7.423 12.704 10.377 20.083 6.738l19.722-9.771c14.875-7.368 20.938-25.417 13.53-40.272zM499.73 247.7c-12.301-9-29.401-7.2-39.6 3.9l-82 100.8c-5.7 6-16.5 9.6-22.2 9.6h-69.901c-8.401 0-15-6.599-15-15s6.599-15 15-15h60c16.5 0 30-13.5 30-30s-13.5-30-30-30h-78.6c-7.476 0-11.204-4.741-17.1-9.901-23.209-20.885-57.949-30.947-93.119-22.795-19.528 4.526-32.697 12.415-46.053 22.993l-.445-.361-21.696 19.094L174.28 452h171.749c28.2 0 55.201-13.5 72.001-36l87.999-126c9.9-13.201 7.2-32.399-6.299-42.3z"
                data-original="#000000" />
            </svg>
            <h3 class="text-xl mb-4">24/7 Customer Support</h3>
            <p class="text-gray-400">Get prompt and reliable assistance with our 24/7 customer support for all your
              inquiries and concerns.</p>
            <a href="javascript:void(0);" class="text-blue-600 inline-block mt-4 hover:underline">Learn more</a>
          </div>
        </div>
      </div>

      <div class="max-w-4xl mx-auto text-center mt-32">
        <div>
          <h2 class="md:text-4xl text-3xl font-semibold md:!leading-[50px] mb-6">Transform Your Ideas with our
            Comprehensive
            Template Library</h2>
          <p class="text-gray-400">Unlock creativity with our versatile templates designed to elevate your landing
            pages. Whether you're showcasing products, collecting feedback, or promoting events, our templates make the
            process seamless and visually compelling. Qui elit labore in nisi dolore tempor anim laboris ipsum ad ad
            consequat id. Dolore et sint mollit in nisi tempor culpa consectetur.</p>
        </div>
        <button class='px-6 py-3.5 rounded-md text-gray-100 bg-blue-700 hover:bg-blue-800 transition-all mt-10'>Get
          started
          today</button>
      </div>

      <div class="mt-32 rounded-md px-4 py-12">
        <div class="grid md:grid-cols-2 justify-center items-center gap-12 max-w-7xl mx-auto">
          <div>
            <img src="https://readymadeui.com/management-img.webp" alt="Premium Benefits" class="w-full mx-auto" />
          </div>
          <div class="max-md:text-center">
            <h2 class="md:text-4xl text-3xl font-semibold md:!leading-[50px] mb-6">Try using our templates with tailwind
              CSS
            </h2>
            <p class="text-gray-400">Veniam proident aute magna anim excepteur et ex consectetur velit ullamco veniam
              minim aute sit. Elit occaecat officia et laboris Lorem minim. Officia do aliqua adipisicing ullamco in.
            </p>
            <button type="button"
              class="px-6 py-3.5 rounded-md text-gray-100 bg-blue-700 hover:bg-blue-800 transition-all mt-10">
              Try it today
            </button>
          </div>
        </div>
      </div>

      <div class="mt-32 rounded-md px-4 py-12">
        <div class="grid md:grid-cols-2 justify-center items-center gap-12 max-w-7xl mx-auto">
          <div class="max-md:text-center">
            <h2 class="md:text-4xl text-3xl font-semibold md:!leading-[50px] mb-6">Elevate Your Experience with Modern
              Elegance</h2>
            <p class="text-gray-400">Laboris qui Lorem ad tempor ut reprehenderit. Nostrud anim nulla officia ea sit
              deserunt. Eu eu quis anim aute Laboris qui Lorem ad tempor ut reprehenderit.</p>
            <button type="button"
              class="px-6 py-3.5 rounded-md text-gray-100 bg-blue-700 hover:bg-blue-800 transition-all mt-10">
              Try it today
            </button>
          </div>
          <div>
            <img src="https://readymadeui.com/team-image.webp" alt="Premium Benefits" class="w-full mx-auto" />
          </div>
        </div>
      </div>



      <div class="mt-32 max-w-7xl mx-auto">
        <div class="mb-16 max-w-2xl text-center mx-auto">
          <h2 class="md:text-4xl text-3xl font-semibold md:!leading-[50px] mb-6">What our happy client say</h2>
          <p class="text-gray-400">Laboris qui Lorem ad tempor ut reprehenderit. Nostrud anim nulla officia ea sit
            deserunt. Eu eu quis anim aute Laboris qui Lorem ad tempor ut reprehenderit.</p>
        </div>
        <div class="grid md:grid-cols-3 gap-12 max-md:justify-center text-center mt-16">
          <div>
            <div class="flex flex-col items-center">
              <img src="https://readymadeui.com/profile_2.webp"
                class="w-24 h-24 rounded-full shadow-xl border-2 border-white" />
              <div class="mt-4">
                <h4 class="text-base">John Doe</h4>
                <p class="text-xs text-blue-600 mt-2">CEO, Company</p>
              </div>
            </div>
            <div class="mt-6">
              <p class="text-gray-400">The service was amazing. I never had to wait that long for my food. The staff was
                friendly and attentive, and the delivery was impressively prompt.</p>
            </div>
            <div class="flex justify-center space-x-2 mt-4">
              <svg class="w-4 fill-blue-600" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
              </svg>
              <svg class="w-4 fill-blue-600" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
              </svg>
              <svg class="w-4 fill-blue-600" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
              </svg>
              <svg class="w-4 fill-[#CED5D8]" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
              </svg>
              <svg class="w-4 fill-[#CED5D8]" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
              </svg>
            </div>
          </div>
          <div>
            <div class="flex flex-col items-center">
              <img src="https://readymadeui.com/profile_3.webp"
                class="w-24 h-24 rounded-full shadow-xl border-2 border-white" />
              <div class="mt-4">
                <h4 class="text-base">Mark Adair</h4>
                <p class="text-xs text-blue-600 mt-2">CEO, Company</p>
              </div>
            </div>
            <div class="mt-6">
              <p class="text-gray-400">The service was amazing. I never had to wait that long for my food. The staff was
                friendly and attentive, and the delivery was impressively prompt.</p>
            </div>
            <div class="flex justify-center space-x-2 mt-4">
              <svg class="w-4 fill-blue-600" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
              </svg>
              <svg class="w-4 fill-blue-600" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
              </svg>
              <svg class="w-4 fill-blue-600" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
              </svg>
              <svg class="w-4 fill-blue-600" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
              </svg>
              <svg class="w-4 fill-blue-600" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
              </svg>
            </div>
          </div>
          <div>
            <div class="flex flex-col items-center">
              <img src="https://readymadeui.com/profile_4.webp"
                class="w-24 h-24 rounded-full shadow-xl border-2 border-white" />
              <div class="mt-4">
                <h4 class="text-base">Simon Konecki</h4>
                <p class="text-xs text-blue-600 mt-2">CEO, Company</p>
              </div>
            </div>
            <div class="mt-6">
              <p class="text-gray-400">The service was amazing. I never had to wait that long for my food. The staff was
                friendly and attentive, and the delivery was impressively prompt.</p>
            </div>
            <div class="flex justify-center space-x-2 mt-4">
              <svg class="w-4 fill-blue-600" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
              </svg>
              <svg class="w-4 fill-blue-600" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
              </svg>
              <svg class="w-4 fill-blue-600" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
              </svg>
              <svg class="w-4 fill-blue-600" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
              </svg>
              <svg class="w-4 fill-[#CED5D8]" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
      
  </div>
)
    }

  export default LandinPage; 