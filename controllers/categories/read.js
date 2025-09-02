import Category from "../../models/Category.js"

let read = async (req, res, next) => {
  try {
    // Busco todas las categorías
    let all = await Category.find()

    // Respondo al cliente con las categorías
    return res.status(200).json({
      categories: all,
    })
  } catch (error) {
    // Capturo el error correctamente
    console.log(error)
    return res.status(400).json({ error: "Ha ocurrido un problema" })
  }
}

export default read
