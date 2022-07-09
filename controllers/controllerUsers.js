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

module.exports = {
  getProfile,
  getUsers,
}
