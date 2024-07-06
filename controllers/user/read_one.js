import User from '../../models/User.js'

let read_one = async(req,res,next) => {
    try {
        //console.log("res", res)
        let user = await User.findOne({
            email: req.params.email})
            if(user){
                return res.status(200).json({
                    success: true,
                    response: user
                })
            }
            return res.status(404).json({
                success: false,
                message: 'User not found'
            })  
        
    }
    catch (error) {
        next(error)
    }
}

export default read_one
