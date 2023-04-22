const express = require("express");
const { createController, getController, findById } = require("../controllers/blogController");
const router = express.Router();

router.post('/', createController)
router.get('/', getController)
router.get('/:id', findById)

module.exports = router
