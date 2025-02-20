import express from 'express';
import cookieParser from 'cookie-parser'
import dotenv from 'dotenv';
import cors from 'cors';

import userRouter from './src/features/users/user.router.js';
import flightRouter from './src/features/flight/flight.routes.js';
import { connectDb } from './db.config.js';


const server = express();
const port = 3000;

dotenv.config();
server.use(cookieParser());
server.use(express.json());
server.use(cors({
    origin: 'http://localhost:3003',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true
}));

//routes
server.use('/api/user', userRouter);
server.use('/api/flights', flightRouter);

server.listen(port, ()=>{
    console.log(`Listening to server ${port}`)
    connectDb();
})
