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
      if (clave == 'users') var datos = data.users
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
