const data = require('../fakeData.json')

const getBookings = (req, res) => {
  res.json(data.bookings)
}

const getBooking = (req, res) => {
  const id = req.params.id
  const booking = data.contacts.find((bk) => bk.id == id)
  if (!booking) {
    res.status(404).send('Contacto no encontrado')
  }
  res.json(booking)
}

module.exports = {
  getBookings,
  getBooking,
}
