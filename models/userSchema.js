const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

const userSchema = mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
  },
})
//Ciframos la password con Bcrypt , this.password se refiere al Shema
userSchema.pre('save', async function (next) {
  const bcryptPassword = bcrypt.hash(this.password, 10)
  this.password = bcryptPassword
  next()
})
//Metodo para validar la password q ingresamos con la de la BBDD
userSchema.methods.isValidPassword = async function (password) {
  const compare = await bcrypt.compare(password, this.password)
  return compare
}

module.exports = mongoose.model('Users', userSchema)
