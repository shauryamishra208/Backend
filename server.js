import dotenv from "dotenv"
dotenv.config()

import express from "express"
import mongoose from "mongoose"
import cookieParser from "cookie-parser";
import User from "./models/users.model.js"

const PORT=process.env.PORT || 1001
const app=express()
app.use(express.urlencoded({extended:false}))
app.use(express.json())
app.use(cookieParser())

mongoose.connect("mongodb://127.0.0.1:27017/stock").then(()=> console.log("MongoDB connected")).catch((error)=> console.log("Error",error))

import register from "./routers/user.router.js"
import login from "./routers/login.router.js"
import logout from "./routers/logout.router.js"
import update from "./routers/update.routers.js"
import addStock from "./controller/stock.js"
import sendEmail from "./routers/email.routers.js"

app.get("/api/v1/users",async (req,res)=>{
    const users=await User.find()
    res.status(200).json(users)
})
app.use("/api/v1/user",update)
app.use("/api/v1/user",register)
app.use("/api/v1/user",login) 
app.use("/api/v1/user",logout) 
app.use("/api/v1/stock",addStock)
app.use("/api/v1/user",sendEmail)

app.listen(PORT,()=>{
    console.log("Server Connected")
})