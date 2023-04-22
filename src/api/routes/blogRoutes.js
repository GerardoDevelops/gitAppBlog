const express = require("express");
const { createController, getController, findById, update, deletes } = require("../controllers/blogController");
const router = express.Router();

router.post('/', createController)
router.get('/', getController)
router.get('/:id', findById)
router.put('/:id', update)
router.delete('/:id', deletes)

module.exports = router
