"use client";

import Image from 'next/image'
import React, { useState } from 'react'
import OmegleLogo from '../../assets/Logo.png';
import Link from 'next/link';
import { MdMenu } from "react-icons/md";
import { IoClose } from "react-icons/io5";
import './Navbar.scss';

const Navbar = () => {
    const [nav, setNav] = useState(false);

    const handleNav = () => {
        setNav((prev) => !prev);
    }

    const closeNav = () => {
        setNav(false);
    }

    return (
        <>
            <div className='navbar'>
                <div className="left">
                    <Image src={OmegleLogo} height={30} width={130} alt='' />
                </div>
                <div className="right">
                    <Link href={"/"} className='link'>Home</Link>
                    <Link href={"/"} className='link'>About</Link>
                    <Link href={"/"} className='link'>Rules</Link>
                    <Link href={"/video"} className='link'>Video</Link>
                    <Link href={"/text"} className='link'>Text</Link>
                </div>
                <div className="menu" onClick={handleNav}>
                    {!nav ? <MdMenu size={30} /> : <IoClose size={30} />}
                </div>
            </div>
            {nav && (
                <div className="menu_items">
                    <Link href={"/"} onClick={closeNav} className='link'>Home</Link>
                    <Link href={"/"} onClick={closeNav} className='link'>About</Link>
                    <Link href={"/"} onClick={closeNav} className='link'>Rules</Link>
                    <Link href={"/video"} onClick={closeNav} className='link'>Video</Link>
                    <Link href={"/text"} onClick={closeNav} className='link'>Text</Link>
                </div>
            )}
        </>
    )
}

export default Navbar
