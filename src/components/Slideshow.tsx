import React from 'react'

export default function Slideshow() {
    // for image dimming: background: linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url('landingpagepic.jpg');

    // setup entries and hover effects for them

    return (
        <div className="bg-slate-200 w-full h-1/2 flex flex-col justify-center p-5 gap-5">
            <p className="text-6xl font-bold bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent p-4 text-center">Projects Completed</p>
            <div className="flex flex-row gap-5 h-3/4 items-center px-10">
                <div className="w-1/4 flex justify-center bg-slate-400 h-3/4 rounded-2xl hover:bg-slate-600 duration-300">1</div>
                <div className="w-1/12 flex justify-center">left</div>
                <div className="w-1/3 flex justify-center bg-slate-400 h-full rounded-2xl hover:bg-slate-600 duration-300">1</div>
                <div className="w-1/12 flex justify-center">right</div>
                <div className="w-1/4 flex justify-center bg-slate-400 rounded-2xl h-3/4 hover:bg-slate-600 duration-300">1</div>
            </div>
        </div>
    )
}