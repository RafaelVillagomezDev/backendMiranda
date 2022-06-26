// const data = require('../fakeData.json')
const express = require('express')
const passport = require('passport')

const getRooms = (req, res) => {
  console.log(data.rooms)
  res.json(data.rooms)
}

const getRoom =
  (passport.authenticate('jwt', { session: false }),
  (req, res, next) => {
    res.json({
      messague: 'Good job',
      room: data.rooms,
      token: req.query.secret_token,
    })
  })

const postRoom = (req, res) => {
  res.send('Habita añadida')
}

module.exports = {
  getRooms,
  getRoom,
  postRoom,
}
