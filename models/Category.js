import { Schema, model } from "mongoose";

let schema = new Schema(
  {
    name: { type: String, required: true },
    color: { type: String, required: true },
    hover: { type: String, required: true },
    description: { type: String, required: true },
    coverPhoto: { type: String, required: true }
  },
  {
    timestamps: true,
  }
);

let collection = "categories";

let Category = model(collection, schema);

export default Category;