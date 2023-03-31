import React, { useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

interface TechGridItemProps {
    children: React.ReactNode,
    grow: boolean,
    hidden: boolean,
    //img: string
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
        <motion.div variants={{show: {transition: {staggerChildren: 1}}}} onMouseOver={mouseOver} onMouseOut={mouseOut} className={`w-full aspect-square overflow-hidden ${props.hidden ? "sm:hidden md:hidden lg:block xl:hidden" : ""}`}>
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className={`bg-slate-100 p-5 rounded-lg w-full aspect-square duration-300`+val} style={{transformStyle: "preserve-3d", transform:r, backfaceVisibility: 'hidden'}}>
                {props.children}
            </motion.div>
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="bg-slate-500 p-5 rounded-lg w-full aspect-square duration-300 relative -top-full" style={{transformStyle: "preserve-3d", transform:b, backfaceVisibility: 'hidden'}}></div>
        </motion.div>
    )
}