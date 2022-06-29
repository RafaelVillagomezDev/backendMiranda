const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
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

const userSchema = mongoose.Schema({
  email: {
    type: String,
    //Me elimina los espacios enblanco para guardarlos en mi bdd
    trim: true,
    required: true,
    unique: true,
    validate: [validateEmail, 'Porfavor introduzca un email valido'],
  },
  password: {
    type: String,
    required: true,
    trim: true,
  },
  startdate: {
    type: Date,
    trim: true,
    default: Date.now,
  },
  phone: {
    type: String,
    trim: true,
    unique: true,
    validate: [validatePhone, 'Porfavor introduzca un telefono  valido '],
  },
  description: {
    type: String,
    trim: true,
  },
  status: {
    type: String,
    trim: true,
    validate: [validateStatus, 'Porafavor introduzca active o inactive'],
  },
  position: {
    type: String,
    trim: true,
    validate: [
      validatePosition,
      'Porfavor introduzca manager o recepcionist o room service',
    ],
  },
  // photos: {
  //   type: mongoose.Schema.Types.ObjectId,
  //   ref: 'User',
  //   required: true,
  // },
})

//Ciframos la password con Bcrypt , this.password se refiere al Shema
//Pre : Las funciones previas al middleware se ejecutan una tras otra, cuando cada middleware llama a next.
// Mooongose pre es un Hook
userSchema.pre('save', async function (next) {
  const hash = await bcrypt.hashSync(this.password, 10)

  this.password = hash
  next()
})

//No entiendo por que falla el metodo , puede que se apor que tengo que instaciar un obj en Auth
//Metodo para validar la password q ingresamos con la de la BBDD
// userSchema.methods.isValidPassword = async function (password) {
//   console.log('entro a validar')

//   const compare = await bcrypt.compare(password, this.password)

//   return compare
// }

module.exports = mongoose.model('User', userSchema)
