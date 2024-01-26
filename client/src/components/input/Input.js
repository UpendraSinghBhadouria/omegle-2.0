"use client";

import React, { useContext, useEffect, useState } from 'react'
import './Input.scss';
import Image from 'next/image';
import AttachImg from '../../assets/attach.png';
import Img from '../../assets/img.png';
import { useDispatch, useSelector } from 'react-redux';
import { setMessage, setMessageList, setUser } from '@/redux/features/roomSlice';

const Input = ({ socket }) => {
    const [enteredMessage,setEnteredMessage] = useState(''); 
    // const { message, setMessage, setMessageList, roomId, user, setUser } = useContext(RoomContext);
    const { roomId, user } = useSelector(state => state.room);
    const dispatch = useDispatch();

    const inputChangeHandler = (event) => {
        setEnteredMessage(event.target.value);
    }

    useEffect(() => {
        const username = prompt("Enter your name..");
        // setUser(username)
        dispatch(setUser(username));
    }, [])

    const sendMessaage = async () => {
        const messageData = {
            room: roomId,
            username: user,
            message:enteredMessage
        }

        await socket.emit("send_message", messageData);
        // setMessageList((prev) => [...prev, messageData]);
        dispatch(setMessageList(messageData));
        dispatch(setMessage(enteredMessage));
    }



    return (
        <div className='input'>
            <button>Next</button>
            <input
                type="text"
                placeholder='Type something..'
                value={enteredMessage}
                onChange={inputChangeHandler}
            />
            <div className="send">
                <Image src={AttachImg} className='img' height={24} alt='' />
                <input type="file" id="file" style={{ display: "none" }} />
                <label htmlFor="file">
                    <Image src={Img} className='img' height={24} alt='' />
                </label>
                <button onClick={sendMessaage}>Send</button>
            </div>
        </div>
    )
}

export default Input
