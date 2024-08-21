import React from 'react'

export default function Projects() {
  return (
    <div>
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
    </div>
  )
}
