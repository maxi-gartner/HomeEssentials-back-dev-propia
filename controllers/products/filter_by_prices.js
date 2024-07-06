import Product from "../../models/Product.js";

// Controlador para obtener los productos ordenados por precio ascendente o descendente
const getProductsByPriceOrder = async (req, res) => {
  const { order } = req.query;

  try {
    let products;

    if (order === 'asc') {
      products = await Product.find().sort({ price: 1 });
    } else if (order === 'desc') {
      products = await Product.find().sort({ price: -1 });
    } else {
      return res.status(400).json({ message: 'Invalid order parameter' });
    }

    res.status(200).json(products);
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: 'An error occurred', error });
  }
};

export default getProductsByPriceOrder