const Joi = require('joi')

// //Creacion Objeto para validad enum de status
// const userStatus = {
//   active: 'active',
//   inactive: 'inactive',
// }

// const positionUser = {
//   manager: 'manager',
//   recepcionist: 'recepcionist',
//   room_service: 'room service',
// }

// const userShema = Joi.object().keys({
//   photouser_id: Joi.number().integer().required(),
//   fullname: Joi.string().min(2).required(),
//   user_email: Joi.string().email().required(),
//   //Validacion telephone .!!No acepta 926 3 4,8 800 600-APPLE!!
//   telephone: Joi.string()
//     // .pattern(
//     //   /^\s*(?:\+?(\d{1,3}))?([-. (]*(\d{3})[-. )]*)?((\d{3})[-. ]*(\d{2,4})(?:[-.x ]*(\d+))?)\s*$/gm,
//     // )
//     // .min(9)
//     // .max(18)
//     .required(),
//   stardate: Joi.date().timestamp('javascript'),
//   description: Joi.string().min(1),
//   contact: Joi.string(),
//   status: Joi.string().valid(userStatus.active, userStatus.inactive),
//   position: Joi.string().valid(
//     positionUser.manager,
//     positionUser.recepcionist,
//     positionUser.room_service,
//   ),
//   password: Joi.string().min(1).required(),
// })

// const bedType = {
//   singleBed: 'Single Bed',
//   doubleBed: 'Double Bed',
//   suite: 'Suite',
//   doubleSuperior: 'Double Superior',
// }

// const facilities = {
//   ac: 'AC',
//   shower: 'Shower',
//   doubleBed: 'Double bad',
//   towel: 'Towel',
//   bathup: 'Bathup',
//   coffee: 'coffee',
//   ledTv: 'ledTv',
//   wifi: 'wifi',
// }

// const roomsShema = Joi.object().keys({
//   fullname: Joi.string().valid(
//     bedType.singleBed,
//     bedType.doubleBed,
//     bedType.suite,
//     bedType.doubleSuperior,
//   ),
//   bed_type: Joi.string().email().required(),
//   //Validacion telephone .!!No acepta 926 3 4,8 800 600-APPLE!!
//   photo_id: Joi.number().required(),
//   description: Joi.string(),
//   price: Joi.number().min(1).required(),
//   discount: Joi.number().min(1).max(2),
//   offer_price: Joi.number().min(1),
//   cancellation: Joi.string(),
//   facilities: Joi.string(),
//   //.valid(
//   //     facilities.ac.facilities.shower,
//   //     facilities.doubleBed,
//   //     facilities.towel,
//   //     facilities.bathup,
//   //     facilities.cod,
//   //     facilities.ledTv,
//   //     facilities.wifi,
//   //   ),
// })

module.exports = {
  contactSchema: Joi.object({
    customer_name: Joi.string(),
    customer_email: Joi.string().email().required(),
    //Validacion telephone .!!No acepta 926 3 4,8 800 600-APPLE!!
    customer_phone: Joi.string(),
    matter: Joi.string(),
    comment: Joi.string(),
  }),
}
