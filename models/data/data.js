import 'dotenv/config.js'
import '../../config/database.js'
import { users } from './users.js'
import { categories } from './categories.js'
import { manufacturers } from './manufacturers.js'
import { products } from './products.js'
import User from '../User.js'
import Category from '../Category.js'
import Manufacturer from '../Manufacturer.js'
import Product from '../Product.js'


let newUsers = async(users) => await User.insertMany(users)
let newCategories = async(categories) => await Category.insertMany(categories)
let newManufacturers = async(manufacturers) => await Manufacturer.insertMany(manufacturers)

let newProducts = async(products) => {
    for (let product of products) {
        let category = await Category.findOne({ name: product.category_id })
        let manufacturer = await Manufacturer.findOne({ name: product.manufacturer_id })
        product.manufacturer_id = manufacturer._id
        product.category_id = category._id
        await Product.create(product)
    }
}

let data = async () => {
  
    await newUsers(users)
    await newCategories(categories)
    await newManufacturers(manufacturers)
    await newProducts(products)
  
    console.log('done!')
}

data()