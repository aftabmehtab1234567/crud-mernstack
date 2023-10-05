import { Router } from 'express';
const router = Router();
import { adduser, getAlluser,getusers,editAllUser,deleteUser } from '../Controller/User-control.js';

router.post('/add', adduser);
router.get('/all', getAlluser);
router.get('/:id', getusers);
// Express route setup
router.put('/edit/:id', editAllUser); // This associates the route with the handler
router.delete('/:id', deleteUser);

export default router;
