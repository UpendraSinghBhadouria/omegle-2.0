import React from 'react'
import Img from "../../public/assets/img.png";
import Attach from "../../public/assets/attach.png";
import Image from 'next/image';

const Input: React.FC<{}> = () => {
    return (
        <div className='h-12 pt-3 flex items-center justify-center w-full'>

            <div className='flex-[15%]'>
                <button className="bg-green-500 text-white rounded-md p-[10px] w-full mr-4">
                    Start Call
                </button>
                {/* <button id="end-call-btn" className="bg-red-500 text-white  rounded-md p-[10px] w-full mr-4">End Call</button> */}
            </div>

            <div className='flex-[70%]'>
                <input
                    className='w-full pl-3 border-none outline-none text-[#2f2d52]'
                    type='text'
                    placeholder='Type something...'
                    style={{ fontSize: "18px" }}
                />
            </div>

            <div className='flex-[15%] w-full flex items-center justify-center gap-2'>
                <Image
                    src={Attach}
                    alt='/'
                    height={25}
                    className='cursor-pointer'
                />
                <input
                    type='file'
                    id='file'
                    style={{ display: "none" }}
                />
                <label htmlFor='file'>
                    <Image
                        src={Img}
                        alt='/'
                        height={25}
                        className='cursor-pointer'
                    />
                </label>
                <button
                    id="send-btn"
                    className="bg-blue-500 text-white p-[10px] rounded-md"
                >
                    Send
                </button>
            </div>

        </div>
    )
}

export default Input
