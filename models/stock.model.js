import mongoose from "mongoose"

const stock_schema=mongoose.Schema({
    Stock_name:{
        Type:String,
    },
    Quantity:{
        Type:Number,
    },
    Buy_price:{
        Type:Number,
    },
    Current_price:{
        Type:Number,
    },
})

const stock=mongoose.model("stock",stock_schema)

export default stock