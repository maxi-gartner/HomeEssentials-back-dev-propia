import Products from "../../models/Product.js"
let read = async(req, res, next) => {
    let queries = {}
    let sort = {}
    if (req.query.manufacturer_id) {
        queries.manufacturer_id = req.query.manufacturer_id.split(',')
    }
    if (req.query.category_id) {
        queries.category_id = req.query.category_id.split(',')
    }
    if (req.query.order) {
        sort.price = req.query.order
    }
    console.log(sort);
    try{
        console.log("queries", queries);
        let all = await Products.find(queries).sort(sort)
        return res.status(200)
        .json({
                products: all
            })                            
    }catch(error){}
            console.log(error)
            return res.status(400).json({error: "a ocurrido un problema"})
}
export default read