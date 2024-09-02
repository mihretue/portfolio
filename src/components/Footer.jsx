import React from 'react'
import {Link} from 'react-router-dom'
import Git from '../Image/svg/github-svgrepo-com.svg'
import Facebook from '../Image/svg/facebook-1-svgrepo-com.svg'
import LinkedIn from '../Image/svg/linkedin-color-svgrepo-com.svg'

export default function Footer() {
  return (
    <div>
      <footer className="bg-[#fbfcfd] px-4 sm:px-10 py-12 mt-32 shadow">
      <hr className=" my-12" />
      <div className="grid max-sm:grid-cols-1 max-lg:grid-cols-2 lg:grid-cols-4 gap-8 d-flex justify-center align-items-center ">
        <div >
          <h1 className="text-lg mb-3 ml-4 font-oswald">GET IN TOUCH</h1>
          <div className='d-flex'>
            <h5 className='mr-2'>Info</h5> |
            <h5 className='ml-4 mr-2'>Support</h5> |
            <h5 className='ml-4'>Help</h5>
          </div>
          <h6 className="text-green-400 mb-2 text-lg">
            mihretuendeshaw84@gmail.com
          </h6>
          
          <div className='d-flex  p-4'>
          <Link to='https://github.com/mihretue' className="text-green-400 mb-2 px-1">
            <img src={Git} className='w-9'/>
          </Link>
          <Link to='https://facebook.com/mihretue' className="text-green-400 mb-2  px-1">
            <img src={Facebook} className='w-9'/>
          </Link>
          <Link to='https://linkedin.com/mihretue' className="text-green-400 mb-2  px-1">
            <img src={LinkedIn} className='w-9'/>
          </Link>
          </div>
        </div>
      </div>
    </footer>
    </div>
  )
}
