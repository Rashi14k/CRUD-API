const client=require('./database')
client.connect()

// client.query(`alter table student_data add dob date check (dob<CURRENT_DATE)`)
// client.query('alter table student_data drop column dob')

//to create student data
exports.createStudent=async(req,res)=>{
    // client.connect()
    const {id,name,email,phone,dob}=req.body;
    console.log(req.body)
    try{
        const existingStudent=await client.query(`select count(*) as count from student_data where email=$1`,[email])
        const countstudent=existingStudent.rows[0].count
        if(countstudent>0){
            res.status(406).json("student email already exist")
        }else{
        const response=await client.query(`insert into student_data(id,name,email,phone,dob) values($1,$2,$3,$4,$5)`,[id,name,email,phone,dob])

        res.status(201).send(response.rows)
        }
    }
    catch(err){
        res.status(404).send(err)
    }
    // finally{
    //  client.end;
    // }
    }

//to view all student data
exports.viewstudent=async(req,res)=>{
    // client.connect()
    try{
        const response=await client.query(`select * from student_data`)
        // console.log(response)
        res.status(200).send(response.rows)
    }
    catch(err){
        res.status(404).send(err)
    }
    // finally{
    //     client.end;
    // }
}
//to edit student data by id
exports.updateById=async(req,res)=>{
    // client.connect()
    const studentId=(req.params.id);
    console.log(req.params.id)
    const {name,email,phone}=req.body
    console.log(req.body)
    try{
        const response=await client.query(`update student_data set name=$1,email=$2,phone=$3 where id=$4`,[name,email,phone,studentId])
        res.status(202).send(response.rows)
    }
    catch(err){
        res.status(304).send(err)
    }
    // finally{
    //     client.end;
    // }
}

//to delete student data by id
exports.deleteById=async(req,res)=>{
    // client.connect()
    const studentId=(req.params.id)
    try{
    const response=await client.query(`delete from student_data where id=$1`,[studentId])
    res.send(201).send(response.rows)
    }
    catch(err){
        res.status(404).send(err)
    }
    // finally{
    //     client.end;
    // }
}
client.end;



