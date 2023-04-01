import Head from 'next/head'
import React, { useState, useEffect, useRef } from 'react'
import SlideshowItem from './SlideshowItem'
import projects from '@/lib/projects'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css';

const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 1500 },
      items: 3
    },
    desktop: {
      breakpoint: { max: 1500, min: 1200 },
      items: 3
    },
    between: {
        breakpoint: { max: 1200, min: 900 },
        items: 2
    },
    tablet: {
      breakpoint: { max: 900, min: 300 },
      items: 1
    },
    mobile: {
      breakpoint: { max: 300, min: 0 },
      items: 1
    }
  };

export default function Slideshow() {
    // for image dimming: background: linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url('landingpagepic.jpg');

    // setup entries and hover effects for them
    const [index, setIndex] = useState(1)
    const decrease = () => {
        if(index==0) setIndex(projects.length-1)
        else setIndex(index-1)
    }
    const increase = () => {
        if(index==projects.length-1) setIndex(0)
        else setIndex(index+1)
    }

    const initialValue = <Carousel responsive={responsive}><div></div></Carousel>
    const carousel = useRef(initialValue);
    const lastImageIndex = projects.length - 1;

    // useEffect(() => {
    //     const autoloop = setInterval(() => {
    //     if (carousel.state.currentSlide === lastImageIndex) {
    //         carousel.goToSlide(0);
    //     } else {
    //         carousel.next();
    //     }
    //     }, 3000); // Your custom auto loop delay in ms
    //     return () => clearInterval(autoloop);
    // }, []);

    return (
        <>
            <Head>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
            </Head>
            <div className="bg-slate-800 w-full lg:h-2/3 xl:h-1/2 md:h-2/3 sm:h-2/3 w-full flex flex-col justify-center p-5 gap-5">
                <p className="text-6xl font-bold bg-gradient-to-r from-violet-400 to-indigo-500 bg-clip-text text-transparent p-4 text-center">Projects Completed</p>
                <Carousel
                    responsive={responsive}
                    additionalTransfrom={0}
                    arrows
                    autoPlaySpeed={3000}
                    centerMode={false}
                    className=""
                    containerClass="container-with-dots h-full w-full flex items-center"
                    dotListClass=""
                    draggable
                    focusOnSelect={false}
                    infinite
                    itemClass="h-full flex items-center justify-center"
                    keyBoardControl
                    minimumTouchDrag={80}
                    pauseOnHover
                    renderArrowsWhenDisabled={false}
                    renderButtonGroupOutside={false}
                    renderDotsOutside={false}
                    rewind={false}
                    rewindWithAnimation={false}
                    rtl={false}
                    shouldResetAutoplay
                    showDots={true}
                    sliderClass="h-full"
                    slidesToSlide={1}
                    swipeable
                                        >
                    {projects.map((proj, index) => (
                        // <div className='flex justify-center overflow-visible border-black border-8' key={index}>
                            <SlideshowItem proj={proj} key={index}/>
                        // </div>
                    ))}

                </Carousel>

            </div>
       </> 
    )
}

interface Rest {
    carouselState: any
}

// const ButtonGroup = ({ next, previous, goToSlide, ...rest }: { next: any, previous: any, goToSlide: any, rest: any }) => {
//     const {
//       carouselState: { currentSlide }
//     } = rest;
//     const lastImageIndex = projects.length - 1;
//     return (
//       <div className="carousel-button-group" style={{ position: "absolute" }}>
//         <button
//           onClick={() =>
//             currentSlide === 0 ? goToSlide(lastImageIndex) : previous()
//           }
//         >
//           Prev
//         </button>
//         <button
//           onClick={() =>
//             currentSlide === lastImageIndex ? goToSlide(0) : next()
//           }
//         >
//           Next
//         </button>
//       </div>
//     );
//   };