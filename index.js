import express from 'express';
import mongoose from 'mongoose';
import userRoute from './router/userRouter.js';

const uri = "mongodb+srv://lordprateekverma:rimFFlND5oxTl9NQ@cluster0.j2bcqvd.mongodb.net/TaskManagementTool?retryWrites=true&w=majority";
mongoose.connect(uri).then(() => {
    console.log("DB connected");
}).catch((error) => {
    console.log(error);
});

const app = express();
const PORT = 5000;
app.use(express.json());
app.use('/api/user/',userRoute);
app.listen(PORT, () => {
    console.log('Server started at PORT ', PORT);
})
