import {useRef} from 'react'
import ProjectCard from '../components/ProjectCard'
import Projects from '/data/Projects'
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";

const ProjectPage = () => {
  const scrollRef = useRef(null);
  const scrollLeft = () => {
    scrollRef.current.scrollBy({
      left: -200,
      behavior: 'smooth',
    });
  }
  const scrollRight = () => {
    scrollRef.current.scrollBy({
      left: 200,
      behavior: 'smooth',
    });
  }
  return (
    <div id='projects' className='relative min-h-screen'>
      <div className='text-center mt-30'>
       <h1>PROJECTS FROM THE <span className='text-(--primary-color)'>CODESPACE</span></h1>
      </div>
      <div  ref={scrollRef} className='flex overflow-x-auto no-scrollbar py-10 px-6 gap-10 lg:justify-center mx-6'>
         {Projects.map((project) => (
          <ProjectCard key={project.id} content={project}/>
         ))}
      </div>
      <div className='flex h-15 gap-3 justify-end m-6'>
          <button onClick={scrollLeft} className='btn-primary rounded-full h-15 w-15'><FaArrowLeft size={30}/></button>
          <button onClick={scrollRight} className='btn-reverse rounded-full h-15 w-15'><FaArrowRight size={30} /> </button>
      </div>
    </div>
  )
}

export default ProjectPage