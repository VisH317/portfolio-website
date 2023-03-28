import React, { useState } from 'react'
import Image from 'next/image'
import TechGrid from './TechGrid'

export default function About() {

    const [hovered, setHovered] = useState(true)
    const onHover = () => setHovered(true)
    const offHover = () => setHovered(false)

    return (
        <div className='lg:grid lg:grid-cols-2 w-full md:flex md:flex-col sm:flex sm:flex-col'>
            <div className='w-full p-10 flex items-center flex-col gap-10' onMouseOver={onHover} onMouseOut={offHover}>
                <p className="text-6xl font-semibold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent p-4 text-center">My Technologies</p>
                <TechGrid hovered={hovered}/>
            </div> 
            <div className="w-full bg-slate-200 text-purple-100 p-10 sm:flex sm:items-center flex-col gap-10 overflow-hidden">
                <p className="text-6xl font-semibold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent p-4">About Me</p>
                <div className="grid md:grid-cols-2 lg:grid-cols-2 sm:grid-cols-1 sm:gap-10 w-full overflow-hidden">
                    <div className="px-5">
                        <p className='lg:text-lg text-slate-800 lg:leading-9 md:text-lg font-light'>hola como estas soy muy bien i need alsdfjawoeifjalsdkjflaoweihn lkjfshdflkjashdflk jsdklafjhwaeiuhf lihe flih awlelifua ilwue filuawe hfl iawu fhliawseuhfkljasd hfiu HAWElFUH flkj hlfhaweiu. </p>
                        <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-slate-700"/>
                        <p className="text-md leading-9 text-slate-700 font-light text-slate-300">broski woski i love the homies and all the bois yessir boi. Very epic time to be a live I like jpegmafia and dont feel like copy pasting lorem ipsum from the lorem ipsum site lmao. broski woski i love the homies and all the bois yessir boi. Very epic time to be a live I like jpegmafia and dont feel like copy pasting lorem ipsum from the lorem ipsum site lmao. </p>
                    </div>
                    <div className="flex justify-center items-center">
                        <div className="h-96 w-2/3 bg-slate-600 rounded-2xl"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}