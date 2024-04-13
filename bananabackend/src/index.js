// require('dotenv').config({ path: './.env' });
import dotenv from "dotenv"
import connectDB from './db/index.js';
import { app } from './app.js';

dotenv.config({
    path: './.env'
});
const port = process.env.PORT || 8000;
connectDB()
.then(() => {
    app.listen(port, () => {
        console.log(`Server is running on port ${port}`)
    })
})
.catch((err) => {
    console.log("Error connecting to the database", err);
})


















/*
import mongoose from 'mongoose';
import { DB_NAME } from "./constants";
import express from 'express';
const app = express();

( async () => {
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        app.on("error", () =>{
            console.log("Error connecting to the database", error);
            throw error
        })
        app.listen(process.env.PORT, () => {
            console.log(`Server is running on port ${process.env.PORT}`)
        })
    }catch(error) {
        console.log("ERROR",error);
        throw err
    }
}) ()
*/