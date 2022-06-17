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
//Pre : Las funciones previas al middleware se ejecutan una tras otra, cuando cada middleware llama a next.
// Mooongose pre es un Hook
userSchema.pre('save', async function (next) {
  const bcryptPassword = bcrypt.hashSync(this.password, 10)
  this.password = bcryptPassword
  next()
})
//Metodo para validar la password q ingresamos con la de la BBDD
userSchema.methods.isValidPassword = async function (password) {
  const user = this
  const compare = await bcrypt.compare(password, user.password)
  return compare
}

module.exports = mongoose.model('Users', userSchema)
