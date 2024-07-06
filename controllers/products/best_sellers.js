import Product from "../../models/Product.js";

const read = async (req, res, next) => {
  try {
    const pageSize = 5; // Número de productos por página
    const page = req.query.page || 1; // Página actual (por defecto: página 1)
    const skip = (page - 1) * pageSize; // Cálculo de los productos a omitir
    const sortBy = "stock_Available"; // Campo por el que se ordenarán los productos

    const totalCount = await Product.countDocuments(); // Total de productos en la colección
    const totalPages = Math.ceil(totalCount / pageSize); // Número total de páginas

    const products = await Product.find()
      .sort({ [sortBy]: 1 }) // Orden ascendente por stock_Available
      .skip(skip) // Omite los productos según la página actual
      .limit(pageSize); // Limita los productos por página

    return res.status(200).json({
      products,
      page,
      totalPages,
      totalCount,
    });
  } catch (error) {
    console.log(error);
    return res.status(400).json({ error: "Ha ocurrido un problema" });
  }
};

export default read;