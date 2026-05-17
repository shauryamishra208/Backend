import Joi from "joi"

async function usermiddle(req,res,next){
    try {
        const schema = Joi.object({
            name: Joi.string().alphanum().min(4).max(30).required(),
            email: Joi.string().email().max(30).required(),
            password: Joi.string().min(4).max(30).required(),
        }).unknown(true);
        let { value, error } = schema.validate(req.body)
        if (error) {
            res.status(400).send("Invalid values")        
            return;
        }
        req.body = value
        next()

    } catch (error) {
        console.log(error)
        return res.status(500).send("Server error")
        next(error)
    }
}

export default usermiddle