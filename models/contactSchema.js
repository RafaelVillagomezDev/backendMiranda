const mongoose = require('mongoose')

//Validacion email
const validateEmail = (email) => {
  const re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
  return re.test(email)
}

const validateStatus = (status) => {
  const re = /^(active|inactive)$/i
  return re.test(status)
}

const validatePosition = (position) => {
  const re = /^(manager|recepcionist|room service)$/i
  return re.test(position)
}

const validatePhone = (phone) => {
  const re = /^\s*(?:\+?(\d{1,3}))?([-. (]*(\d{3})[-. )]*)?((\d{3})[-. ]*(\d{2,4})(?:[-.x ]*(\d+))?)\s*$/
  return re.test(phone)
}

const photosSchema = mongoose.Schema({ url: 'string' })

const contactSchema = mongoose.Schema({
  date: {
    type: Date,
    trim: true,
    default: Date.now,
  },
  id_mesague: {
    type: Number,
    trim: true,
    required: true,
  },
  customer: {
    type: String,
    trim: true,
    required: true,
    unique: true,
  },
  email: {
    trim: true,
    required: true,
    unique: true,
    validate: [validateEmail, 'Porfavor introduzca un email valido'],
  },
  phone: {
    type: String,
    trim: true,
    unique: true,
    validate: [validatePhone, 'Porfavor introduzca un telefono  valido '],
  },
  matter: {
    type: String,
    trim: true,
  },
  comment: {
    type: String,
    trim: true,
  },
})

module.exports = mongoose.model('Contact', contactSchema)
