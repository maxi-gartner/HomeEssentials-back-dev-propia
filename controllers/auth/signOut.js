import User from "../../models/User.js"

const signout = async (req, res, next) => {
  const {email} = req.user
  try {
    await User.findOneAndUpdate( 
      {email},
      {is_online: false}, 
      {new: true}
    )  
    return res.status(200)    
    .json({
      success: true,
      message: 'the user has been logout!'
    }) 
  } catch (error) {
    next(error)
  }
}

export default signout