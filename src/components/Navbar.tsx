import React from 'react'
import Link from 'next/link'

export default function Navbar() {
    return (
        <div className="flex md:container md:mx-auto px-16 bg-purple-700 w-9/12 h-16 items-center flex-row flex-auto basis-4 gap-20 justify-center text-white fixed">
            <div className='text-2xl font-bold'>VISHRUT THOUTAM</div>
            <div className='text-lg'>About</div>
            <div className='text-lg'>Technologies</div>
            <div className='text-lg'>Projects</div>
            <div className='text-lg'>Contacts</div>
        </div>
    )
}