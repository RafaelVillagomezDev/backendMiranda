const express = require('express')
const router = express.Router()
const { getRooms, getRoom } = require('../controllers/controllerRooms')

/* GET contact list. */
router.get('/', getRooms)
router.get('/:id', getRoom)

module.exports = router
