import Order from "../../models/orders.js";

const getAllOrders = async (req, res) => {
  try {
    const orders = await Order.find();
    res.status(200).json({ success: true, orders });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "An error has occurred" });
  }
};

export default getAllOrders;
