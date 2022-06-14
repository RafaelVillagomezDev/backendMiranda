const express = require('express')
const router = express.Router()
const fs = require('fs')

/* GET contacts list. */

router.get('/', (req, res, next) => {
  fs.readFile(__dirname + '/' + '../fakeData.json', 'utf8', function (
    err,
    data,
  ) {
    if (err) {
      throw err
    }
    data = JSON.parse(data)
    for (var clave in data) {
      if (clave == 'contacts') var datos = data.contacts
    }

    res.send(datos)
  })
})

module.exports = router
