const data = require('../fakeData.json')
const bcrypt = require('bcrypt')
const User = require('../models/userSchema')

const getProfile = (req, res, next) => {
  const email = req.user.email

  User.findOne({ email }, function (error, user) {
    if (error) {
      res.json({
        error: error,
      })
    } else {
      res.json(user)
    }
  })
}

//Peticion para que solamente un usuario con posicion de manager pueda ver todos los usuarios//
const getUsers = (req, res) => {
  let currentPosition = req.user.position
  if (currentPosition == 'manager') {
    User.find((error, users) => {
      if (error) {
        res.json({
          error: error,
        })
      } else {
        res.json(users)
      }
    })
  } else {
    res.json({
      messague: 'El usuario no tiene permisos ',
    })
  }
}
//Eliminar usuario por id //
const deleteUser = (req, res) => {
  User.findOneAndRemove({ _id: req.params.id })
    .then((user) => {
      if (!user) {
        res.status(400).send(req.params.id + 'No se ha podido eliminar')
      } else {
        res
          .status(200)
          .send(req.params.id + ' Usuario ha sido eliminado correctamente.')
      }
    })
    .catch((err) => {
      console.error(err)
      res.status(500).send('Error: ' + err)
    })
}

module.exports = {
  getProfile,
  getUsers,
  deleteUser,
}
