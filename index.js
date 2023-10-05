import express from "express";
import "dotenv/config";
import connectToDB from "./db-connection.js";
import userRoute from "./router/userRouter.js";
import cookieParser from "cookie-parser";
import taskRouter from "./router/taskRouter.js";
import { authenticator } from "./middleware/authenticator.js";

//connecting to database
connectToDB(process.env.MONGO_URI);

const app = express();
const port = process.env.PORT || 5000;
app.use(express.json());
app.use(cookieParser()); //this enables cookie data to be read

app.use("/api/user/", userRoute);
app.use("/api/task", authenticator, taskRouter);
app.listen(port, () => {
  console.log(`server started listening at http://localhost:${port}`);
});
