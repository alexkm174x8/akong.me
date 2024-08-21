'use client'
import React from 'react'
import { WavyBackground } from './ui/wavy-background'
import { TypewriterEffect } from './ui/typewritert-effect'

const Hero = () => {
    const words = [
        {
          text: "Alejandro's",
          className: "text-white text-6xl"
        },
        {
          text: "Portfolio.",
          className: "text-white text-6xl"
        },
      ];
      return (
        <div className='pb-2' id='dashboard'>
          <WavyBackground className="max-w-4xl mx-auto pb-40">
                <div className="flex flex-col items-center justify-center h-[40rem] sm:text-xl">
                  <p className="text-white text-base mb-10 text-center">
                      A Computer Science & Technology student based in Mexico.
                  </p>
                <TypewriterEffect words={words} />
              </div>
          </WavyBackground>
        </div>
      );
    }
{/* <MacbookScrollDemo/> */}
        
export default Hero
