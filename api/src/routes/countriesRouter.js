const { Router } = require("express");
const { getallcountries,getCountryById,getCountryByName } = require("../controllers/countriesController");

const countryRouter = Router();

countryRouter.get("/", getallcountries);
countryRouter.get("/country/:id", getCountryById);
countryRouter.get("/country", getCountryByName);


module.exports = countryRouter;