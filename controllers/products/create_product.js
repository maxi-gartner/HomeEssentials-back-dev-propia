import Product from '../../models/Product.js'

let create = async(req, res, next) => {
    try{
        let one = await Product.create(req.body)
        return res.status(201).json({
            Product: one,
            success: true
        })
    } catch(error){
        next(error)
    }
}

export default create