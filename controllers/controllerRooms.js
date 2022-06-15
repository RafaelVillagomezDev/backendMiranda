const data = require('../fakeData.json')
const express = require('express')

const getRooms = (req, res) => {
  res.json(data.rooms)
}

const getRoom = (req, res) => {
  const id = req.params.id
  const room = data.rooms.find((room) => room.id == id)
  if (!room) {
    res.status(404).send(' Habitacion no encontrada')
  }
  res.json(room)
}

const postRoom = (req, res) => {
  res.send('Habita añadida')
}

module.exports = {
  getRooms,
  getRoom,
  postRoom,
}
