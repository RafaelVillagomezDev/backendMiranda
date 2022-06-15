const express = require('express')
const router = express.Router()
const {
  getRooms,
  getRoom,
  postRoom,
} = require('../controllers/controllerRooms')

/* GET contact list. */
router.get('/', getRooms)
router.get('/:id', getRoom)
router.post('/room/add', postRoom)
module.exports = router
