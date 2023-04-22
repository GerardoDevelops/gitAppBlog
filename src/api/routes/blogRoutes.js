const express = require("express");
const { createController } = require("../controllers/blogController");
const router = express.Router();

router.post('/', createController)

module.exports = router
