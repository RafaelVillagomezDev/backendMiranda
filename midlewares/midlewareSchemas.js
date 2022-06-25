const Joi = require('joi')
const options = {
  abortEarly: false, // include all errors
  // allowUnknown: true, // ignore unknown props
  // stripUnknown: true // remove unknown props
}

module.exports = (schema) => {
  return async (req, res, next) => {
    try {
      await schema.validateAsync(req.body, options)
      next()
    } catch (error) {
      return res.send(error.details)
    }
  }
}
