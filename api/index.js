import express from "express"
import mongoose from "mongoose"
import dotenv from "dotenv"
import userRoutes from "./routes/user.route.js"
import cors from "cors"
import authRoutes from "./routes/auth.route.js"
dotenv.config()

mongoose.connect(process.env.MONGODB_URL)
.then(()=>console.log("MongoDB is Connected"))
.catch((e)=>console.log(`Error : ${e}`))

const app = express()
app.use(express.json());
app.use(cors())
app.listen(3000,()=>console.log("Server is Running on Port 3000"))

app.use("/api/user",userRoutes)
app.use("/api/auth",authRoutes)
app.use((err,req,res,next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || "Internal Server Error"
    res.status(statusCode).json({
        success:false,
        statusCode,
        message
    })
})
