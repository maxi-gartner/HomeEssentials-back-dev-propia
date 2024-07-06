import Favorites from '../../models/Favorites.js';
import User from '../../models/User.js';

const removeAllFavorites = async (req, res) => {
        try {
        const { userEmail } = req.query;
        let user = await User.findOne({ email: userEmail, });
        //console.log("user", user);
        if(user){
        let destroyed = await Favorites.deleteMany({user_id: user._id})
        //console.log("destroyed.deletedCount", destroyed.deletedCount);
                    if(destroyed.deletedCount !== 0) {
                        return res.status(200).json({
                            success: true,
                            message: ["All products has been deleted"]
                        })
                    }else{
                        return res.status(404).json({
                            success: false,
                            message: ["Not found"]
                        })
                    }
                }
        } catch (error) {
            next(error)
    }
}
export default removeAllFavorites;