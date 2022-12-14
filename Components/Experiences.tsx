import React from 'react'
import {motion} from "framer-motion";
import ExperienceCard from './ExperienceCard';
import { Experience } from '../typings';
type Props = {
  experiences:Experience[];
}

export default function Experiences({experiences}: Props) {
  return (
    <motion.div
    initial={{opacity:0}}
    whileInView={{opacity:1}}
    transition={{duration:1.5}}
  //   className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center"
  
  className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
   <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
      Personal Project
    </h3>
  
    <div className="w-full flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory
      scrollbar scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80 ">
       {experiences?.map((experience)=>(
         <ExperienceCard key={experience._id} experience={experience}/>

       ))}
        
    </div>
    
    </motion.div>
  )
}