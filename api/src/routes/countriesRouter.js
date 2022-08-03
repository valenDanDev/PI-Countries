const { Router } = require("express");
const { getallcountries,getCountryById,getCountryByName,ejemplo } = require("../controllers/countriesController");

const countryRouter = Router();

countryRouter.get("/", getallcountries);
countryRouter.get("/country/:id", getCountryById);
countryRouter.get("/search/:name", getCountryByName);

module.exports = countryRouter;