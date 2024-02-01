import SocketContext from "@/context/socket";
import { useContext, useEffect, useState } from "react";

const usePeer = () => {
    const { socket } = useContext(SocketContext);

    const [peer, setPeer] = useState();
    const [myId, setMyId] = useState();
    const roomId = "hkbcdsvbdbv";
    useEffect(() => {
        (async function initPeer() {
            const myPeer = new (await import('peerjs')).default();
            setPeer(myPeer);

            myPeer.on('open', (id) => {
                console.log(`Your peer id is ${id}`)
                setMyId(id);

                socket?.emit("joinVideoRoom", {roomId,id})
            })
        })()
    }, [])

    return { peer, myId }
}

export default usePeer;