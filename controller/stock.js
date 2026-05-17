import { response } from "express";
// import stockData from "../models/stock.model.js"
import axios from "axios"
// import stock from "../models/stock.model.js"

async function addStock (req,res){
    let stockData = await axios.get("https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=IBM&interval=5min&apikey=demo")
   let ObjectKey = Array.from(Object.keys(data.data))[1]
   let ObjectValue = Array.from(Object.values(data.data))[1]
   let newObkey = Array.from(Object.keys(ObjectValue))
   newobvalue.forEach(element => {
    Object.keys(element).forEach(key => {
        const newkey = key.slice(" ")[3]
        element[newkey] = element[key]
        delete element[key]
    });
});
const str = newobvalue
console.log(str)
}
export default addStock