// const valUserSchema = (schema) => {
//   return async (req, res, next) => {
//     try {
//       await schema.validateAsync(req.body)
//       next()
//     } catch (error) {
//       res.send(error.messague)
//     }
//   }
// }

module.exports = (schema) => {
  return async (req, res, next) => {
    try {
      await schema.validateAsync(req.body)
      next()
    } catch (error) {
      res.send(error.messague)
    }
  }
}
