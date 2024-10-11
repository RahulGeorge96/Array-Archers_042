const { getBikes } = require("../controllers/bike.controller");

const bikeRoute = require("express").Router();

bikeRoute.get("/", getBikes);

module.exports = { bikeRoute };
