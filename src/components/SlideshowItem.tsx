import React, { useState } from 'react'
import { Project } from '@/lib/projects'

interface SlideshowItemProps {
    proj: Project
    invis: boolean
}

export default function SlideshowItem(props: SlideshowItemProps) {
    const { proj, invis } = props
    const [desc, setDesc] = useState(false)
    const onDesc = () => setDesc(true)
    const offDesc = () => setDesc(false)

    let technologiesStr: string = String(proj.technologies[0])
    for(let i = 1;i<proj.technologies.length;i++) technologiesStr+=" \u00B7 " + String(proj.technologies[i])

    return (
        <div className={`lg:w-1/3 md:w-1/2 sm:w-2/3 flex justify-start items-center h-5/6 rounded-2xl bg-slate-600 duration-300 group relative hover:shadow-2xl ${invis?"md:hidden sm:hidden":""}`}>
            <p className="xl:text-7xl lg:text-5xl  mx-10 text-center group-hover:hidden">{proj.name}</p>
            <div className={`w-full h-full flex justify-start px-10 py-5 rounded-2xl flex-col xl:gap-5 lg:gap-2 md: gap-4 transition ease-in duration-300 opacity-0 group-hover:bg-slate-700 group-hover:opacity-100 absolute top-0 left-0`}>
                <p className="xl:text-6xl lg:text-4xl">{proj.name}</p>
                <p className="xl:text-xl lg:text-md font-light">{proj.desc}</p>
                <hr className="h-px my-0 bg-slate-800 border-0 dark:bg-slate-800"/>
                <p className="text-base font-semibold">{technologiesStr}</p>
                <p className="object-contain text-xl font-semibold test overflow-hidden">Project URL: {proj.url}</p>
            </div>
        </div>
    )
}