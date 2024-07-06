import Favorites from '../../models/Favorites.js'
import User from '../../models/User.js';

let read = async (req, res, next) => {
    try {
        const { userEmail } = req.params; 
        let user = await User.findOneAndUpdate({ email: userEmail});
        console.log(user);
        let read = await Favorites.find({
            user_id: user._id
        }).populate("product_id")
        console.log("estos son los favoritos", read)
        return res.status(200).json({
            success: 'ok',
            response: read
        })
    } catch (error) {
        console.log(error)
        next(error)
    }
}

export default read