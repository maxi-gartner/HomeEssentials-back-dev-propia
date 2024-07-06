import Favorites from '../../models/Favorites.js'
import User from '../../models/User.js';

let create = async(req, res, next) => {
    try{
        const { userEmail, productId } = req.body;
        let user = await User.findOne({ email: userEmail, });
        let article = await Favorites.findOne({ user_id: user._id, product_id: productId });
        if(!article){
            let data = {user_id: user._id, product_id: productId}
            let one = await Favorites.create(data)
            return res.status(201).json({
                Favorites: one,
                success: true
            })
        }else{
            return res.status(400).json({
                message: 'You already added this product to your favorites'
            })
        }
        
    } catch(error){
        next(error)
    }
}

export default create