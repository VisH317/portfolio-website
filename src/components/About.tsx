import React, { useState } from 'react'
import Image from 'next/image'
import TechGrid from './TechGrid'
import { motion } from 'framer-motion'

export default function About() {

    const [hovered, setHovered] = useState(true)
    const onHover = () => setHovered(true)
    const offHover = () => setHovered(false)


    return (
        <motion.div className='lg:flex lg:flex-row w-full md:flex md:flex-col xl:h-[60%] lg:h-[125%] sm:flex sm:flex-col' variants={{show: {transition: {staggerChildren: 1}}}}>
            <motion.div className='lg:hover:w-[120%] xl:hover:w-[120%] w-full p-10 flex h-full items-center flex-col gap-10 duration-300' onMouseOver={onHover} onMouseOut={offHover}>
                <p className="text-6xl font-semibold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent p-4 text-center">My Technologies</p>
                <TechGrid hovered={hovered}/>
            </motion.div> 
            <motion.div className="lg:hover:w-[120%] xl:hover:w-[120%] flex w-full bg-slate-200 text-purple-100 p-10 sm:flex items-center sm:items-center flex-col gap-10 duration-300">
                <p className="text-6xl font-semibold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent p-4">About Me</p>
                <motion.div className="grid md:grid-cols-2 lg:grid-cols-2 sm:grid-cols-1 sm:gap-10 w-full h-2/3">
                    <motion.div className="px-5">
                        <p className='lg:text-lg text-slate-800 lg:leading-9 md:text-lg font-light'>hola como estas soy muy bien i need alsdfjawoeifjalsdkjflaoweihn lkjfshdflkjashdflk jsdklafjhwaeiuhf lihe flih awlelifua ilwue filuawe hfl iawu fhliawseuhfkljasd hfiu HAWElFUH flkj hlfhaweiu. </p>
                        <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-slate-700"/>
                        <p className="text-md leading-9 text-slate-700 font-light text-slate-300">broski woski i love the homies and all the bois yessir boi. Very epic time to be a live I like jpegmafia and dont feel like copy pasting lorem ipsum from the lorem ipsum site lmao. broski woski i love the homies and all the bois yessir boi. Very epic time to be a live I like jpegmafia and dont feel like copy pasting lorem ipsum from the lorem ipsum site lmao. </p>
                    </motion.div>
                    <motion.div className="flex justify-center items-center overflow-visible">
                        <motion.div transition={{ type: "spring", stiffness: 100 }} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{once: false}} className="h-96 w-2/3 bg-slate-400 rounded-2xl box-border hover:scale-105 hover:drop-shadow-xl hover:-translate-y-3 duration-300 delay-75"></motion.div>
                    </motion.div>
                </motion.div>
            </motion.div>
        </motion.div>
    )
}