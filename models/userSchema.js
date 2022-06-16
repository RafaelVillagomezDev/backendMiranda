const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
  username: String, // String is shorthand for {type: String}
  password: Number,
})

module.exports = mongoose.model('Users', userSchema)
