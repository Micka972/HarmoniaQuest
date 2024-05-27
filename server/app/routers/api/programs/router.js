const express = require("express");

const router = express.Router();

const { browse }  = require("../../../controllers/programmeActions");

router.get("/", browse);

module.exports = router;