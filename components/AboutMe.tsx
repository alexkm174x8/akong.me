"use client";
import React from "react";
import { TracingBeam } from "./ui/tracing-beam";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";
import { testimonials } from "@/data";
import { Button } from "./ui/MovingBorder";
import { EvervaultCard, Icon } from "./ui/evervault-card";
import { StickyScroll } from "./ui/sticky-scroll-reveal";
import Image from 'next/image';
import { GlareCard } from "./ui/glare-card";

const content = [
    {
      title: "Collaborative Planing",
      description:
        "First of all I work together in real time with clients, and stakeholders. I collaborate on documents, share ideas, and make decisions quickly. All of this to get in my mind what you want to do, so we can complete the project of your dreams.",
      content: (
        <div className="h-full w-full  flex items-center justify-center text-white">
            <img
            src="/collab.webp"
            width={300}
            height={300}
            className="h-full w-full object-fill"
            alt="Collaborative planing"
            />
        </div>
      ),
    },
    {
        title: "Iterative Development",
        description: "I follow an iterative development process, regularly sharing progress and gathering your feedback. This approach allows for continuous improvements and adjustments, ensuring the final product meets your needs perfectly.",
        content: (
        <div className="h-fit w-fit flex items-center justify-center text-white rounded-lg">
            <img
            src="/svg/code.svg"
            width={300}
            height={300}
            className="h-full w-full object-fill"
            alt="Iterative Development"
            />
        </div>
        )
      },
      {
        title: "Quality Assurance and Support",
        description:
          "Upon completion, I conduct thorough testing to guarantee quality and functionality. Additionally, I provide ongoing support and maintenance to address any issues and keep your project running smoothly.",
        content: (
            <div className="h-fit w-fit flex items-center justify-center text-white rounded-lg">
                <img
                src="/quality.webp"
                width={300}
                height={300}
                className="h-full w-full object-fill"
                alt="Quality Assurance and Support"
                />
            </div>
        ),
      },
]

const AboutMe = () => {

  return (
    <div className="overflow-hidden" id='about'>
        <TracingBeam className="px-6">
            <div className='my-10 mx-5'>
                <h1 className="text-left text-white font-bold text-4xl">
                    Who am I?
                </h1>
                <small className="text-gray ml-1">
                    Hi, I&apos;m Alejandro Kong.
                </small>
                <p className="text-left text-white mt-5">
                    I&apos;m a student from Mexico with a passion for coding. While I&apos;m still defining my path, I&apos;m currently focused on Fullstack development. Right now, I&apos;m learning Node.js and Next.js, and I&apos;m also diving deeper into Software Development through research and practice.
                    <br />
                    <br />
                    A little recommendation: During my device interconnection class, I developed an interest in cybersecurity. If you&apos;re into that too, I highly recommend the <a href="https://darknetdiaries.com/" className="underline font-bold">Darknet Diaries</a> podcast.  
                </p>
                <div className="mt-10 flex flex-row">
                    <div className="w-fit">
                        <h2 className="text-white font-semibold text-lg">
                            My tech stack:
                        </h2>

                        <div className="w-full mt-3 grid lg:grid-cols-4 grid-cols-1 gap-10 cursor-default">
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
                                    <div className='flex flex-col items-center overflow-hidden gap-7 cursor-default '>
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
                            I am currently developing an iOS and Android app for the Ocoyucan Civil Association to promote biocultural knowledge to their visitors through an image search feature for local plants, along with other upcoming functions.
                        </h2>
                    </div>
                </div>
                
                <div className="mt-16">
                    <h2 className="text-white font-semibold text-lg mb-5">My working method.</h2>
                    <StickyScroll content={content} />
                </div>
                <div className="mt-20">
                    <h1 className='text-white font-bold text-4xl text-center'>
                        Want to get in contact with <span className='text-blue'>me</span> ? Click any of the following cards.
                    </h1>                
                    <div className="flex flex-col items-center mt-20 lg:flex-row lg:gap-20 lg:justify-center">
                        <a href="mailto:akongmontoya@hotmail.com" target="_blank">
                            <GlareCard className="flex flex-col items-center justify-center">
                                <svg
                                    width="56"
                                    height="55"
                                    viewBox="0 0 66 65"
                                    fill="none"
                                    xmlns="/"
                                    className="h-7 w-7 text-white"
                                >
                                    <path
                                    d="M8 8.05571C8 8.05571 54.9009 18.1782 57.8687 30.062C60.8365 41.9458 9.05432 57.4696 9.05432 57.4696"
                                    stroke="currentColor"
                                    strokeWidth="15"
                                    strokeMiterlimit="3.86874"
                                    strokeLinecap="round"
                                    />
                                </svg>
                                <p className="text-white font-bold text-xl mt-4">Email</p>
                            </GlareCard>
                        </a>
                        <a href="https://github.com/alexkm174x8" target="_blank">
                            <GlareCard className="flex flex-col items-center justify-center">
                                <svg
                                    width="56"
                                    height="55"
                                    viewBox="0 0 66 65"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-7 w-7 text-white"
                                >
                                    <path
                                    d="M8 8.05571C8 8.05571 54.9009 18.1782 57.8687 30.062C60.8365 41.9458 9.05432 57.4696 9.05432 57.4696"
                                    stroke="currentColor"
                                    strokeWidth="15"
                                    strokeMiterlimit="3.86874"
                                    strokeLinecap="round"
                                    />
                                </svg>
                                <p className="text-white font-bold text-xl mt-4">Github</p>
                            </GlareCard>
                        </a>
                        <a href="https://www.linkedin.com/in/alejandrokong/" target="_blank">
                            <GlareCard className="flex flex-col items-center justify-center">
                                <svg
                                    width="56"
                                    height="55"
                                    viewBox="0 0 66 65"
                                    fill="none"
                                    xmlns="/"
                                    className="h-7 w-7 text-white"
                                >
                                    <path
                                    d="M8 8.05571C8 8.05571 54.9009 18.1782 57.8687 30.062C60.8365 41.9458 9.05432 57.4696 9.05432 57.4696"
                                    stroke="currentColor"
                                    strokeWidth="15"
                                    strokeMiterlimit="3.86874"
                                    strokeLinecap="round"
                                    />
                                </svg>
                                <p className="text-white font-bold text-xl mt-4">Linkedin</p>
                            </GlareCard>
                        </a>
                        
                    </div>
                </div>
            </div>
        </TracingBeam>
    </div>
    
  )
}

export default AboutMe
