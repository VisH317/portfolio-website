import React, { useState } from 'react'
import Image from 'next/image'
import TechGrid from './TechGrid'
import { motion } from 'framer-motion'

export default function About() {

    const [hovered, setHovered] = useState(true)
    const onHover = () => setHovered(true)
    const offHover = () => setHovered(false)


    return (
        <div className='lg:flex lg:flex-row w-full md:flex md:flex-col xl:h-[60%] lg:h-[125%] sm:flex sm:flex-col'>
            <div className='lg:hover:w-[102%] xl:hover:w-[102%] w-full p-10 flex h-full items-center flex-col gap-10 duration-300' onMouseOver={onHover} onMouseOut={offHover}>
                <p className="text-6xl font-semibold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent p-4 text-center">My Technologies</p>
                <TechGrid hovered={hovered}/>
            </div> 
            <div className="lg:hover:w-[102%] xl:hover:w-[102%] flex w-full bg-slate-200 text-purple-100 p-10 sm:flex items-center sm:items-center flex-col gap-10 duration-300">
                <p className="text-6xl font-semibold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent p-4">About Me</p>
                <div className="grid md:grid-cols-2 lg:grid-cols-2 sm:grid-cols-1 sm:gap-10 w-full h-2/3">
                    <div className="px-5">
                        <p className='lg:text-lg text-slate-800 lg:leading-9 md:text-lg font-light'>I&#39;m a sophomore at High Technology High School. I started coding at the age of 7 and began with web development languages. However, I am now proficient in machine learning, backend development, and low level development along with frontend. I&#39;m always curious to find new opportunities and learn new concepts about programming.</p>
                        <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-slate-700"/>
                        <p className="text-md leading-9 text-slate-700 font-light text-slate-300">When I first started learning programming when I was in elementary school, it didn&#39;t seem that interesting to me, but I&#39;ve gained more and more appreciation for it over time. I found that new technologies are constantly coming up in computer science, whether it be groundbreaking inventions like ChatGPT or something simple like a new frontend framework. I&#39;m determined to learn about all the facets of programming and to explore all of its possibilities and applications.</p>
                    </div>
                    <div className="flex justify-center items-center overflow-visible">
                        <div  className=" overflow-hidden h-96 w-2/3 bg-slate-400 rounded-2xl box-border hover:scale-105 hover:drop-shadow-xl hover:-translate-y-3 duration-300 relative">
                            <Image src="/me.jpg" fill alt="me" className="absolute top-0 left-0 w-full h-full"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}