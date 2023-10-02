import { register } from "../controller/UserController";
import express from 'express';

const router=express.Router();
router.route("/register").post(register);
export default router;