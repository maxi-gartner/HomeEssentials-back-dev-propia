import Curriculums from '../../models/Curriculums.js'

let saved = async(req, res, next) => {
    try{
        let one = await Curriculums.create(req.body)
        return res.status(201).json({
            Curriculums: one,
            success: true
        })
    } catch(error){
        next(error)
    }
}

export default saved