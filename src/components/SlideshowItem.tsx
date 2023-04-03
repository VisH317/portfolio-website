import React, { useState } from 'react'
import { Project } from '@/lib/projects'
import { motion } from 'framer-motion'
import Image from 'next/image'

interface SlideshowItemProps {
    proj: Project
}

export default function SlideshowItem(props: SlideshowItemProps) {
    const { proj } = props
    const [desc, setDesc] = useState(false)
    const onDesc = () => setDesc(true)
    const offDesc = () => setDesc(false)

    let technologiesStr: string = String(proj.technologies[0])
    for(let i = 1;i<proj.technologies.length;i++) technologiesStr+=" \u00B7 " + String(proj.technologies[i])

    return (
        <motion.div className={`lg:w-10/12 md:w-10/12 sm:w-2/3 flex justify-start items-center h-5/6 rounded-2xl bg-slate-600 duration-300 group relative hover:shadow-2xl overflow-hidden`}>
            <Image src={`/${proj.image}`} fill className="absolute w-full h-full top-0 left-0 z-0" alt={proj.image}/>
            <div className="absolute top-0 left-0 z-10 bg-slate-800 opacity-50 z-10 w-full h-full"></div>
            <p className="xl:text-7xl lg:text-5xl  mx-10 text-transparent bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text group-hover:hidden w-full text-center z-10">{proj.name}</p>
            <motion.div className={`w-full h-full flex justify-start px-10 py-10 rounded-2xl flex-col xl:gap-5 lg:gap-4 md:gap-4 justify-center sm:gap-1 transition ease-in duration-300 opacity-0 group-hover:bg-slate-500 group-hover:opacity-100 absolute top-0 left-0`}>
                <p className="xl:text-4xl lg:text-4xl">{proj.name}</p>
                <p className="xl:text-md lg:text-md sm:text-sm font-light">{proj.desc}</p>
                <hr className="h-px my-0 bg-slate-800 border-0 dark:bg-slate-800"/>
                <p className="text-base font-semibold">{technologiesStr}</p>
                {/* <p className="object-contain text-xl font-semibold test overflow-hidden hover:cursor-pointer">Project URL: {proj.name}</p> */}
            </motion.div>
        </motion.div>
    )
}