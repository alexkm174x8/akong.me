"use client"
import Navbar from '@/components/Navbar'
import React from 'react'
import Folder from '@/components/ui/Folder'


export default function ProjectsPage() {
  return (
    <main className="relative bg-black min-h-screen flex justify-center items-center flex-col overflow-x-hidden">
      <div className="max-w-7xl w-full">
        <Navbar/>
        <div style={{ 
          height: '750px', 
          position: 'relative',
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '20px',
          padding: '20px',
          marginTop: '250px'
        }}>
          <div className="flex flex-col items-center gap-16">
            <Folder 
              size={2} 
              color="#61A3EB" 
              className="custom-folder" 
            />
            <span className="text-white text-lg">Beautiful Patterns Registration</span>
          </div>
          <div className="flex flex-col items-center gap-16">
            <Folder 
              size={2} 
              color="#61A3EB" 
              className="custom-folder" 
            />
            <span className="text-white text-lg">Tentzo App</span>
          </div>
          <div className="flex flex-col items-center gap-16">
            <Folder 
              size={2} 
              color="#61A3EB" 
              className="custom-folder" 
            />
            <span className="text-white text-lg">Educational Platform for CVA</span>
          </div>
          <div className="flex flex-col items-center gap-16">
            <Folder 
              size={2} 
              color="#61A3EB" 
              className="custom-folder" 
            />
            <span className="text-white text-lg">Warehouse Simulation for Cargu</span>
          </div>
          <div className="flex flex-col items-center gap-16">
            <Folder 
              size={2} 
              color="#61A3EB" 
              className="custom-folder" 
            />
            <span className="text-white text-lg">Plagarism Detector</span>
          </div>
          <div className="flex flex-col items-center gap-16">
            <Folder 
              size={2} 
              color="#61A3EB" 
              className="custom-folder" 
            />
            <span className="text-white text-lg">Traffic Simulator</span>
          </div>
          <div className="flex flex-col items-center gap-16">
            <Folder 
              size={2} 
              color="#61A3EB" 
              className="custom-folder" 
            />
            <span className="text-white text-lg">Topos FC Website</span>
          </div>
        </div>
      </div>
    </main>
  )
}
