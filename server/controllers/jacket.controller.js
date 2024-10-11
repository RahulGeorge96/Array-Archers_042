const { JACKETSMODELS } = require("../models/jackets.model");

const getJackets = async (req, res) => {
  try {
    const jackets = await JACKETSMODELS.find();
    return res.status(200).json(jackets);
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
};

module.exports = { getJackets };
