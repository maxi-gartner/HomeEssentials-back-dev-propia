import Cart from '../../models/cart.js';
import User from '../../models/User.js';

const removeFromCart = async (req, res) => {
  //console.log(req.query);
    try {
      const { userEmail, productId } = req.query;
      let user = await User.findOne({ email: userEmail, });
      if(user){
        console.log(user);
      let destroyed = await Cart.findOneAndDelete({user: user._id, product_id: productId})
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
export default removeFromCart;