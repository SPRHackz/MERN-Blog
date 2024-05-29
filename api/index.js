import express from "express"
import mongoose from "mongoose"
import dotenv from "dotenv"

dotenv.config()
mongoose.connect(process.env.MONGODB_URL)
.then(()=>console.log("MongoDB is Connected"))
.catch((e)=>console.log(`Error : ${e}`))

const app = express()
app.listen(3000,()=>console.log("Server is Running on Port 3000"))