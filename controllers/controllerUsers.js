const data = require('../fakeData.json')
const express = require('express')

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

module.exports = {
  getUsers,
  getUser,
}
