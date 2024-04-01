const {Client}=require('pg')
const client=new Client({
    host:"localhost",
    user:"postgres",
    port:5432,
    password:"Rashi@05k",
    database:"student"
})
module.exports=client