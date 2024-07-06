import Product from "../../models/Product.js"

let getOne= async(req,res,next)=>{
try {
    let {id}=req.params  
    let product = await Product.findById(id,'-_id -createdAt   -__v')
        .populate('name _id')
        .populate('category_id','name -_id')
            if(!product){
                return res.status(404).json({message:'product not found'})
            }  
            return res.status(200).json({succes:true,
                response:product}) 

} catch (error) {
    next(error)
}

}
export default getOne
