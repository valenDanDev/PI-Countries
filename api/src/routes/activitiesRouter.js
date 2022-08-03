const { Router } = require("express");
const { postActivities,getallactivities } = require("../controllers/activitiesController");

const countryRouter = Router();

countryRouter.post("/create", postActivities);
countryRouter.get("/", getallactivities);
module.exports = countryRouter;