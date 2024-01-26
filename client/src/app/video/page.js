import React from 'react'
import './video.scss';
import Navbar from '@/components/navbar/Navbar';
import Input from '@/components/input/Input';
import Message from '@/components/message/Message';

const Video = () => {
  return (
    <div className='video'>
      <Navbar />
      <div className="container">
        <div className="left">
            <div className="videos">
                <div className="user_video">1</div>
                <div className="stranger_video">2</div>
            </div>
        </div>
        <div className="right">
            <div className="chats">Chats</div>
            <div className="messages">
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
