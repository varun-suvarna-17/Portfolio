import React from 'react'
import { FiFigma } from "react-icons/fi";
import { SiMongodb } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { IoLogoJavascript } from "react-icons/io";
import { FaPython } from "react-icons/fa";
import { FaJava } from "react-icons/fa6";
import { FaNodeJs } from "react-icons/fa";
import { FaReact } from "react-icons/fa6";

const Skills = [
    {icon: <FaReact size={40} className='text-gray-200' />, name: "ReactJS"},
    {icon: <FaNodeJs size={40} className='text-gray-200' />, name: "NodeJS"},
    {icon: <FaJava size={40} className='text-gray-200' />, name: "Java"},
    {icon: <FaPython size={40} className='text-gray-200' />, name: "Python"},
    {icon: <IoLogoJavascript size={40} className='text-gray-200' />, name: "JavaScript"},
    {icon: <RiTailwindCssFill size={40} className='text-gray-200' />, name: "TailwindCSS"},
    {icon: <SiMongodb size={40} className='text-gray-200' />, name: "MongoDB"},
    {icon: <FiFigma size={40} className='text-gray-200' />, name: "Figma"},
];


const Marq = () => {
  return (
<div className="marq w-full h-20 bg-gray-700/50 overflow-hidden">
    <div className='marquee-track h-full whitespace-nowrap'>
        {[0, 1].map((groupIndex) => (
          <div key={groupIndex} className='marquee-group flex items-center gap-10 h-full shrink-0'>
            {Skills.map((skill) => (
              <div key={`${groupIndex}-${skill.name}`} className='flex gap-2 items-center shrink-0'>
                  {skill.icon}
                  <span className='text-gray-00'>{skill.name}</span>
              </div>
            ))}
          </div>
        ))}
    </div>
</div>
  )
}

export default Marq
