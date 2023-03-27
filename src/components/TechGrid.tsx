import React from 'react'
import TechGridItem from './TechGridItem'

interface TechGridProps {
    hovered: boolean
}

export default function TechGrid(props: TechGridProps) {
    return (
        <div className="grid grid-cols-4 gap-5 w-full">
            <TechGridItem grow={false}>bruh</TechGridItem>
            <TechGridItem grow={false}>bruh</TechGridItem>
            <TechGridItem grow={false}>bruh</TechGridItem>
            <TechGridItem grow={false}>bruh</TechGridItem>
            <TechGridItem grow={false}>bruh</TechGridItem>
            <TechGridItem grow={false}>bruh</TechGridItem>
            <TechGridItem grow={false}>bruh</TechGridItem>
            <TechGridItem grow={false}>bruh</TechGridItem>
        </div>
    )
}