import User from "../Models/m.js"
async function create_book(req,res){
    try{
        const {tittle,author,price}=req.body
        if(!tittle ||!author ||!price){
            return res.status(404).send("All fields are required")
        }
         const alreadyExists = await User.findOne({
            tittle: tittle,
            author: author,
            price: price
        })

        if(alreadyExists){
            return res.status(409).send("Book already exists")
        }

        const newbook={
            bookId:101,
            tittle,
            author,
            price
        }
        await User.create(newbook)
        res.status(201).send("Book saved successfully")
        console.log(newbook)
    }catch(error){
        console.log(error)
        res.status(500).send(error.message)    
    }
}
export default create_book
