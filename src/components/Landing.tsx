import React from 'react'

export default function Landing() {
    return (
        <div className='container mx-auto w-full h-2/3 bg-violet-700 flex items-center justify-center flex-col gap-5 max-w-full'>
            {/* <div className="bg-purple-100 p-5 rounded-3xl flex items-center justify-center"> */}
            <p className='text-5xl text-white font-bold'>Hello! Im Vishrut</p>
            {/* </div> */}
            <div className="w-2/5">
            <p className="text-lg text-purple-100 font-light text-center">Lorem ipsum dolor sit amet james is a funny man. Aaron is hilarious and Eshan is a literal NPC Yay. Hi I love u. Sup guys im bored hola como estas im in physics rn and i just took a precalc test! YAAYAYAYY</p>
            </div>
            <div className="flex flex-row gap-2.5">
                <input type='email' className="form-input rounded-lg border-transparent w-48 focus:w-80 duration-300 hover:drop-shadow-lg ease-in-out" placeholder="Email:"></input>
                <button type="submit" className="bg-gray-800 text-white rounded-lg p-2.5 hover:bg-gray-700 hover:drop-shadow-xl hover:-translate-y-1 duration-300 delay-75  ">Contact Me</button>
            </div>
        </div>
    )
}