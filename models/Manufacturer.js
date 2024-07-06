import { Schema, model } from "mongoose";

let schema = new Schema(
  {
    name: { type: String, required: true },
    logo: { type: String, required: true },
    website: { type: String, required: true },
    description: { type: String, required: true },
    active: { type: Boolean, required: true }
  },
  {
    timestamps: true,
  }
);

let collection = "manufacturers";

let Manufacturer = model(collection, schema);

export default Manufacturer;