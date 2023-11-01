import React from 'react'
import { WiAlien } from "react-icons/wi";
import WorkExperience from './WorkExperience';

const Container = () => {
  return (
    <section id='home' className='max-w-4xl mx-auto p-4'>
        <div className='grid grid-cols-1 md:grid-cols-2 justify-center'>
        <div className='w-full justify-start flex flex-col items-center'>
        <div className=''>
        
        <h4 className='text-white'>Hello! I Am <span className='text-violet-600'>Gabriel Gonzalez</span></h4>
        </div>
        
        <div className='relative h-34'>
        <img src="/img/Arrow.png" alt="" className='mx-auto' />
        </div>
        <div className='items-center justify-center absolute'>
            <img className='h-full' src="/img/Gradient.png" alt="" />
        </div>
       <div className='relative'>
        <img className='h-[200px] mx-auto' src="/img/icon1.png" alt="" />
       </div>      
      </div>
      <div className='text-white p-10'>
            <h5><u>A Designer Who</u></h5>
       
        <div className=''>
            <h2 className='text-3xl'>Judges a book</h2>
            <h2 className='text-3xl'>by its<span className='border rounded-full rotate-[-4.74deg]'><span className='text-violet-600 '> cover</span>... </span></h2>
        </div>
        <div>
            <h6 className='text-[11px] pt-2'>Because if the cover does not impress you what else can?</h6>
        </div>
      </div>
      </div>

      <div className='text-white p-10'>
        <div>
            <h2 className='text-3xl'>
                I'm a system 
                Engineer.|
            </h2>
        </div>
        <div className='pt-4'>
            <h4>Currently, i'm a system Engineer at planet,</h4>
        </div>
        <div className='pt-4'>
            <h3>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus error ad voluptatibus ducimus sapiente eaque officiis sint quasi aliquam maiores iste sed beatae harum quia tempora magnam odit, nobis numquam!</h3>
        </div>
        <WorkExperience />

      </div>
    </section>
    
  )
}

export default Container
