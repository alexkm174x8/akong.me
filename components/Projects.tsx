"use client";
import React from "react";
import Card from "./ui/card"


const Projects = () => {
  return (
    <div className="h-full w-full">
        <p className="text-center text-white font-bold text-5xl mb-7">
            Recent Projects.
        </p>
        <div className="h-full w-full bg-black bg-grid-white/[0.2] relative flex items-center justify-center">
        
        {/* Radial gradient for the container to give a faded look */}
            <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_1%,black)]">
            </div>
            
            <div className=" flex flex-col lg:flex-row lg:space-x-32 px-8 justify-center mb-30">
                <Card title="Topos FC Website" description="Worked with Topos FC association to implement new functions to their site" img="/topos.png" link="https://github.com/alexkm174x8/topos-fc"/>

                <Card title="Chase: Take a chance" description="Built a simple game, where a spider comes for you while you need to collect some coins to save yourself " img="/chase.png" link="https://github.com/CharismaticTopHat/chase-take-a-chance"/>
            </div>
        </div>
    </div>
  )
}

export default Projects
