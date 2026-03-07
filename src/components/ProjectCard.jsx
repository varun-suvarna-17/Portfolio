import { Target } from 'lucide-react'
import React from 'react'



const ProjectCard = ({content}) => {
  return (
   <div 
   className='bg-(--bg-card) flex flex-col shrink-0 w-90 ml-4 min-h-135 p-2 rounded-4xl shadow-lg shadow-#000000 card-hover' >
        <div className='items-centerw-full  h-[60%] rounded-t-4xl rounded-b-2xl overflow-hidden'>
           <img 
           className='w-full h-full object-cover'
           src={content.image} alt={content.title} />
        </div>
        <div className="m-3">
            <h2 className='text-(--primary-color) mb-3'>{content.title}</h2>
            <h6 className='text-white/70 leading-relaxed'>{content.description}</h6>
        </div>
        <div className='flex justify-end gap-3 mt-5 mb-3 mr-3'>
            {content.live_link != "#" && (
                <button className='btn-primary'><a href={content.live_link} target="_blank" >Live Demo</a></button>
            )}
            <button className='btn-secondary '><a href={content.github_link} target="_blank" > GitHub  </a></button>
        </div>
   </div>
  )
}

export default ProjectCard