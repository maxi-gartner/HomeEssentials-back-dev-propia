import Cart from '../../models/cart.js';
import User from '../../models/User.js';

const update = async(req, res, next) => {
    try {
        const { userEmail, productId } = req.body;
    
        let user = await User.findOne({ email: userEmail});
        let cart = await Cart.findOne({ user: user._id, product_id: productId});

        if(user){
            if(cart.quantity !== 1){
                const data = {
                    quantity: cart.quantity - 1
                }
                //console.log("cart", cart);
                let update = await Cart.findByIdAndUpdate(
                                            cart._id,
                                            data,
                                            {new: true}
                                            ).populate("product_id")
                    if (update){
                        return res.status(200).json({
                            success: true,
                            message: ["Product updated successfully"],
                            update: update
                        })
                    }else{
                        return res.status(404).json({
                            success: false,
                            message: ["Not found"],
                        })
                    }
            }else{
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
        }else{
            return res.status(404).json({
                success: false,
                message: ["There are no more stocks"],
            })
        }
        
    } catch (error) {
        next(error);
    }
};

export default update