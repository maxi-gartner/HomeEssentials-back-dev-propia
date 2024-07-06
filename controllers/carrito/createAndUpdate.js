import Cart from '../../models/cart.js';
import User from '../../models/User.js';
import Product from '../../models/Product.js';

const addAndUpdateToCart = async (req, res) => {
  try {
    const { userEmail, productId } = req.body;

    let user = await User.findOne({ email: userEmail});
    let product = await Product.findOne({ _id: productId});

    if(user && product){
      let cart = await Cart.findOne({ user: user._id, product_id: productId});
      if (!cart) {
        const data = { 
                        user : user._id,
                        product_id: productId,
                        quantity: 1
                      }
        let one = await Cart.create(data)
        one = await one.populate("product_id")
        const oneFilter = {
          product_id: one.product_id,
          quantity: one.quantity
        }
        if(one){  
            return res.status(201).json({
              one: oneFilter,
              message: ["Product added to cart successfully"],
              timestamps: one.createdAt
            })
          }else{
            return res.status(404).json({
              success: false,
              message: ["Not found"],
            })
          }
      }else{
        if(product.stock_Available > cart.quantity){
          const data = {
            quantity: cart.quantity + 1
          }
          console.log("cart", cart);
          let update = await Cart.findByIdAndUpdate(
                                    cart._id,
                                    data,
                                    {new: true},
                                  ).populate("product_id").select("-_id product_id quantity")
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
            return res.status(404).json({
              success: false,
              message: ["There are no more stocks"],
            })
          }
        }
    }else{
      return res.status(404).json({
        success: false,
        message: ["User or product does not exist"],
      })
    }
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: 'User or product does not exist'});
  }
};

export default addAndUpdateToCart;