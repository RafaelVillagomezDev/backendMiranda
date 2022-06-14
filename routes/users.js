const express = require('express')
const router = express.Router()
const fs = require('fs')

/* GET MOSTRAR TODOS LOS USERS. */

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
      if (clave == 'users') var datos = data.users
    }

    res.send(datos)
  })
})

/*Get a unique User*/
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
    //Podria hacer una ternaria, mejorar este codigo,puedo hacer mucho get y dependiendo de lo que sea en la ruta
    //tipo http://localhost:3000/(users||contact||bookings)/1. Falta validar que el id sea mayor a 0
    //la validacion de clave creo q sobra
    for (var clave in data) {
      if (clave == 'users') {
        for (var m in data.users) {
          if (m == id) {
            var datos = data.users[id - 1]
          }
        }
      }
    }

    res.send(datos)
  })
})

module.exports = router

//EJEMPLO SI EL ID ES 0 ENTONCES MUESTRA ERRO SI NO , MOSTRAMOS OTRA COSA , CON NEXT ROUTE SUDA DE LO Q ESTA EN
//EL IF Y CON NEXT() PASA A LA SIGUIENTE FUNCION
// router.get(
//   '/user/:id',
//   (req, res, next) => {
//     // if the user ID is 0, skip to the next router
//     if (req.params.id === '0') {
//       res.send('Error id de 0')
//       next('route')
//       // otherwise pass control to the next middleware function in this stack
//     } else next()
//   },
//   (req, res, next) => {
//     // render a regular page
//     res.send('no soy 0')
//   },
// )
