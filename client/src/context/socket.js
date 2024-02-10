"use client";

import { chatList as chatListData } from "@/data/chatList";
import { setRoomId } from "@/redux/features/roomSlice";
import React, { createContext, useEffect, useState, useContext } from "react";
import { useDispatch } from "react-redux";
import { io } from "socket.io-client";
const SocketContext = createContext();

export const SocketContextProvider = ({ children }) => {
  const [chatList, setChatList] = useState(chatListData);
  const [socket, setSocket] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    const socketInstance = io(`${process.env.NEXT_PUBLIC_BASE_URL}`);
    setSocket(socketInstance);
  }, []);

  useEffect(() => {
    socket?.emit("joinRoom");

    socket?.on("getRoomId", (roomId) => {
      dispatch(setRoomId(roomId));
      console.log({ roomId });
    });

    return () => {
      socket?.disconnect();
    };
    // eslint-disable-next-line
  }, [socket]);
  return (
    <SocketContext.Provider
      value={{ socket, setSocket, chatList, setChatList }}
    >
      {children}
    </SocketContext.Provider>
  );
};

export function useSocketContext() {
  return useContext(SocketContext);
}

export default SocketContext;
