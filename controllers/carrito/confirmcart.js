import Cart from '../../models/cart.js';
import Product from '../../models/Product.js';
import User from '../../models/User.js';
import Order from '../../models/orders.js'
const confirmPurchase = async (req, res) => {
  try {
    const { userEmail } = req.query;
    //console.log(req.body);
    let user = await User.findOne({ email: userEmail});
    const cart = await Cart.find({ user: user._id });

    if (cart.length === 0) {
      return res.status(404).json({ message: "The cart doesn't exist or is empty" });
    }



    
    // recorremos los items de lcarrito
    const products = [];
for (const item of cart) {
  const product = await Product.findOne({ _id: item.product_id });
  if (product) {
    products.push({
      name: product.name,
      description: product.description,
      price: product.price,
      price_offer: product.price_offer,
      percentage_offer: product.percentage_offer,
      quantity: item.quantity,
      category_id: product.category_id,
      manufacturer_id: product.manufacturer_id,
    });

   
    const update = await Product.findByIdAndUpdate(
      product._id,
      { stock_Available: product.stock_Available - 1 },
      { new: true }
    );
    if (update) {
      console.log(`${product.name} actualizado`);
    }

    await Cart.findOneAndDelete({ user: user._id });
  }
}
const order = await Order.create({
  user: {
    name: user.name,
    lastName: user.lastName,
    email: user.email,
    address: req.body.address,
    country: req.body.country,
    dni: req.body.dni,
    phoneNumber: req.body.phoneNumber
  },
  product: products,
  order: {
    status: 'In progress',
    address: 'chile 614',
  },
});
    return res.status(200).json({
        success: true,
        message: ["Congratulations, successful purchase"]
    })
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'An error has occurred' });
  }
};

export default confirmPurchase;