import { Schema, model } from "mongoose";

const contactSchema = new Schema({
  name: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true },
  affair: { type: String, required: true },
  message: { type: String, required: true },
}, {
  timestamps: true,
});
let collection = 'contacts'
const Contact = model(collection, contactSchema);

export default Contact;