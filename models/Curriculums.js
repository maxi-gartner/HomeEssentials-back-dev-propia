import { Schema, model, Types} from "mongoose"

let schema = new Schema ({
    name: { type: String, required: true},
    img: { type: String, required: true},
    cv: { type: String, required: true},
    email: { type: String, required: true},
    lastName: { type: String, required: true},
    age: { type: String, required: true},
    studies: [{studies1:{type: String, required: true},
                studies2:{type: String, required: true},
                studies3:{type: String, required: true}}],
    experience: [{experience1:{ type: String, required: true},
                experience2:{ type: String, required: true},
                experience3:{ type: String, required: true}}],
    references: [{references1:{type: String, required: true},
                references2:{type: String, required: true},
                references3:{type: String, required: true}}]
},{
    timestamps: true,
})
let collection = 'curriculums'

let Curriculums = model(collection, schema)
export default Curriculums