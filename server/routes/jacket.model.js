const { getJackets } = require("../controllers/jacket.controller");

const jacketRoute = require("express").Router();

jacketRoute.get("/", getJackets);

module.exports = { jacketRoute };
