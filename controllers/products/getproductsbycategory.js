import Product from '../../models/Product.js';
import Category from '../../models/Category.js';

const getProductsByCategory = async (req, res) => {
  try {
    const { categoryId } = req.params;

    const products = await Product.find({ category_id: categoryId })
      .populate('category_id', 'name');

    if (products.length === 0) {
      return res.status(404).json({ message: 'No products found for the specified category' });
    }

    res.json(products);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'An error occurred while retrieving products' });
  }
};

export default getProductsByCategory;