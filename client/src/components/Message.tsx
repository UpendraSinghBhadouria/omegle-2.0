"use client";

import Image from 'next/image'
import React, { useState } from 'react'
import Avatar from "../../public/assets/avatar.png";

const Message: React.FC<{}> = () => {
    const [user, setUser] = useState<boolean>(true);

    return (
        <div className={`flex gap-2 mb-5 ${user ? 'flex-row-reverse' : ''}`} >
            <div className="flex flex-col font-[300px]">
                <Image
                    className='rounded-[50%] object-cover'
                    src={Avatar}
                    alt=""
                    height={40}
                    width={40}
                />
                <span className='text-xs'>stranger</span>
            </div>
            <div className={`max-w-[80%] flex flex-col gap-2 ${user ? 'items-end' : ''}`}>
                <p className={`bg-white py-2 px-4 rounded-tl-none rounded-r-[10px] rounded-b-[10px] ${user ? 'rounded-tl-[10px] rounded-tr-none rounded-b-[10px] max-w-max' : ''} `}>Hello</p>
                <Image
                    src={Avatar}
                    alt=""
                    width={200}
                    height={100}
                />
            </div>
        </div>

    )
}

export default Message
