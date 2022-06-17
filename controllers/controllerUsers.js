const data = require('../fakeData.json')
const UserShema = require('../models/userSchema')
const bcrypt = require('bcrypt')

const getUsers = (req, res) => {
  res.json(data.users)
}

const getUser = (req, res) => {
  const id = req.params.id
  const user = data.users.find((room) => room.id == id)
  if (!user) {
    res.status(404).send('Usuario no encontrada')
  }
  res.json(user)
}

const postUser = (req, res) => {
  const user = new UserShema({
    username: req.body.username,
    password: bcrypt.hashSync(req.body.password, 10),
  })

  user.save().then((data) => {
    res.json(data)
  })
}

module.exports = {
  getUsers,
  getUser,
  postUser,
}
