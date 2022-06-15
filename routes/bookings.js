const express = require('express')
const router = express.Router()

const { getBookings, getBooking } = require('../controllers/controllerBooking')

/* GET bookings list. */
router.get('/', getBookings)
/*GEY unique Booking*/
router.get('/:id', getBooking)

module.exports = router
