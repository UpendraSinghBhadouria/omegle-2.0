import {Router} from 'express'
import Peer from '../controllers/peer';

const router = Router();

router.get('/:id', Peer.getRandomPeer);
router.post('/', Peer.createPeer);
router.delete('/:id', Peer.deletePeer);

export default router;