const { getHelmets } = require("../controllers/helmet.controller");

const helmetRoute = require("express").Router();

helmetRoute.get("/", getHelmets);

module.exports = { helmetRoute };
