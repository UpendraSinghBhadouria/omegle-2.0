import React from 'react'
import styles from './Video.module.css';
import Input from '@/components/Input';
import Message from '@/components/Message';
import Call from './Call'

const Video = () => {
    return (
        <div className='w-full'>
            <div className='container mx-auto mt-3 flex items-center justify-center w-full '>

                {/* left side */}
                <div className={`flex-[30%] flex items-center justify-center flex-col w-full gap-2 ${styles.video_chat}`}>
                    <Call />
                </div>

                {/* right side */}
                <div className={`flex-[70%] ${styles.video_chat}`}>
                    <div className='h-12 pl-2 mb-2'>
                        <p>You are now chatting with a random stranger</p>
                        <p className='mt-1'>You both speak the same language - English</p>
                    </div>
                    <div className={`${styles.chat} p-2 overflow-scroll bg-gray-300`}>
                        <Message />
                        <Message />
                        <Message />
                        <Message />
                        <Message />
                        <Message />
                        <Message />
                        <Message />
                        <Message />
                        <Message />
                        <Message />
                    </div>
                    <Input />
                </div>
            </div>
        </div>
    )
}

export default Video

