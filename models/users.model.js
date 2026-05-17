import mongoose from "mongoose"

const userSchema = mongoose.Schema({
    name:{
        type:String, 
        required:true
    },
    email:{
        type:String,
        required:true,
    },
    hashedPassword:{
        type:String,
        required:true,
    },
    createdAt:{
        type:String
    },
})
const user_model = mongoose.model("user_model", userSchema)
export default user_model
