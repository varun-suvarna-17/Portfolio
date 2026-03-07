import React from 'react'
import contacts from '/data/Contact'
import { FaDownload } from "react-icons/fa6";

const ContactPage = () => {
  return (
    <div id='contact' className='min-h-screen py-10'>
      {console.log(contacts)}
        <div className=' w-full h-full relative flex flex-col items-center gap-20'>
            <h1 className='text-center  pt-20'>
                <span className='text-(--primary-color)'>LET’S</span> CONNECT
            </h1>
            <div className='bg-[#1E1E1E] drop-shadow-black/50 drop-shadow-lg mx-4 w-[calc(100%-2rem)] max-w-[32.5rem] md:w-130 h-auto rounded-4xl flex flex-col items-center'>
                <div className='w-55 h-55 bg-[#1E1E1E] drop-shadow-black/50 drop-shadow-lg  rounded-full -mt-25 flex items-center justify-center'>
                    <div className='w-50 h-50 overflow-hidden rounded-full'>
                       <img src="/photos/Varun.jpg" alt="me" className='object-cover' />
                    </div>
                </div>
                <div className='m-10 md:mx-15 text-white/60'>
                    <h5 className='leading-8'>
                        Have an idea, a project, or just want to talk   tech or design?
                    </h5>
                    <h5 className='leading-8'>
                        I’m always open to conversations, collaborations, and new opportunities.
                    </h5>
                </div>
                <div className='w-full h-25 py-20 -mt-10 flex overflow-x-auto no-scrollbar overflow-y-hidden pl-10 min-[450px]:pl-0 gap-5 justify-center items-center relative '>
                          {contacts.map((contact, index) => (
                            
                            <button 
                            key={index}
                            className='btn-secondary h-20 w-20 rounded-full flex justify-center items-center card-hover hover:-translate-y-1'>
                              <a href={contact.link} target="_blank" rel="noopener noreferrer">
                                {contact.icon}
                              </a>
                           </button>
                          ))}
                </div>
                <button className='btn-primary my-5 flex gap-3 items-center card-hover hover:-translate-y-1 relative'>
                    Download CV
                    <FaDownload size={20} />
                </button>
            </div>
        </div>
    </div>
  )
}

export default ContactPage
