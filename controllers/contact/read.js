import Contact from '../../models/Contact.js'


const getAllContacts = async (req, res) => {
  try {
    const contact = await Contact.find();
    res.status(200).json({ success: true, contact });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'An error has occurred' });
  }
};

export default getAllContacts;