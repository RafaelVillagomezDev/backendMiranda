const data = require('../fakeData.json')
const bcrypt = require('bcrypt')
const User = require('../models/userSchema')
// const getUser = (req, res) => {
//   const id = req.params.id
//   const user = data.users.find((room) => room.id == id)
//   if (!user) {
//     res.status(404).send('Usuario no encontrada')
//   }
//   res.json(user)
// }

const getProfile = (req, res, next) => {
  const email = req.user.email
  User.findOne({ email }, function (error, user) {
    if (error) {
      res.json({
        error: error,
      })
    } else {
      res.json({
        message: 'Es una ruta segura',
        email: user.email,
        password: user.password,
        phone: user.phone,
        description: user.description,
        status: user.status,
        position: user.position,
        startdate: user.startdate,
        token: req.query.secret_token,
      })
    }
  })
}

module.exports = {
  getProfile,
}
