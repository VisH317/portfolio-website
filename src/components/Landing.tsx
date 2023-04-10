import React from 'react'

interface LandingProps {
    lref: React.Ref<HTMLDivElement>
}

export default function Landing(props: LandingProps) {
    return (
        <div ref={props.lref} className='container mx-auto w-full h-3/4 bg-purple-700 flex items-center justify-center sm:py-20 flex-col gap-5 max-w-full'>
            {/* <div className="bg-purple-100 p-5 rounded-3xl flex items-center justify-center"> */}
            <div className="sm:h-32 md:hidden lg:hidden xl:hidden"></div>
            <p className='text-5xl text-white text-center font-bold'>I&#39;m Vishrut! A Software Developer</p>
            {/* </div> */}
            <div className="w-2/6">
            <p className="text-lg text-purple-100 font-light text-center">I&#39;m a software developer with experience in frontend development, backend development, low level development (C/C++), and AI/ML</p>
            </div>
            <div className="flex flex-row gap-2.5">
                <input type='email' className="form-input rounded-lg border-transparent w-48 focus:w-80 duration-300 hover:drop-shadow-lg ease-in-out" placeholder="Email:"></input>
                <button type="submit"
                    className="bg-gray-800 text-white rounded-lg p-2.5 hover:bg-gray-700 hover:drop-shadow-xl hover:-translate-y-1 duration-300 delay-75"
                    onClick={() => window.location.href = 'mailto:vt201916384@gmail.com'}                    
                    >
                        Contact Me
                </button>
            </div>
        </div>
    )
}