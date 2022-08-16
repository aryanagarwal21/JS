const express = require('express')
const bodyparser= require('body-parser')
const mysql = require('mysql2')
const app= express()
const port = process.env.PORT || 5000
app.use(bodyparser.urlencoded({ extended: false }))
app.use(bodyparser.json())
//Connect database
const pool= mysql.createPool({
    connectionLimit :10,
    host            :'localhost',
    user            :'root',
    password        :'12345678',
    database        :'ss_pclub'
});

//getData
app.get('',(req,res) =>{
    pool.getConnection((err,connection) => {
        if(err) throw err
        console.log('Connected as id' ,connection.threadId)

        connection.query('Select * from student_data', (err,rows) => {
            connection.release()
            if(!err) {
            res.send(rows)
            }
            else {console.log(err)}
        })
    })
})
app.get('/Branch/:dat',(req,res) =>{
    pool.getConnection((err,connection) => {
        if(err) throw err
        console.log('Connected as id' ,connection.threadId)

        connection.query('Select * from student_data where Branch = ?',[req.params.dat], (err,rows) => {
            connection.release()
            if(!err) {
            res.send(rows)
            }
            else {console.log(err)}
        })
    })
})
app.get('/Name/:dat',(req,res) =>{
    pool.getConnection((err,connection) => {
        if(err) throw err
        console.log('Connected as id' ,connection.threadId)

        connection.query('Select * from student_data where Name = ?',[req.params.dat], (err,rows) => {
            connection.release()
            if(!err) {
            res.send(rows)
            }
            else {console.log(err)}
        })
    })
})
app.get('/UserID/:dat',(req,res) =>{
    pool.getConnection((err,connection) => {
        if(err) throw err
        console.log('Connected as id' ,connection.threadId)

        connection.query('Select * from student_data where UserID = ?',[req.params.dat], (err,rows) => {
            connection.release()
            if(!err) {
            res.send(rows)
            }
            else {console.log(err)}
        })
    })
})
app.get('/RollNo/:dat',(req,res) =>{
    pool.getConnection((err,connection) => {
        if(err) throw err
        console.log('Connected as id' ,connection.threadId)

        connection.query('Select * from student_data where RollNo = ?',[req.params.dat], (err,rows) => {
            connection.release()
            if(!err) {
            res.send(rows)
            }
            else {console.log(err)}
        })
    })
})

//Deleting a Record
app.delete('/:dat',(req,res) =>{
    pool.getConnection((err,connection) => {
        if(err) throw err
        console.log('Connected as id' ,connection.threadId)

        connection.query('Delete from student_data where RollNo = ?',[req.params.dat], (err,rows) => {
            connection.release()
            if(!err) {
            res.send('Record  Deleted')
            }
            else {console.log(err)}
        })
    })
})



//Adding a record
app.post('',(req,res) =>{
    pool.getConnection((err,connection) => {
        if(err) throw err
        console.log('Connected as id' ,connection.threadId)
        const params= req.body

        connection.query('Insert into student_data Set ?',params, (err,rows) => {
            connection.release()
            if(!err) {
            res.send('Record  Added')
            }
            else {console.log(err)}
        })
        console.log(req.body)
    })
})

//Update
app.put('',(req,res) =>{
    pool.getConnection((err,connection) => {
        if(err) throw err
        console.log('Connected as id' ,connection.threadId)
        const params= req.body
        const {UserID,Name,Branch,RollNo}= req.body

        connection.query('Update student_data Set Name = ?, Branch= ? where RollNo = ? ',[Name,Branch,RollNo], (err,rows) => {
            connection.release()
            if(!err) {
            res.send('Record Updated')
            }
            else {console.log(err)}
        })
        
    })
})








//Listen to port
app.listen(port, () => console.log('Listen on Port:',port))

