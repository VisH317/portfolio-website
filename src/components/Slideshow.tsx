import Head from 'next/head'
import React, { useState } from 'react'
import SlideshowItem from './SlideshowItem'
import projects from '@/lib/projects'

export default function Slideshow() {
    // for image dimming: background: linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url('landingpagepic.jpg');

    // setup entries and hover effects for them
    const [index, setIndex] = useState(1)
    const decrease = () => {
        if(index==0) setIndex(projects.length-1)
        else setIndex(index-1)
    }
    const increase = () => {
        if(index==projects.length-1) setIndex(0)
        else setIndex(index+1)
    }

    return (
        <>
            <Head>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
            </Head>
            <div className="bg-slate-800 w-full lg:h-2/3 xl:h-1/2 md:h-2/3 sm:h-2/3 w-full flex flex-col justify-center p-5 gap-5">
                <p className="text-6xl font-bold bg-gradient-to-r from-violet-400 to-indigo-500 bg-clip-text text-transparent p-4 text-center">Projects Completed</p>
                <div className="flex flex-row gap-5 h-3/4 items-center justify-center px-10 w-full">
                    <div className="w-1/12 flex justify-center"><i className="fa fa-caret-left fa-lg text-8xl text-slate-200 hover:text-slate-400 duration-300 hover:shadow-2xl" onClick={decrease}/></div>
                    <SlideshowItem proj={projects[index-1<0?projects.length-1:index-1]}/>
                    <SlideshowItem proj={projects[index]}/>
                    <SlideshowItem proj={projects[index+1>=projects.length?0:index+1]}/>
                    <div className="w-1/12 flex justify-center"><i className="fa fa-caret-right fa-lg text-8xl text-slate-200 hover:text-slate-400 duration-300 hover:shadow-2xl" onClick={increase}/></div>
                </div>
            </div>
       </> 
    )
}