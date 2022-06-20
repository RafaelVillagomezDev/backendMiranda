var createError = require('http-errors')
const cors = require('cors')
var express = require('express')
var path = require('path')
var cookieParser = require('cookie-parser')
var logger = require('morgan')
// const mongoose = require('mongoose')
const passport = require('passport')
const process = require('process')
require('dotenv').config()
require('./auth/auth')

// mongoose.connect(
//   'mongodb://localhost:27017/MirandaTest',
//   { useNewUrlParser: true, useUnifiedTopology: true },
//   (err) => {
//     if (err) {
//       console.log('Error conexion')
//     } else {
//       console.log('conexion establecida')
//     }
//   },
// )

const mysql = require('mysql')
const connection = mysql.createConnection({
  host: 'localhost',
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASS,
  database: process.env.MYSQL_DB,
})

connection.connect()

connection.query('SELECT 1 + 1 AS solution', (err, rows, fields) => {
  if (err) throw err

  console.log('The solution is: ', rows[0].solution)
})

connection.end()

//Files Routes
const usersRouter = require('./routes/users')
const contactRouter = require('./routes/contacts')
const bookingRouter = require('./routes/bookings')
const roomRouter = require('./routes/rooms')
const authRouter = require('./routes/authentication')

var app = express()
app.use(cors())
// view engine setup
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'jade')

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))

//ROUTES
app.use('/user', passport.authenticate('jwt', { session: false }), usersRouter)
app.use('/contacts', contactRouter)
app.use('/bookings', bookingRouter)
app.use('/rooms', roomRouter)

//Autenticacion passport
app.use('/', authRouter)

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404))
})

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message
  res.locals.error = req.app.get('env') === 'development' ? err : {}

  // render the error page
  res.status(err.status || 500)
  res.render('error')
})

module.exports = app
