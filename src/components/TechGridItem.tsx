import React, { useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

interface TechGridItemProps {
    children: React.ReactNode,
    grow: boolean,
    hidden: boolean,
    image: string
}

export default function TechGridItem(props: TechGridItemProps) {
    let val = ""
    if(props.grow) val=" grow"
    //const { img } = props

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
        <div onMouseOver={mouseOver} onMouseOut={mouseOut} className={`w-full aspect-square overflow-hidden  drop-shadow-xl ${props.hidden ? "sm:hidden md:hidden lg:block xl:hidden" : ""}`}>
            <div className={`bg-center bg-contain bg-no-repeat p-20 rounded-lg w-full aspect-square overflow-hidden duration-300`+val} style={{transformStyle: "preserve-3d", transform:r, backfaceVisibility: 'hidden'}}>
                <Image src={`/${props.image}`} fill style={{objectFit: "contain"}} alt={props.image}/>
            </div>
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="bg-slate-600 h-full p-5 rounded-lg w-full aspect-square duration-300 relative -top-full flex flex-col justify-center items-center" style={{transformStyle: "preserve-3d", transform:b, backfaceVisibility: 'hidden'}}>
                {props.children}
            </motion.div>
        </div>
    )
}