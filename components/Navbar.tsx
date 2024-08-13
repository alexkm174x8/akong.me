'use client'
import { nav } from '@/data';
import React, { useState } from 'react';
import menu from '@/public/svg/menu'
import MenuSvg from '@/public/svg/menu';



const Navbar = () => {

    const [openNav, setOpenNav] = useState(false);

    const toggleNav = () => {
        if(openNav){
            setOpenNav(false);
        }else{
            setOpenNav(true);
        }
    };

    const handleClick = () => {
        setOpenNav(false);
    }

    return (
        <nav className='sticky flex max-w-fit top-[2vh] inset-x-0 mx-auto px-5 py-2 items-center justify-center space-x-4 z-50 bg-black backdrop-filter backdrop-blur-lg bg-opacity-30 rounded-3xl text-gray border border-black border-opacity-10'>
            <div className='relative flex flex-col items-center justify-center lg:flex-row gap-10'>
                <button className='mb-auto flex lg:hidden' onClick={toggleNav}>
                    <MenuSvg openNav={openNav}/>
                </button>
                <div className={`static lg:flex flex-col items-center justify-center m-auto lg:flex-row lg:gap-10 max-md:my-10 ${openNav ? 'flex gap-10 w-[100dvw] h-[100dvh]' : 'hidden'}`}>
                    {nav.map((item) => (
                        <a
                            key = {item.id}
                            href={item.url}
                            onClick={handleClick}
                            className={`relative w-fit lg:block after:block after:content-[""] after:absolute after:h-[2px] after:bg-white after:rounded-full after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center hover:text-white hover:duration-700`}
                        >

                            {item.id === '2' ? <img src={item.img} alt="Logo" className='hidden lg:flex bg-clip-content'/> : `${item.title}`}
                            {/* {item.img ? <img src={item.img} alt="Logo" className='sm:hidden' /> : `${item.title}`}  */}
                        </a>
                    ))}
                </div>
            </div>
            
             
        </nav>
  )
}

export default Navbar
