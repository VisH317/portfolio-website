import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import Navbar from '@/components/Navbar'
import Landing from '@/components/Landing'
import About from '@/components/About'
import Slideshow from '@/components/Slideshow'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
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
        <Navbar/>
        <Landing/>
        <Slideshow/>
        <About/>
        <Footer/>
      </div>
    </>
  )
}
