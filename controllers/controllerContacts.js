const express = require('express')

const db = require('../db/db')

const getContacts = (req, res) => {
  let sql = 'SELECT * FROM contacts'

  db.query(sql, function (err, users, fields) {
    if (err) throw err
    res.json({
      status: 200,
      users,
      message: 'User contact retrieved successfully',
    })
  })
}

// const getContact = (req, res) => {
//   const id = req.params.id
//   const contact = data.contacts.find((ctact) => ctact.id == id)
//   if (!contact) {
//     res.status(404).send('Contacto no encontrado')
//   }
//   res.json(contact)
// }

module.exports = {
  getContacts,
  // getContact,
}
