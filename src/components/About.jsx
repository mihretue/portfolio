import React from 'react'

export default function About() {
  return (
    <div class="mt-32 max-w-7xl mx-auto">
      <div class="mb-16 max-w-2xl text-center mx-auto">
        <h1 class="md:text-4xl text-3xl font-sans md:!leading-[50px] mb-6 text-lime-500">About Me</h1>
        <h3 class="md:text-3xl text-3xl font-serif md:!leading-[40px] mb-6 text-black">Mihretu Endeshaw</h3>
      </div>
      <div className='mx-auto max-w-6xl d-flex rounded-2xl shadow align-items-center justify-content-center'>
        <p className='text-black md:text-2xl py-8 px-7'>
            Hi, my name is Mihretu Endeshaw. I am a seasoned software engineer with a strong passion for building scalable, efficient, and high-performance systems. 
            With expertise in the MERN stack (MongoDB, Express.js, React, Node.js), 
            I specialize in developing full-stack web applications that are both robust and user-friendly. 
            Additionally, I have extensive experience in Python, which I leverage for data analysis, automation, and 
            backend development. My skill set allows me to seamlessly integrate data-driven insights into applications, 
            ensuring they are not only functional but also intelligent and optimized for performance. 
            I am committed to continuous learning and thrive on tackling challenging projects that push the boundaries of technology.
        </p>
      </div>
    </div>
  )
}
