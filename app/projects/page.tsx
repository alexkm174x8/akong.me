"use client"
import Navbar from '@/components/Navbar'
import React from 'react'
import Folder from '@/components/ui/Components/Folder/Folder'


export default function ProjectsPage() {
  return (
    <main className="relative bg-black min-h-screen flex justify-center items-center flex-col overflow-x-hidden">
      <div className="max-w-7xl w-full">
        <Navbar/>
        <div style={{ 
          height: '600px', 
          position: 'relative',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '200px',
          flexWrap: 'wrap'
        }}>
          <div className="flex flex-col items-center gap-16">
            <Folder 
              size={2} 
              color="#61A3EB" 
              className="custom-folder" 
            />
            <span className="text-white text-lg">Project 1</span>
          </div>
          <div className="flex flex-col items-center gap-16">
            <Folder 
              size={2} 
              color="#61A3EB" 
              className="custom-folder" 
            />
            <span className="text-white text-lg">Project 1</span>
          </div>
          <div className="flex flex-col items-center gap-16">
            <Folder 
              size={2} 
              color="#61A3EB" 
              className="custom-folder" 
            />
            <span className="text-white text-lg">Project 1</span>
          </div>
          <div className="flex flex-col items-center gap-16">
            <Folder 
              size={2} 
              color="#61A3EB" 
              className="custom-folder" 
            />
            <span className="text-white text-lg">Project 1</span>
          </div>
        </div>
      </div>
    </main>
  )
}
