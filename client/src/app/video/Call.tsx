'use client'
import { useState, useEffect, useRef } from 'react'
import { Peer } from "peerjs";
import { v4 as uuid } from 'uuid';
import axios from 'axios'

const baseUrl = "https://fantastic-invention-9v5rxpqqw5927gvv-8000.app.github.dev/"

async function createPeer(peerId: string) {
    const res = await axios.post(`${baseUrl}/api/peer`, {
        peerId: peerId
    })
    console.log("response = ", res)
}

export default function Call() {
    const [peer, setPeer] = useState();
    const [peerId, setPeerId] = useState();
    const videoRef = useRef<HTMLVideoElement>();

    useEffect(() => {
        const peer = new Peer(uuid());

        peer.on('open', (id) => {
            console.log('My peer ID is: ', id);
            createPeer(id);
        });

        peer.on('error', (error) => {
            console.log(error);
        });

        // store peer to server
        setPeer(peer);
    }, []);

    useEffect(() => {
        if (!peer) {
            return;
        }

        // Handle incoming data connection
        peer.on("connection", (conn) => {
            console.log("Incoming peer connection!")
            conn.on("data", (data) => {
                console.log("data = ", data);
            });
            conn.on("open", () => {
                conn.send("hello!");
            });
        });


        // Handle incoming voice/video connection
        peer.on('call', (call) => {
            navigator.mediaDevices.getUserMedia({ video: true, audio: true })
                .then((stream) => {
                    call.answer(stream); // Answer the call with an A/V stream.
                    call.on('stream', renderVideo);
                })
                .catch((err) => {
                    console.error('Failed to get local stream', err);
                });
        });

    }, [peer])

    useEffect(() => {
        if (peerId) {
            connectToPeer()
        }
    }, [peerId]);


    const connectToPeer = () => {
        console.log(`Connecting to ${peerId}...`);

        let conn = peer.connect(peerId);
        conn.on('data', (data) => {
            console.log(`received: ${data}`);
        });
        conn.on('open', () => {
            conn.send('hi!');
        });

        navigator.mediaDevices.getUserMedia({ video: true, audio: true })
            .then((stream) => {
                let call = peer.call(peerId, stream);
                call.on('stream', renderVideo);
            })
            .catch((err) => {
                console.log('Failed to get local stream', err);
            });
    }

    const connectHandler = async () => {
        try {
            const res = await axios.get(`${baseUrl}/api/peer/${peer.id}`)
            const data = res.data.data;
            console.log(data)
            if (data.anotherPeerId) {
                setPeerId(data.anotherPeerId);
            }
        }
        catch (err) {
            console.log(err)
        }
    }

    const renderVideo = (stream) => {
        if (videoRef.current) {
            videoRef.current.srcObject = stream;
        }
    };

    return (
        <div>
            <h2> Call - </h2>
            <div>
                {peer && (
                    <div> Peer ID = {peer.id} </div>
                )}
                <button onClick={connectHandler} className="px-4 py-3 rounded bg-slate-200"> connect to stranger </button>
            </div>

            <br />

            <div className="p-4">
                <video ref={videoRef} width="320" height="240" controls></video>
            </div>

        </div>
    )
}

