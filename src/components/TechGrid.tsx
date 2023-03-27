import React from 'react'
import TechGridItem from './TechGridItem'

interface TechGridProps {
    hovered: boolean
}

export default function TechGrid(props: TechGridProps) {
    return props.hovered ? (
        <div className="grid grid-cols-4 gap-4">
            <TechGridItem>bruh</TechGridItem>
            <TechGridItem>bruh</TechGridItem>
            <TechGridItem>bruh</TechGridItem>
            <TechGridItem>bruh</TechGridItem>
            <TechGridItem>bruh</TechGridItem>
            <TechGridItem>bruh</TechGridItem>
            <TechGridItem>bruh</TechGridItem>
            <TechGridItem>bruh</TechGridItem>
        </div>
    ) : (
        <div className="">
            
        </div>
    )
}