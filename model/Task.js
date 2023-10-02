"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.task = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const TaskSchema = new mongoose_1.default.Schema({
    taskname: {
        type: String,
        require: true
    },
    discription: {
        type: String,
        require: false,
        min: 1
    },
    deadline: {
        type: Date,
        require: true
    },
    user: {
        type: mongoose_1.default.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    }
}, { timestamps: true });
const Task = mongoose_1.default.model('Task', TaskSchema);
const task = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const newTask = yield Task.create({
            taskname: 'Watch GOT',
            discription: 'Watch three episode today',
            user: '65197e112a7b477bf0d02934',
            deadline: new Date('2023-12-31')
        });
        console.log(newTask);
    }
    catch (error) {
        console.log(error);
    }
});
exports.task = task;
