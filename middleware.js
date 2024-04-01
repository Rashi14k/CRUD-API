const {body,validationResult}=require('express-validator')

//to get current date in string type
let d=new Date()
let year=d.getFullYear()
let month=d.getMonth()
let day=d.getDay()
let bf=new Date(year-18,month,day).toDateString()
let af=new Date(year-30,month,day).toDateString()

const sValidator = [
    body('email', 'Invalid does not Empty').not().isEmpty(),
    body('email', 'Invalid email').isEmail(),
    body('phone', 'phone number length should be 10 characters').isLength({min:10,max:10}).isNumeric(),
    body('dob','enter a valid date').isDate().isBefore(bf).isAfter(af)
  ]
const studentValidator=(req, res,next) => {
    console.log("inside middleware")
    const errors = validationResult(req)
    if (errors.isEmpty()) {
      // in case request params meet the validation criteria
        return next()
    }
    else{
        res.status(422).json({errors: errors.array()})
    }
  }
  module.exports={sValidator,studentValidator}
  
