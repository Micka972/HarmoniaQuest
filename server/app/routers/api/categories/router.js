const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */
const { getCategories, getCategoryById } = require("../../../controllers/categoryActions");

router.get("/", getCategories);

router.get("/:id", getCategoryById);
/* Here you code */

/* ************************************************************************* */

module.exports = router;