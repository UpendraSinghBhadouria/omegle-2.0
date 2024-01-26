"use client";

import React, { useEffect, useState } from 'react'
import './text.scss';
import Navbar from '@/components/navbar/Navbar';
import Message from '@/components/message/Message';
import Input from '@/components/input/Input';
import { io } from "socket.io-client";
import { useDispatch, useSelector } from 'react-redux';
import { setMessageList, setRoomId } from '@/redux/features/roomSlice';

const Text = () => {

  // const { messageList, setMessageList, setRoomId } = useContext(RoomContext);
  const { messageList } = useSelector(state => state.room);
  const dispatch = useDispatch();
  const [socket, setSocket] = useState(null);

  useEffect(() => {
    const socketInstance = io("http://localhost:8000");
    setSocket(socketInstance);
  }, [])

  useEffect(() => {
    socket?.emit('joinRoom');

    socket?.on("getRoomId", (roomId) => {
      dispatch(setRoomId(roomId));
    })

    return () => {
      socket?.disconnect();
    }
  }, [socket])



  useEffect(() => {
    socket?.on("receive_message", (data) => {
      //  setMessageList((prev)=>[...prev,data]);
      dispatch(setMessageList(data));
    })
  }, [socket])

  return (
    <div className='text'>
      <Navbar />
      <div className="chat">
        <div className="container">
          <div className="chatInfo">
            <span>Chats</span>
          </div>
          <div className="messages">
            {messageList?.map((message) => {
              return <Message messageContent={message} key={Math.random()} />
            })}
          </div>
          <Input
            socket={socket}
          />
        </div>
      </div>
    </div>
  )
}

export default Text
