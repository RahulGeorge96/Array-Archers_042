const { BIKEMODEL } = require("../models/bikes.model");

const getBikes = async (req, res) => {
  try {
    const bikes = await BIKEMODEL.find();
    return res.status(200).json(bikes);
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
};

module.exports = { getBikes };
