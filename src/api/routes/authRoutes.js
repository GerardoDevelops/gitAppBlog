const express = require("express");
const { loginController } = require("../controllers");
const router = express.Router();

router.get('/', loginController)

module.exports = router
