import React from 'react'
import Button from './Button'
import { FaLocationArrow } from 'react-icons/fa6'

const InfiniteCarousel = () => {
  return (
    <div className='group relative w-110 overflow-hidden  mt-10 '>
      <div className='w-10 h-80 fixed z-10 left-0 bg-linear-to-l from-transparent to-rose-200 '></div>
      <div className='w-10 h-80 fixed z-10 right-0 bg-linear-to-r from-transparent to-rose-200 '></div>
      <div className='flex gap-5 
 w-max animate-[scroll_30s_linear_infinite] animate-scroll group-hover:[animation-play-state:paused]'>
        <div className='relative'>
        <img className='block flex-none h-75 bg-black items-center justify-center rounded-xl mx-0 my-1'
         src="/img/project 2.jpeg" alt=""  />
         <Button href={""} rightIcon={<FaLocationArrow></FaLocationArrow>} containerClass={"absolute bottom-5 right-8"}  title={"Visit Site"}></Button>
        </div>
        <div className="relative">
        <img className='flex flex-none h-75  bg-black items-center justify-center rounded-xl mx-0 my-1'
         src="/img/first project img.jpeg" alt="" />
         <Button href={"https://dev-kishore04.github.io/Projects/"} rightIcon={<FaLocationArrow></FaLocationArrow>} containerClass={"absolute bottom-5 right-8"} title={"Visit Site"}></Button>
        </div>
        <div className="relative">
        <img className='flex flex-none h-75  bg-black items-center justify-center rounded-xl mx-0 my-1'
         src="/img/kishore.jpeg" alt="" />
         <Button href={""} rightIcon={<FaLocationArrow></FaLocationArrow>} containerClass={"absolute bottom-5 right-8"} title={"Visit Site"}></Button>
        </div>
        <div className="relative">
        <img className='flex flex-none h-75  bg-black items-center justify-center rounded-xl mx-0 my-1'
         src="/img/Screenshot_10-2-2026_161649_localhost.jpeg" alt="" />
         <Button href={""} rightIcon={<FaLocationArrow></FaLocationArrow>} containerClass={"absolute bottom-5 right-8"} title={"Visit Site"}></Button>
        </div>
        
        {/* Duplicated items */}

        <div className='relative'>
        <img className='block flex-none h-75 bg-black items-center justify-center rounded-xl mx-0 my-1'
         src="/img/project 2.jpeg" alt=""  />
         <Button href={""} rightIcon={<FaLocationArrow></FaLocationArrow>} containerClass={"absolute bottom-5 right-8"}  title={"Visit Site"}></Button>
        </div>
        <div className="relative">
        <img className='flex flex-none h-75  bg-black items-center justify-center rounded-xl mx-0 my-1'
         src="/img/first project img.jpeg" alt="" />
         <Button href={"https://dev-kishore04.github.io/Projects/"} rightIcon={<FaLocationArrow></FaLocationArrow>} containerClass={"absolute bottom-5 right-8"} title={"Visit Site"}></Button>
        </div>
        <div className="relative">
        <img className='flex flex-none h-75  bg-black items-center justify-center rounded-xl mx-0 my-1'
         src="/img/kishore.jpeg" alt="" />
         <Button href={""} rightIcon={<FaLocationArrow></FaLocationArrow>} containerClass={"absolute bottom-5 right-8"} title={"Visit Site"}></Button>
        </div>
        <div className="relative">
        <img className='flex flex-none h-75 pr-5 bg-black items-center justify-center rounded-xl mx-0 my-1'
         src="/img/Screenshot_10-2-2026_161649_localhost.jpeg" alt="" />
         <Button href={""}rightIcon={<FaLocationArrow></FaLocationArrow>} containerClass={"absolute bottom-5 right-8"} title={"Visit Site"}></Button>
        </div>
        
      </div>
    </div>
  )
}

export default InfiniteCarousel