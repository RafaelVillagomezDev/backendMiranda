const express = require('express')
const router = express.Router()

const {
  getBookings,
  getBooking,
  postBooking,
} = require('../controllers/controllerBooking')

/* GET bookings */
router.get('/', getBookings)
router.get('/:id', getBooking)
/*POST bookings*/
router.post('/booking', postBooking)
module.exports = router
