const express = require('express')
const router = express.Router()
const fs = require('fs')

/* GET users list. */

router.get('/', (req, res, next) => {
  fs.readFile(__dirname + '/' + '../fakeData.json', 'utf8', function (
    err,
    data,
  ) {
    if (err) {
      throw err
    }
    data = JSON.parse(data)
    //Podria hacer una ternaria
    for (var clave in data) {
      if (clave == 'bookings') var datos = data.bookings
    }

    res.send(datos)
  })
})

/*Get a unique Booking*/
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
      if (clave == 'bookings') {
        for (var m in data.bookings) {
          if (m == id) {
            var datos = data.bookings[id - 1]
          }
        }
      }
    }

    res.send(datos)
  })
})

module.exports = router
