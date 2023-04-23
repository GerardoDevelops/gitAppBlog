const express = require("express");
const { categorisController } = require("../controllers");
const router = express.Router();

router.get('/', categorisController)

module.exports = router
