import { Schema, model, Types} from "mongoose";

let schema = new Schema({
  user: {type: Types.ObjectId, ref: 'users',},
  product_id: {type: Types.ObjectId, ref: 'products', required: true},
  quantity: { type: Number, required: false }
}, {
  timestamps: true,
});
let collection = "carts";

let Payment = model(collection, schema);

export default Payment;