const data = require('../fakeData.json')
const UserShema = require('../models/userSchema')
const bcrypt = require('bcrypt')

// const getUser = (req, res) => {
//   const id = req.params.id
//   const user = data.users.find((room) => room.id == id)
//   if (!user) {
//     res.status(404).send('Usuario no encontrada')
//   }
//   res.json(user)
// }

const getProfile = (req, res, next) => {
  console.log(req.user)
  res.json({
    message: 'Es una ruta segura',
    user: req.user,
    token: req.query.secret_token,
  })
}

module.exports = {
  getProfile,
}
