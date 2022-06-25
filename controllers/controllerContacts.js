const express = require('express')

const db = require('../db/db')

const getContacts = (req, res) => {
  let sql = 'SELECT * FROM contacts'

  db.query(sql, function (err, contacts, fields) {
    if (err) throw err
    res.json({
      status: 200,
      contacts,
      message: 'User contact retrieved successfully',
    })
  })
}

const postContact = (req, res) => {
  try {
    const {
      date_messague,
      customer_name,
      customer_email,
      customer_phone,
      matter,
      comment,
    } = req.body
    let sql = `INSERT INTO
    contacts (customer_name,customer_email,customer_phone, matter, comment )
    VALUES ("${customer_name}", "${customer_email}", "${customer_phone}", "${matter}", "${comment}")
    `
    db.query(sql, function (err, contacts, fields) {
      if (err) throw err
      res.json({
        status: 200,
        contacts,
        message: 'Contact retrieved successfully',
      })
    })
  } catch (error) {
    next(error)
  }
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
  postContact,
}
