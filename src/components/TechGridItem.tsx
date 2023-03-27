import React, { useState } from 'react'
import Image from 'next/image'

interface TechGridItemProps {
    children: React.ReactNode,
    grow: boolean
}

export default function TechGridItem(props: TechGridItemProps) {
    let val = ""
    if(props.grow) val=" grow"

    const [r, setR] = useState("rotateY(0deg)")
    const [b, setB] = useState("rotateY(-180deg)")

    const mouseOver = () => {
        setR("rotateY(-180deg)")
        setB("rotateY(0deg)")
    }
    const mouseOut = () => {
        setR("rotateY(0deg)")
        setB("rotateY(-180deg)")
    }

    return (
        <div onMouseOver={mouseOver} onMouseOut={mouseOut} className="w-full aspect-square overflow-hidden">
        <div className={`bg-slate-100 p-5 rounded-lg w-full aspect-square duration-300`+val} style={{transformStyle: "preserve-3d", transform:r, backfaceVisibility: 'hidden'}}>
            {props.children}
        </div>
        <div className="bg-slate-500 p-5 rounded-lg w-full aspect-square duration-300 relative -top-full" style={{transformStyle: "preserve-3d", transform:b, backfaceVisibility: 'hidden'}}></div>
        </div>
    )
}