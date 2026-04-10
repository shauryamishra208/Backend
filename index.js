import express from "express"
import mongoose from "mongoose"

import create_book from "./controllers/createbook.js"
import member from "./controllers/member.js"
import borrow_record from "./controllers/BorrowRecord.js"

const app=express()
const PORT=8008

mongoose.connect('mongodb://127.0.0.1:27017/Library').then(()=> console.log("MongoDB connected")).catch(err=> console.log("Error",err))

app.use(express.urlencoded({extended:false}))

app.post("/api/createbooks",create_book)
app.post("/api/member",member)
app.post("/api/borrow",borrow_record)

app.listen(PORT,()=>{
    console.log("Server started")
})