"use client";
import React from "react";
import Card from "./ui/card"
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalTrigger,
} from "@/components/ui/animated-modal";
import Image from "next/image";
import { motion } from "framer-motion";


const Projects = () => {
  return (
    <div className="h-[100%] w-full" id='projects'>
        <p className="text-center text-white font-bold text-5xl mb-7">
            Recent Projects.
        </p>
        <div className="h-full w-full bg-black bg-grid-white/[0.2] relative flex items-center justify-center">
        
        {/* Radial gradient for the container to give a faded look */}
            <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_1%,black)]">
            </div>
            
            <div className="flex flex-col">
                <div className="flex flex-col lg:flex-row lg:space-x-32 px-8 justify-center">
                    <Card title="Tentzo App" description="Developed an app that promotes biocultural knowledge with plant identification via camera, a local plant library, and regional activities." img="/oco.png" link="https://github.com/alexkm174x8/Tentzo-App"/>
                    <Card title="Topos FC Website" description="Worked with Topos FC association to redesign and implement the reservation and tournaments systems for the user and admins." img="/topos.png" link="https://github.com/alexkm174x8/topos-fc"/>
                </div>              
            </div>
        </div>
    </div>
  )
}

export default Projects
