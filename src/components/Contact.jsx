import React, {useRef} from 'react'
import emailjs from 'emailjs-com'

export default function Contact() {
  const form = useRef();

  const onEmailSubmit = (e)=>{
    e.preventDefault();

    emailjs
    .sendForm('service_8qlkrnt','template_k65h2qr', form.current,'1rMUjiTsdPJZ4tleB'
    )
    .then(()=>{
      console.log('Email sent')
    },
  (err)=>{
    console.log('FAILED...', err.text)
  },
)
  }
  return (
    <div className='mt-32 max-w-7xl mx-auto font-serif'>
       <div class="mb-16 max-w-2xl text-center mx-auto">
          <h2 class="md:text-4xl text-3xl font-semibold font-serif md:!leading-[50px] mb-6 text-green-500">Thank you for reaching out!</h2>
          <p class="text-green-500 font-semibold font-serif">Your message has been successfully sent. I will review it and get back to you as soon as possible. If you have any urgent inquiries, feel free to reach out to me via email.</p>
        </div>
    <form ref={form} onSubmit={onEmailSubmit} className=' container mx-auto  row col-6 mt-44 text-black d-flex align-items-center justify-center'>
      <div class="space-y-4">
        <div class="flex flex-col space-y-1">
          <label class="text-orange-400 font-semibold">Name</label>
          <input type="text" name="name" onChange={(e)=> e.target.value} className="border border-blue-500 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-500 transition duration-300 ease-in-out" />
        </div>

        <div class="flex flex-col space-y-1">
          <label class="text-gray-700 font-semibold">Email</label>
          <input type="email" onChange={(e)=> e.target.value} name="email" className="border border-blue-500 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-500 transition duration-300 ease-in-out" />
        </div>

        <div class="flex flex-col space-y-1">
          <label class="text-gray-700 font-semibold">Message</label>
          <textarea name="message" onChange={(e)=>e.target.value} className="border border-blue-500 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-500 transition duration-300 ease-in-out" rows="4"></textarea>
        </div>
        <button type="submit" className=' border border-blue-500 text-black font-bold  py-1 px-3 bg-green-400 rounded'>Send</button>
  </div>
    </form>
    </div>
  )
}
