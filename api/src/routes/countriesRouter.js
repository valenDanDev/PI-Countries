const { Router } = require("express");
const { getallcountries } = require("../controllers/countriesController");

const countryRouter = Router();

countryRouter.get("/", getallcountries);

module.exports = countryRouter;