import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import Navbar from '@/components/Navbar'
import Landing from '@/components/Landing'
import About from '@/components/About'
import Slideshow from '@/components/Slideshow'
import Footer from '@/components/Footer'
import React, { useRef } from 'react'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  const about = useRef<HTMLDivElement>(null)
  const project = useRef<HTMLDivElement>(null)
  const landing = useRef<HTMLDivElement>(null)

  const aboutScroll = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault()
    e.stopPropagation()
    about.current?.lastElementChild?.scrollIntoView({ block: "start", behavior: "smooth" })
  }
  const projectScroll = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault()
    e.stopPropagation()
    console.log(project)
    project.current?.scrollIntoView({ block: "center", behavior: "smooth" })
  }
  const landingScroll = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault()
    e.stopPropagation()
    landing.current?.scrollIntoView({ block: "start", behavior: "smooth" })
  }

  return (
    <>
      <Head>
        <title>Vishrut's Portfolio</title>
        <meta name="description" content="Vishrut's Portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/icon.jpg" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0"/>  
      </Head>
      <div className="container mx-auto max-w-screen h-screen max-w-full">
        <Navbar aboutRef={aboutScroll} projectRef={projectScroll} landingRef={landingScroll}/>
        <Landing lref={landing}/>
        <Slideshow sref={project}/>
        <About aref={about}/>
        <Footer/>
      </div>
    </>
  )
}
