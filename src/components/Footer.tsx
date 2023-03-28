import React from 'react'

export default function Footer() {
    return (
        <div className="bg-slate-800 w-full h-1/4 p-15 flex flex-row items-center justify-center">
            <div className='grid grid-cols-2 divide-x divide-slate-500 h-1/2'>
                <div className='flex items-center justify-center w-full mx-20'>
                    <p className='text-slate-500'>Contact:</p>
                </div>
                <div className="flex items-center justify-center w-full mx-10 text-slate flex-col">
                    <p className='text-slate-500'>LinkedIn: <a className="newtest">DUMMY LINKE FOR NOW</a></p>
                    <p className='text-slate-500'>GitHub: <a className="newtest">DUMMY LINKE FOR NOW</a></p>
                </div>
            </div>
        </div>
    )
}