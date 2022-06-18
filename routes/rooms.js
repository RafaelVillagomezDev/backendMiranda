const express = require('express')
const passport = require('passport')
const router = express.Router()
const {
  getRooms,
  getRoom,
  postRoom,
} = require('../controllers/controllerRooms')

//Auth
require('../auth/auth')

/* GET contact list. */
router.get('/rm')
router.get('/:id', getRoom)
router.post('/room/add', postRoom)
module.exports = router
