import Product from "../../models/Product.js";

let update = async (req, res, next) => {
  try {
    let productId = req.params.id.trim(); 
    let product = await Product.findByIdAndUpdate(productId, req.body, {
      new: true,
    });

    return res.status(200).json({
      success: true,
      product,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      error: "Error updating the product",
    });
  }
};

export default update;