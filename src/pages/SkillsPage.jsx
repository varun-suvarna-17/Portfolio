import react from 'react';
import { RiReactjsLine } from "react-icons/ri";

import { FiFigma } from "react-icons/fi";
import { SiMongodb } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { IoLogoJavascript } from "react-icons/io";
import { FaPython } from "react-icons/fa";
import { FaJava } from "react-icons/fa6";
import { FaNodeJs } from "react-icons/fa";
import { FaReact } from "react-icons/fa6";
import { TbMarquee } from 'react-icons/tb';

const Skills_1 = [
    {icon: <FaReact size={40} className='text-gray-200' />, name: "ReactJS"},
    {icon: <FaNodeJs size={40} className='text-gray-200' />, name: "NodeJS"},
    {icon: <FaJava size={40} className='text-gray-200' />, name: "Java"},

];

const Skills_2 = [
    {icon: <FaPython size={40} className='text-gray-200' />, name: "Python"},
    {icon: <IoLogoJavascript size={40} className='text-gray-200' />, name: "JavaScript"},
    {icon: <RiTailwindCssFill size={40} className='text-gray-200' />, name: "TailwindCSS"},
];

const Skills_3 = [
    {icon: <SiMongodb size={40} className='text-gray-200' />, name: "MongoDB"},
    {icon: <FiFigma size={40} className='text-gray-200' />, name: "Figma"},
];

const SkillsPage = () => {
    return(
    <div id='skills' className='h-screen w-full relative'>
        <div className='absolute'>
            <div className=' w-200 h-140 m-8 mt-25 lg:ml-40 flex'>
                <div className='flex flex-col gap-5 w-40 h-130'>
                    {Skills_1.map((skill) => (
                        <div className='flex flex-col gap-2 items-center  justify-center bg-(--bg-card) w-30 h-30  border-2 border-(--primary-color)/60 rounded-xl '>
                            {skill.icon}
                            <span className='text-gray-00'>{skill.name}</span>
                        </div>
                    ))}
                </div>
                <div className='flex flex-col gap-5 w-40 h-130 mt-20'>
                    {Skills_2.map((skill) => (
                        <div className='flex flex-col gap-2 items-center  justify-center bg-(--bg-card) w-30 h-30  border-2 border-(--primary-color)/60 rounded-xl  '>
                            {skill.icon}
                            <span className='text-gray-00'>{skill.name}</span>
                        </div>
                    ))}
                </div>
                <div className='flex flex-col gap-5 w-40 h-100 mt-40'>
                    {Skills_3.map((skill) => (
                        <div 
                        className='flex flex-col gap-2 items-center justify-center 
                        bg-(--bg-card) w-30 h-30  
                         border-2 border-(--primary-color)/60 rounded-xl '>
                            {skill.icon}
                            <span className='text-gray-00'>{skill.name}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
        <div className="relative h-screen overflow-hidden">
            <RiReactjsLine
                className="absolute top-[-10%] right-[-15%] text-[900px] rotate-12 text-white/5"/>
        </div>
   </div>
    );
}

export default SkillsPage;