import React from 'react'
import BootstrapIcon from '../Image/svg/bootstrap-fill-svgrepo-com.svg'
import JavascriptIcon from '../Image/svg/javascript-svgrepo-com.svg'
import TailwindIcon from '../Image/svg/tailwindcss-icon-svgrepo-com.svg'
import NodeIcon from '../Image/svg/node-js-svgrepo-com.svg'
import ReactIcon from '../Image/svg/reactjs-svgrepo-com.svg'
import PythonIcon from '../Image/svg/python-svgrepo-com.svg'
import HtmlIcon from '../Image/svg/html5-svgrepo-com.svg'
import CssIcon from '../Image/svg/css-svgrepo-com.svg'
import DjagnoIcon from '../Image/svg/django-svgrepo-com.svg'
import MongoIcon from '../Image/svg/mongo-svgrepo-com.svg'

const ImageFile = [
    { id: 1, name: 'bootstrap', icon: BootstrapIcon },
    { id: 2, name: 'javascript', icon: JavascriptIcon },
    {id:3, name:'tailwindcss', icon:TailwindIcon},
    {id:4, name:'Nodejs', icon:NodeIcon},
    {id:5, name:'React js', icon:ReactIcon},
    {id:6, name:'Python', icon:PythonIcon},
    {id:7, name: 'HTML', icon:HtmlIcon},
    {id:8, name: 'Css',icon:CssIcon},
    {id:9, name:'Django', icon:DjagnoIcon},
    {id:10, name:'Mongodb', icon:MongoIcon}
]

export default function SkillSet() {
  return (
    <div className='mt-32 max-w-8xl  mx-auto flex flex-col items-center'>
        <div class="mb-16 max-w-2xl text-center mx-auto">
            <h2 class="md:text-4xl text-3xl font-semibold text-lime-500 font-serif md:!leading-[50px] mb-6">
                Tech Stack
            </h2>
        </div>
    <div className='grid lg:grid-cols-12 md:grid-cols-6 gap-9 mt-16 mx-6  items-center'>
        
        { ImageFile.map((item, index)=>{
            return(
                <div 
                    key={index}
                    className=' 
                            bg-white px-1 py-3  rounded-2xl shadow 
                            flex justify-center items-center text-center'
                >
                    <img src={item.icon} title={item.name} className='object-contain h-full w-full'/>
                </div>
            )
        })
        
}
    </div>
    </div>
  )
}
