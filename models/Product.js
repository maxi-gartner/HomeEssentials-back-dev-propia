import { Schema, model, Types} from "mongoose"

let schema = new Schema ({
    name: {type: String, required: true},
    description: {type: String, required: true},
    price: {type: Number, required: true},
    price_offer: {type: Number, required: false},
    percentage_offer: {type: Number, required: true},
    photo: { type: String, required: true},
    stock_Available: {type: Number, required: true},
    category_id: {type: Types.ObjectId, ref: 'categories',required: true},
    manufacturer_id: {type: Types.ObjectId, ref: 'manufacturers',}
},{
    timestamps: true,

})
let collection = 'products'

let Product = model(collection, schema)
export default Product