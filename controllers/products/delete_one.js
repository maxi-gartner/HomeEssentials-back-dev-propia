import Product from "../../models/Product.js";

let destroy = async(req,res,next) => {
    try {
        let destroyed = await Product.deleteOne({_id: req.params.id})
 
        return res.status(200).json({
            succes: true,
            destroyed,
            message: "Product delete",
        })
    } catch (error) {
       console.log(error)
    }
}

export default destroy