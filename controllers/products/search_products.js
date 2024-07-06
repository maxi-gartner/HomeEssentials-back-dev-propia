import Product from "../../models/Product.js";
export const searchProducts = async (req, res) => {
    try {
      const { searchQuery } = req.query;
  
      // Realiza la búsqueda en la base de datos
      const products = await Product.find({
        name: { $regex: searchQuery, $options: "i" },
      });
  
      res.status(200).json(products);
    } catch (error) {
      res.status(500).json({ error: "Error al buscar productos" });
    }
  };
  
export default searchProducts;