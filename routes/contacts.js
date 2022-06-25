const express = require('express')
const router = express.Router()

const {
  getContacts,
  postContact,
} = require('../controllers/controllerContacts')

const { contactSchema } = require('../schemas/shemas')
const valContactSchema = require('../midlewares/midlewareSchemas')

/* GET Contacts */
router.get('/', getContacts)

router.post('/create', valContactSchema(contactSchema), postContact)

module.exports = router
