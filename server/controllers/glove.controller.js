const { GLOVESMODEL } = require("../models/gloves.model");

const getGloves = async (req, res) => {
  try {
    const gloves = await GLOVESMODEL.find();
    return res.status(200).json(gloves);
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
};

module.exports = { getGloves };
