"use client";
import React from "react";
import { TracingBeam } from "./ui/tracing-beam";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";
import { testimonials } from "@/data";
import { Button } from "./ui/MovingBorder";
import { EvervaultCard, Icon } from "./ui/evervault-card";
import { StickyScroll } from "./ui/sticky-scroll-reveal";
import Image from 'next/image';

const content = [
    {
      title: "Collaborative Planing",
      description:
        "First of all I work together in real time with clients, and stakeholders. I collaborate on documents, share ideas, and make decisions quickly. All of this to get in my mind what you want to do, so we can complete the project of your dreams",
      content: (
        <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--blue),var(--purple))] flex items-center justify-center text-white">
          Collaborative Planing
        </div>
      ),
    },
    {
        title: "Iterative Development",
        description: "I follow an iterative development process, regularly sharing progress and gathering your feedback. This approach allows for continuous improvements and adjustments, ensuring the final product meets your needs perfectly.",
        content: (
        <div className="h-full w-full  flex items-center justify-center text-white">
            <Image
            src="/linear.webp"
            width={300}
            height={300}
            className="h-full w-full object-cover"
            alt="linear board demo"
            />
        </div>
        )
      },
      {
        title: "Quality Assurance and Support",
        description:
          "Upon completion, I conduct thorough testing to guarantee quality and functionality. Additionally, I provide ongoing support and maintenance to address any issues and keep your project running smoothly.",
        content: (
          <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] flex items-center justify-center text-white">
            Quality Assurance and Support
          </div>
        ),
      },
]

const AboutMe = () => {

  return (
    <TracingBeam className="px-6">
        <div className='my-10 mx-5'>
            <h1 className="text-left text-white font-bold text-4xl">
                Who am I?
            </h1>
            <small className="text-gray ml-1">
                Hi, I'm Alejandro Kong.
            </small>
            <p className="text-left text-white mt-5">
                I&apos;m a student from Mexico with a love for coding, I&apos;m still defining my path but for the moment I&apos;m a Fullstack developer. Right now I&apos;m learning Node.js and Next.js. Besides that I&apos;m learning and doing my research to learn about Software Development.
                <br />
                <br />
                Little recommendation while having my device interconnection class I developed an interest in cybersecurity so I started listening the <a href="https://darknetdiaries.com/" className="underline font-bold">Darknet Diaries</a> podcast if you&apos;re interest in all of this.   
            </p>
            <div className="mt-10 flex flex-row">
                <div className="w-fit">
                    <h2 className="text-white font-semibold text-lg">
                        My tech stack:
                    </h2>

                    <div className="w-full mt-3 grid lg:grid-cols-4 grid-cols-1 gap-10">
                        <Button
                            duration={Math.floor(Math.random() * 10000) + 10000}
                            borderRadius="1.75rem"
                            style={{
                            background: "rgb(4,7,29)",
                            backgroundColor:
                                "#0c0c0c",
                            borderRadius: `calc(1.75rem* 0.96)`,
                            }}
                            className="flex-1"
                        >
                            <div className="flex lg:flex-row flex-col lg:items-center">
                                <div className='flex flex-col items-center max-lg:mt-10 overflow-hidden gap-7'>
                                    <InfiniteMovingCards
                                        items={testimonials}
                                        direction='right'
                                        speed='slow'
                                    />
                                </div>
                            </div>
                        </Button>
                    </div>
                </div>
                
                {/* <div className="border border-white">
                    <h2 className="text-white font-semibold text-lg">My coding hours.</h2>
                </div> */}
            </div>
            
            <div className="mt-12">
                <h1 className="text-white font-semibold text-lg">Currently working on...</h1>
                <div className="border border-white/[0.1] flex flex-col items-start w-full mx-auto p-4 relative h-[30rem] mt-5">
                    <Icon className="absolute h-6 w-6 -top-3 -left-3 text-white" />
                    <Icon className="absolute h-6 w-6 -bottom-3 -left-3 text-white " />
                    <Icon className="absolute h-6 w-6 -top-3 -right-3 text-white " />
                    <Icon className="absolute h-6 w-6 -bottom-3 -right-3 text-white" />
                
                    <EvervaultCard text="Coming soon..." />
            
                    <h2 className="text-white mt-4 text-sm font-light">
                        Description of what I'm doing.
                    </h2>
                </div>
            </div>
            
            <div className="mt-10">
                <h2 className="text-white font-semibold text-lg mb-5">My working method.</h2>
                <StickyScroll content={content} />
            </div>
            <div className="mt-20">
                <h1 className="text-left text-white font-bold text-4xl">Contact me.</h1>
                <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
            </div>

            
        </div>
        
    </TracingBeam>
    
  )
}

export default AboutMe
