const express = require("express");
const { createController, getController } = require("../controllers/blogController");
const router = express.Router();

router.post('/', createController)
router.get('/', getController)

module.exports = router
