'use client'
import { nav } from '@/data';
import React, { useEffect, useState } from 'react';
import MenuSvg from '@/public/svg/menu';
import { enablePageScroll, disablePageScroll } from 'scroll-lock';



const Navbar = () => {

    const [openNav, setOpenNav] = useState(false);

    const toggleNav = () => {
        if(openNav){
            setOpenNav(false);
            enablePageScroll();
        }else{
            setOpenNav(true);
            disablePageScroll();
        }
    };

    const handleClick = () => {
        if(!openNav) return;

        enablePageScroll();
        setOpenNav(false);
    }

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 1024) {
                setOpenNav(false);
                enablePageScroll();
            }
        };

        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <nav className='fixed flex top-[2vh] right-3 lg:right-0 inset-x-0 mx-auto items-center justify-end lg:justify-center space-x-4 z-50 lg:w-fit'>
            <div className={`relative flex mr-3 lg:mr-0 flex-col items-end justify-center lg:flex-row gap-10 bg-black backdrop-filter backdrop-blur-lg bg-opacity-30 rounded-3xl text-gray border-opacity-100 overflow-hidden lg:px-5 lg:py-2 ${openNav ? 'w-[30vh h-[95dvh]' : ''}`}>
                <button className='relative flex mx-3 mt-3 mb-3 lg:hidden' onClick={toggleNav}>
                    <MenuSvg openNav={openNav}/>
                </button>
                <div className={`static lg:flex flex-col items-center justify-center lg:flex-row lg:gap-10 max-md:my-10 ${openNav ? 'flex gap-20 w-[90dvw] h-[100dvh]' : 'hidden'}`}>
                    {nav.map((item) => (
                        <a
                            key = {item.id}
                            href={item.url}
                            onClick={handleClick}
                            className={`relative w-fit lg:block after:block after:content-[""] after:absolute after:h-[2px] after:bg-white after:rounded-full after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center hover:text-white hover:duration-700`}
                        >

                            {item.id === '2' ? <img src={item.img} className='hidden lg:flex'/> : `${item.title}`}
                            {/* {item.img ? <img src={item.img} alt="Logo" className='sm:hidden' /> : `${item.title}`}  */}
                        </a>
                    ))}
                </div>
            </div>
            
             
        </nav>
  )
}

export default Navbar
