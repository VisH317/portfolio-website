import React from 'react'
import TechGridItem from './TechGridItem'

interface TechGridProps {
    hovered: boolean
}

export default function TechGrid(props: TechGridProps) {
    return (
        <div className="flex items-center lg:w-full md:w-3/4 sm:w-2/3">
        <div className="grid grid-flow-row-dense place-content-center place-items-center lg:grid-cols-3 xl:grid-cols-4 place-items-center md:grid-cols-4 m-auto sm:grid-cols-2 gap-5 w-full">
            <TechGridItem grow={false} hidden={false} image="[url('/react-1.svg')]">bruh</TechGridItem>
            <TechGridItem grow={false} hidden={false} image="cpp">bruh</TechGridItem>
            <TechGridItem grow={false} hidden={false} image="python">bruh</TechGridItem>
            <TechGridItem grow={false} hidden={false} image="js">bruh</TechGridItem>
            <TechGridItem grow={false} hidden={true} image="next">bruh</TechGridItem>
            <TechGridItem grow={false} hidden={false} image="flask">bruh</TechGridItem>
            <TechGridItem grow={false} hidden={false} image="node">bruh</TechGridItem>
            <TechGridItem grow={false} hidden={false} image="go">bruh</TechGridItem>
            <TechGridItem grow={false} hidden={false} image="pytorch">bruh</TechGridItem>
        </div>
        </div>
    )
}