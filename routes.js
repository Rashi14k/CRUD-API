const express=require('express')
const router=new express.Router()
const controller=require('./controller.js')
const {sValidator,studentValidator}=require('./middleware.js')
router.get('/',(req,res)=>{
    res.status(200).send({
        success:true
    })
})

//create student data
router.post('/student',sValidator,studentValidator,controller.createStudent)

//view student data
router.get('/student',controller.viewstudent)

//to update student data by id
router.put('/student/:id',controller.updateById)
 
//to delete student data by id
router.delete('/student/:id',controller.deleteById)

module.exports=router