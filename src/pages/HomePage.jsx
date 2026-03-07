import React from 'react'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Marq from '../components/Marq';

const HomePage = () => {
  return (
    <div id='home' className='min-h-screen '>
        <div className='relative z-10 w-full'>
        <div className='min-[900px]:flex lg:gap-15  min-[900px]:justify-center  min-[900px]:px-10'>
          <div className='text-center items-center min-[900px]:text-left min-[900px]:items-left
           mt-30'>
            <div className='min-[1120px]:flex gap-5'>
              <h1 className='text-7xl' >CODING THE </h1>
              <h1 className='text-(--primary-color) text-7xl'>COSMOS</h1></div>
              <p className='m-7 min-[900px]:mx-0 min-[900px]:my-7 text-center min-[900px]:w-120 text-gray-300 min-[900px]:text-left text-xl leading-10 justify-left'>
                  Engineering student trying to build (and survive) in this AI-driven world — a coder in progress with a growing obsession for design.
              </p>
              <button className=' btn-primary'><a href="#projects">View My Projects</a></button>
              <button className='btn-reverse'> <ArrowForwardIcon className="-m-2" /> </button>
          </div>
          <div className='flex justify-center item-center lg:mt-25 my-20 shrink-0'>
              <img 
              src="/photos/Varun.jpg" alt="Varun" 
              className='w-80 h-85 rounded-xl card-hover'/>
          </div>
        </div>
        <div className='md:-mt-15 w-full relative'>
            <div className='flex  justify-center mb-10 '>
              <div className='text-gray-300 text-sm border border-(--secondary-color) rounded-full px-3'>Hey there, Varun Here!</div>
            </div>
            <div className='h-50 flex justify-center overflow-visible'>
              <div className='w-[85vw] max-w-100 circle_gradient  rounded-t-full'></div>
            </div>
            <div className='relative z-10 -mt-18'>
              <Marq />
            </div>
        </div>
        </div>
    </div>
  )
}

export default HomePage
