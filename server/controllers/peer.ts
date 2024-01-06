import{ Request, Response } from 'express'

let peers : string[] = [];


class Peer {
    static createPeer(req: Request, res: Response) {
        const {peerId}  = req.body;

        console.log("body = ", req.body)

        if(!peerId) {
            return res.json({status: "FAILED", message: "Peer Id is required!"})
        }
        
        console.log("peerId = ", peerId)

        peers.push(peerId);
        res.json({data :  peerId})
    }

    static deletePeer(req: Request, res: Response) {
        const { id } = req.params;
        
        if(id) {
            peers = peers.filter((peer) => peer != id)
        }
        res.json({status: "SUCCESS", data : null, message: "deleted peer"});
    }

    static getRandomPeer(req: Request, res: Response) {
        const anotherPeerId = findRandomPeerId(req.params.id);

        console.log('all peers = ', peers)

        if(anotherPeerId) {
            res.json({status: "SUCCESS", data : {anotherPeerId}, message: "got random peer id"});
        } else {
            res.json({status: "FAILED", data : null, message: "No one is online!"});
        }
    }
}


function findRandomPeerId(peerId : string) {
    let anotherPeerId = peers[Math.floor(Math.random() * peers.length)];
    if(anotherPeerId === peerId) {
        anotherPeerId = findRandomPeerId(peerId)
    }
    return anotherPeerId;
}

export default Peer;