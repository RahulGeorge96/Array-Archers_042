const { getGloves } = require("../controllers/glove.controller");

const gloveRoute = require("express").Router();

gloveRoute.get("/", getGloves);

module.exports = { gloveRoute };
