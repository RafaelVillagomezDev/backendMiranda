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

/*Get a unique Contact */
router.get('/:id', (req, res, next) => {
  fs.readFile(__dirname + '/' + '../fakeData.json', 'utf8', function (
    err,
    data,
  ) {
    if (err) {
      throw err
    }

    data = JSON.parse(data)
    const id = req.params['id'].trim()

    for (var clave in data) {
      if (clave == 'contacts') {
        for (var m in data.contacts) {
          if (m == id) {
            var datos = data.contacts[id - 1]
          }
        }
      }
    }

    res.send(datos)
  })
})

module.exports = router
