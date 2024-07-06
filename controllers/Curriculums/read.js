import Curriculums from '../../models/Curriculums.js'


const getAllCurriculums = async (req, res) => {
  try {
    const curriculums = await Curriculums.find();
    res.status(200).json({ success: true, curriculums });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'An error has occurred' });
  }
};

export default getAllCurriculums;