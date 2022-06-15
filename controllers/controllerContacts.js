const data = require('../fakeData.json')
const express = require('express')

const getContacts = (req, res) => {
  res.json(data.contacts)
}

const getContact = (req, res) => {
  const id = req.params.id
  const contact = data.contacts.find((ctact) => ctact.id == id)
  if (!contact) {
    res.status(404).send('Contacto no encontrado')
  }
  res.json(contact)
}

module.exports = {
  getContacts,
  getContact,
}
