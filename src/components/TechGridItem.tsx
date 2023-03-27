import React from 'react'
import Image from 'next/image'

interface TechGridItemProps {
    children: React.ReactNode
}

export default function TechGridItem(props: TechGridItemProps) {
    return (
        <div className="h-16">
            {props.children}
        </div>
    )
}