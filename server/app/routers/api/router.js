const express = require("express");

const router = express.Router();

const { sayWelcome } = require("../../controllers/sayActions");

router.get("/", sayWelcome);

/* ************************************************************************* */
// Import And Use Routers Here
/* ************************************************************************* */

const itemsRouter = require("./items/router");
const programsRouter = require("./programs/router");

router.use("/programs", programsRouter );

router.use("/items", itemsRouter);

/* ************************************************************************* */

module.exports = router;
