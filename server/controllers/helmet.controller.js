const { HELMETSMODELS } = require("../models/helmets.model");

const getHelmets = async (req, res) => {
  try {
    const helmets = await HELMETSMODELS.find();
    return res.status(200).json(helmets);
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
};

module.exports = { getHelmets };
