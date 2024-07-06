import Cart from '../../models/cart.js';
import User from '../../models/User.js';



import mercadopago from 'mercadopago'

const payment = async (req, res, next) => {

    mercadopago.configure({ access_token: process.env.ACCESS_TOKEN })

    try {
        const { unit_price } = req.body;

 
        const preference = {
            items: [
                {
                    title: req.body.id,
                    unit_price: parseFloat(unit_price),
                    quantity: 1,
                },
            ],
            
            back_urls: {
                success: 'http://localhost:5173/',
                failure: '',
                pending: '',
            },
            
        };

        const response = await mercadopago.preferences.create(preference);

        res.status(201).json({ preferenceId: response.body.id });
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'You could not donate due to an error' });
    }
};

export default payment;