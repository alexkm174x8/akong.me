'use client'
import React from 'react'
import { WavyBackground } from './ui/wavy-background'
import { MacbookScrollDemo } from './ui/MacbookScrollDemo'
import { TypewriterEffect, TypewriterEffectSmooth } from './ui/typewritert-effect'

const Hero = () => {
    const words = [
        {
          text: "Alejandro's",
          className: "text-white text-6xl"
        },
        {
          text: "Portafolio.",
          className: "text-white text-6xl"
        },
      ];
      return (
        <WavyBackground className="max-w-4xl mx-auto pb-40">
            <div className="flex flex-col items-center justify-center h-[40rem] sm:text-xl">
            <p className="text-white text-base mb-10">
                A student of Computer Science & Technology based in Mexico.
            </p>
            <TypewriterEffect words={words} />
            </div>
        </WavyBackground>
      );
    }
{/* <MacbookScrollDemo/> */}
        
export default Hero
