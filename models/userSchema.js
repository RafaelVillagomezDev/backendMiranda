const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

const userSchema = mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
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
