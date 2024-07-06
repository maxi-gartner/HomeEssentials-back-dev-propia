import Contact from '../../models/Contact.js'

let saved = async(req, res, next) => {
    try{
        let one = await Contact.create(req.body)
        return res.status(201).json({
            Contact: one,
            success: true
        })
    } catch(error){
        next(error)
    }
}

export default saved