"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const Task_1 = require("./model/Task");
const express = require('express');
const uri = "mongodb+srv://lordprateekverma:rimFFlND5oxTl9NQ@cluster0.j2bcqvd.mongodb.net/TaskManagementTool?retryWrites=true&w=majority";
mongoose_1.default.connect(uri).then(() => {
    console.log("DB connected");
})
    .catch((err) => {
    console.log(err);
});
const app = express();
const PORT = 5000;
app.listen(PORT, () => {
    console.log('Server Started at ', PORT);
});
(0, Task_1.task)();
