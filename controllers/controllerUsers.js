const data = require('../fakeData.json')
require('../app')

// const bcrypt = require('bcrypt')

// const getUser = (req, res) => {
//   const id = req.params.id
//   const user = data.users.find((room) => room.id == id)
//   if (!user) {
//     res.status(404).send('Usuario no encontrada')
//   }
//   res.json(user)
// }

const getProfile = (req, res, next) => {
  let sql = `SELECT * FROM users`
}

module.exports = {
  getProfile,
}
