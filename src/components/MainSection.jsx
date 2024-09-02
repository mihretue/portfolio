import React, {useState} from 'react'
import BackgroundImage  from '../Image/Portfolio1.png'
import { Element } from 'react-scroll'
export default function MainSection() {

        const [isMenuOpen, setIsMenuOpen] = useState(false)
        const handleClick = ()=>{
        setIsMenuOpen(!isMenuOpen)
            }

  return (
    <Element name='home' className='section'>
    <div>
    <div
      className="relative lg:min-h-full 2xl:min-h-[730px] before:absolute before:inset-0 before:w-full  before:opacity-60 "
      style={{ backgroundImage: `url(${BackgroundImage})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', height: '85rem', width:'117rem'}}
    >
      <header className="py-4 px-4 sm:px-10 z-50 min-h-[70px] relative">
        <div className="lg:flex lg:items-center gap-x-2 relative">
          <div className="flex items-center shrink-0">
            <button id="toggleOpen" onClick={handleClick} className="lg:hidden ml-auto">
              <svg className="w-7 h-7" fill="#fff" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path>
              </svg>
            </button>
          </div>

          <div
            className={`lg:ml-14 ${isMenuOpen ? 'lg:block' : 'max-lg:hidden'} w-full max-lg:fixed max-lg:before:fixed max-lg:before:bg-black max-lg:before:opacity-50 max-lg:before:inset-0 max-lg:before:z-50 z-50`}
          >
            <button id="toggleClose" onClick={handleClick} className="lg:hidden fixed top-2 right-4 z-[100] rounded-full bg-white p-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 fill-black" viewBox="0 0 320.591 320.591">
                <path d="M30.391 318.583a30.37 30.37 0 0 1-21.56-7.288c-11.774-11.844-11.774-30.973 0-42.817L266.643 10.665c12.246-11.459 31.462-10.822 42.921 1.424 10.362 11.074 10.966 28.095 1.414 39.875L51.647 311.295a30.366 30.366 0 0 1-21.256 7.288z" data-original="#000000"></path>
                <path d="M287.9 318.583a30.37 30.37 0 0 1-21.257-8.806L8.83 51.963C-2.078 39.225-.595 20.055 12.143 9.146c11.369-9.736 28.136-9.736 39.504 0l259.331 257.813c12.243 11.462 12.876 30.679 1.414 42.922-.456.487-.927.958-1.414 1.414a30.368 30.368 0 0 1-23.078 7.288z" data-original="#000000"></path>
              </svg>
            </button>
          </div>
        </div>
      </header>
    </div>
    </div>
    </Element>
  )
}
