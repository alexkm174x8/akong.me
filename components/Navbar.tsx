import React from 'react'
const hoverline = 'relative w-fit block after:block after:content-[""] after:absolute after:h-[2px] after:bg-white after:rounded-full after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center hover:text-white hover:duration-700';
const Navbar = () => {
  return (
    <div className="sticky top-[2vh] left-1/2 transform -translate-x-1/2 z-50 bg-black backdrop-filter backdrop-blur-lg bg-opacity-30 rounded-3xl text-gray w-[80vh] h-[8vh]">
        <div className="max-w-5xl mx-auto px-4">
            <div className="flex items-center justify-center h-16">
                    <div className="flex space-x-4 gap-10">
                        <a href="#" className={hoverline}>Dashboard</a>
                        <a href="#" className={hoverline}>About</a>
                        <a className="text-2xl text-gray-900 font-semibold">Logo</a>
                        <a href="#" className={hoverline}>Projects</a>
                        <a href="#" className={hoverline}>Contact</a>
                    </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar
