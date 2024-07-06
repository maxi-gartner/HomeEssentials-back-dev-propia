import Cart from '../../models/cart.js';
import User from '../../models/User.js';

// Controlador para ver el contenido del carrito de compras
const viewCart = async (req, res) => {
  try {
    const { userEmail } = req.params; 
    let user = await User.findOne({ email: userEmail});
    const carts = await Cart.find({ user: user._id },"-_id product_id quantity").populate("product_id");
    //console.log(carts);
    if (carts) {
        res.status(200).json({
          success: true,
          response: carts
      })
    }else{
        return res.status(404).json({
          success: false,
          message: ["The carts does not exist"],
      })
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'An error occurred' });
  }
};

export default viewCart;