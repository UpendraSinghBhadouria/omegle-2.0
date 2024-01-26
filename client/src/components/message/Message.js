"use client";

import React, { useContext, useEffect, useState } from 'react'
import './Message.scss';
import Image from 'next/image';
import AvatarImg from '../../assets/avatar.png';
import { useSelector } from 'react-redux';

const Message = ({ messageContent }) => {

    // const { user } = useContext(RoomContext);

    const { user } = useSelector(state => state.room);

    return (
        <div className={`message ${user === messageContent?.username && 'owner'}`}>
            <div className="messageInfo">
                <Image
                    src={AvatarImg}
                    className='img'
                    height={40}
                    width={40}
                    alt=''
                />
                <p>{messageContent?.username}</p>
            </div>
            <div className="messageContent">
                <p>{messageContent?.message}</p>
                {/* <Image
                    className='img'
                    src={AvatarImg}
                    alt=''
                /> */}
            </div>
        </div>
    )
}

export default Message

// {messageList.map((messageContent) => {
//     return (
//         <div className="outgoingMessage">
//             <div className="messageInfo">
//                 <Image
//                     src={AvatarImg}
//                     className='img'
//                     height={40}
//                     width={40}
//                     alt=''
//                 />
//                 <p>You</p>
//             </div>
//             <div className="messageContent" key={Math.random()}>
//                 <p>{messageContent.message}</p>
//                 <Image
//                     className='img'
//                     src={AvatarImg}
//                     alt=''
//                 />
//             </div>
//         </div>
//     )
// })}


// {receiverMessageList.map((messageContent) => {
//     return (
//         <div className="incomingMessage">
//             <div className="messageInfo">
//                 <Image
//                     src={AvatarImg}
//                     className='img'
//                     height={40}
//                     width={40}
//                     alt=''
//                 />
//                 <p>stranger</p>
//             </div>
//             <div className="messageContent" key={Math.random()}>
//                 <p>{messageContent.message}</p>
//                 {/* <Image
//                     className='img'
//                     src={AvatarImg}
//                     alt=''
//                 /> */}
//             </div>
//         </div>
//     )
// })}