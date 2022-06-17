const express = require('express')
const passport = require('passport')
const router = express.Router()
const {
  getRooms,
  getRoom,
  postRoom,
} = require('../controllers/controllerRooms')

/* GET contact list. */
router.get(
  '/',
  passport.authenticate('jwt', { session: false }),
  (req, res, next) => {
    getRooms
  },
)
router.get('/:id', getRoom)
router.post('/room/add', postRoom)
module.exports = router
