const express = require("express");
const { createController, getController, findById, update } = require("../controllers/blogController");
const router = express.Router();

router.post('/', createController)
router.get('/', getController)
router.get('/:id', findById)
router.put('/:id', update)

module.exports = router
