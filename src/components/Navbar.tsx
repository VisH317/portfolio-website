import React from 'react'
import Link from 'next/link'

export default function Navbar() {
    return (
        <div className="flex container mx-auto px-16 bg-purple-700 w-full h-16 items-center flex-row flex-auto basis-4 gap-20 justify-center text-white fixed max-w-full z-50">
            <div className='text-2xl rounded-b-xl font-bold hover:bg-slate-200 hover:bg-opacity-40 h-full flex items-center px-5 duration-150 hover:cursor-pointer'>VISHRUT THOUTAM</div>
            <div className='text-lg rounded-b-xl px-5 hover:bg-slate-200 hover:bg-opacity-40 h-full flex items-center duration-150 hover:cursor-pointer'>About</div>
            <div className='lg:text-lg md:text-lg rounded-b-xl sm:text-md px-5 hover:bg-slate-200 hover:bg-opacity-40 h-full flex items-center duration-150 hover:cursor-pointer'>Technologies</div>
            <div className='lg:text-lg md:text-lg sm:text-md rounded-b-xl md:flex sm:hidden px-5 hover:bg-slate-200 hover:bg-opacity-40 h-full flex items-center duration-150 hover:cursor-pointer'>Projects</div>
        </div>
    )
}