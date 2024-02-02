"use client";

import { setRoomId } from "@/redux/features/roomSlice";
import React, { createContext, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { io } from "socket.io-client";
const SocketContext = createContext();

export const SocketContextProvider = ({ children }) => {
    const [socket, setSocket] = useState(null);
    const dispatch = useDispatch();

    useEffect(() => {
        const socketInstance = io("https://omegle-2-0.onrender.com");
        setSocket(socketInstance);
    }, [])

    useEffect(() => {
        socket?.emit('joinRoom');

        socket?.on("getRoomId", (roomId) => {
            dispatch(setRoomId(roomId));
            console.log({ roomId })
        })

        return () => {
            socket?.disconnect();
        }
        // eslint-disable-next-line
    }, [socket])
    return (
        <SocketContext.Provider value={{ socket }}>
            {children}
        </SocketContext.Provider>
    )
}

export default SocketContext;