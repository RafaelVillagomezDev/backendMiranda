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
      if (clave == 'rooms') var datos = data.rooms
    }

    res.send(datos)
  })
})

module.exports = router
