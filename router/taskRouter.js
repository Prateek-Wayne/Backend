import {createTask} from '../controller/task-controller1.js';
import express from 'express';

const router=express.Router();
router.route('/create').post(createTask);
export default router;