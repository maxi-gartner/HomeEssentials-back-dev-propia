import { Schema, model, Types } from "mongoose"

let schema = new Schema({
    user_id: {type: Types.ObjectId, ref: 'users'},
    product_id: {type: Types.ObjectId, ref: 'products'}
},{
    timestamps: true,
}
)
let collection = 'favorites'

let Favorites = model(collection, schema)
export default Favorites