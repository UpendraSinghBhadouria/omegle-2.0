"use client";

import React, { useState } from 'react';
import omegleImg from '../../public/assets/Logo.png';
import moonImg from '../../public/assets/moon.png';
import Image from 'next/image';
import Link from 'next/link';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';


const Navbar: React.FC<{}> = () => {

  const [nav, setNav] = useState<boolean>(false);

  const handleNav = () => {
    setNav((prev) => !prev);
  }

  return (
    <nav className='w-full shadow-xl bg-white h-[70px] flex items-center justify-center'>

      <div className='container mx-auto flex justify-between items-center'>
        <Image
          src={omegleImg}
          height={50}
          width={125}
          alt='/'
        />
        <ul className='hidden md:flex space-x-10 text-gray-600 text-sm uppercase'>
          <Link href='/'>
            <li className='hover:text-gray-500'>Home</li>
          </Link>
          <Link href='/'>
            <li className='hover:text-gray-500'>Chat</li>
          </Link>
          <Link href='/video'>
            <li className='hover:text-gray-500'>Video</li>
          </Link>
          <Link href='/'>
            <li className='hover:text-gray-500'>Contact</li>
          </Link>
        </ul>

        <Image
          src={moonImg}
          className='hidden md:block w-5 cursor-pointer'
          alt='/'
        />

        {/* Mobile menu button */}
        <div onClick={handleNav} className='md:hidden cursor-pointer'>
          <AiOutlineMenu size={20} />
        </div>

        {/* Mobile design */}
        <div className={nav ? 'absolute left-0 top-0 bg-white w-full p-10 space-y-10' : 'hidden'}>

          <div className='flex items-center justify-between'>
            <Image
              src={omegleImg}
              width={87}
              height={35}
              alt='/'
            />
            <div onClick={handleNav} className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer '>
              <AiOutlineClose />
            </div>
          </div>

          <ul className='my-4 uppercase'>
            <Link href='/'>
              <li className='py-4 text-sm'>Home</li>
            </Link>
            <Link href='/'>
              <li className='py-4 text-sm'>Chat</li>
            </Link>
            <Link href='/video'>
              <li className='py-4 text-sm'>Video</li>
            </Link>
            <Link href='/'>
              <li className='py-4 text-sm'>Contact</li>
            </Link>
          </ul>

        </div>
      </div>
    </nav>
  )
}

export default Navbar
