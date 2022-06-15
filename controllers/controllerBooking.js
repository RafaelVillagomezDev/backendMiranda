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

const postBooking = (req, res) => {
  const newBooking = {
    id: data.bookings.length + 1,
    date_messague: req.body.date_messague,
    name_customer: req.body.name_customer,
    email_customer: req.body.email_customer,
    tlf_customer: req.body.tlf_customer,
    subject: req.body.subject,
    comment: req.body.comment,
  }

  data.bookings.push(newBooking)
  res.json(newBooking)
}

module.exports = {
  getBookings,
  getBooking,
  postBooking,
}
