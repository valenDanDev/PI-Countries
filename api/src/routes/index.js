const { Router } = require('express');
const countries_activities = require("./activitiesRouter");
const counties = require("./countriesRouter");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

// Configurar los routers
//router.use("/activities", countries_activities);
router.use("/countries", counties);
// Ejemplo: router.use('/auth', authRouter);


module.exports = router;
