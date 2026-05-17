import Joi from 'joi'

async function updatemiddle(req, res, next) {
    try {
        const schema = Joi.object({
        name: Joi.string().alphanum().min(4).max(30),
        email: Joi.string().email().max(30),
        password: Joi.string().min(4).max(30)
    }).unknown(true);
    let {value, error} = schema.validate(req.body)
    if (error) {
        res.status(400).send("Invalid values")
        return; 
    }
    res.body = value
    next()
    }catch (error){
        console.log(error)
        return res.status(500).send("Server Error")
        next(error)
    } // Disallow unknown fields

}
export default updatemiddle