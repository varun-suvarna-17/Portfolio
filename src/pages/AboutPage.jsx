import React from 'react'
import {about, journey} from '/data/About'

const AboutPage = () => {
 return (
 <div id='about' className='min-h-screen py-20'>
 <div className='relative flex flex-col items-center justify-center h-full'>
  <h1 className='text-center'>
   Who Am I in This <span className='text-(--primary-color)'>Codespace?</span>
  </h1>
 <div className=" items-center justify-center px-10 relative ">
  <div className="flex items-center my-10 gap-16 bg-(--bg-card) border-3 border-(--primary-color)/60 rounded-[40px] p-16 max-w-6xl relative overflow-visible card-hover">
   {about.map((abt) => (
    <div className='flex flex-col items-center justify-center md:flex-row '>
      <img
       src={abt.img}
       alt="About"
       className="w-90 rounded-2xl"
       />
      <div className='mt-10 md:ml-10'>
       <h2 className="text-4xl mb-6">A Bit About Me</h2>
       <p className="text-gray-400 leading-8 max-w-xl">
        {abt.desc1}
       </p>
       <p className="text-gray-400 leading-8 max-w-xl">
        {abt.desc2}
       </p>
      </div>
    </div>
   ))}
  </div>

 <div className="flex items-center gap-16 bg-(--bg-card) border-3 border-(--primary-color)/60 rounded-[40px] p-16 max-w-6xl w-full card-hover">
   {journey.map((abt) => (
    <div className='flex flex-col items-center justify-center md:flex-row '>
      <div className='mb-10 md:mr-10'>
       <h2 className="text-4xl mb-6">A Bit About Me</h2>
       <p className="text-gray-400 leading-8 max-w-xl">
        {abt.desc}
       </p>
      </div>
      <img
       src={abt.img}
       alt="About"
       className="w-90 rounded-2xl"
      />
    </div>
 ))}
</div>

 </div>
 </div>
</div>

 )
}

export default AboutPage