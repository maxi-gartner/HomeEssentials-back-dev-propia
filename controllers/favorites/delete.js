import Favorites from '../../models/Favorites.js';
import User from '../../models/User.js';

const removeFromFavorites = async (req, res) => {
        try {
        const { userEmail, productId } = req.query;
        let user = await User.findOne({ email: userEmail, });
        if(user){
        let destroyed = await Favorites.findOneAndDelete({user_id: user._id, product_id: productId})
                    if(destroyed) {
                        return res.status(200).json({
                            success: true,
                            message: ["Product has been deleted"]
                        })
                    }else{
                        return res.status(200).json({
                            success: false,
                            message: ["Not found"]
                        })
                    }
                }
        } catch (error) {
            next(error)
    }
}
export default removeFromFavorites;