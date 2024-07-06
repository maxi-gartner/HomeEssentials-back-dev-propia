import Order from '../../models/orders.js';


const updateOrderStatus = async (req, res) => {
  const { orderId, newStatus } = req.body;

  try {
   
    const order = await Order.findById(orderId);

    if (!order) {
      return res.status(404).json({ message: 'Order not found' });
    }

   
    order.order.status = newStatus;
    await order.save();

    return res.status(200).json({ message: 'Status modified' });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Error in the server' });
  }
};

export default updateOrderStatus;