import express from 'express';
import mongoose from 'mongoose';
import userRoute from './router/userRouter.js';
import cookieParser from 'cookie-parser';
import taskRouter from './router/taskRouter.js';
import {authenticator} from './middleware/authenticator.js';


const uri = "mongodb+srv://lordprateekverma:rimFFlND5oxTl9NQ@cluster0.j2bcqvd.mongodb.net/TaskManagementTool?retryWrites=true&w=majority";
mongoose.connect(uri).then(() => {
    console.log("DB connected");
}).catch((error) => {
    console.log(error);
    
});

const app = express();
const PORT = 5000;
app.use(express.json());
app.use(cookieParser());//this is enables cookie data to be read

app.use('/api/user/',userRoute);
app.use('/api/task',authenticator,taskRouter);
app.listen(PORT, () => {
    console.log('Server started at PORT ', PORT);
})
