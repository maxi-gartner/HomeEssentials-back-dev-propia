import User from '../../models/User.js'
import  jwt  from 'jsonwebtoken'

const signin = async (req, res, next) => {
  try {
      let response = await User.findOneAndUpdate(
                              {email:req.body.email}, 
                              {is_online:true},
                              {new:true});
      const token = jwt.sign(
                          {id:req.user.id},
                          process.env.SECRET,
                          {expiresIn:60*60*24})
      if (response) {
      let user = {
        name:response.name,
        lastName:response.lastName,
        email:response.email,
        photo: response.photo,
        role: response.role
      }
      return res.status(200).json({
          success: true,
          message: "updated",
          user,
          token
      });
      } else {
      return res.status(404).json({
          success: false,
          message: "not found"
      });
      }
  } catch (error) {
      next(error);
  }
};

export default signin