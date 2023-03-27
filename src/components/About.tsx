import React, { useState } from 'react'
import Image from 'next/image'

export default function About() {
    return (
        <div className='grid grid-cols-2 w-full'>
            <div className='w-full p-10 h-96 flex justify-center'>
                <p className="text-4xl font-semibold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">My Technologies</p>
            </div> 
            <div className="w-full bg-gray-800 text-purple-100 p-10 flex justify-center">
            <p className="text-4xl font-semibold bg-gradient-to-r from-purple-400 to-indigo-500 bg-clip-text text-transparent">About Me</p>
            </div>
        </div>
    )
}