const express = require('express')
const router = express.Router()
const mysql = require('mysql')

router.use(express.json())
router.use(express.urlencoded())

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'to_develop'
})

connection.connect()

router.get('/user', function (req, res) {
    res.send(`
        <html>
            <form action="/user" method="POST">
                <label>Username</label>
                <input name = "username"></input>
                <label>Password</label>
                <input name = "password" type = "password"></input>
                <button>Submit</button>
            </form>
        </html>
    `)
})

router.post('/',function(req,res){
    const sql = `INSERT INTO users (username, password) VALUES (\'${req.body.username}\', \'${req.body.password}\')`
    conn.query(sql,function(err){
        if(err) 
            throw err
        console.log('User Added')
    })
    res.sendStatus(200)
})

router.get('/',function(req,res){
    const sql = 'SELECT * FROM users'
    conn.query(sql,function(err,result){
        if(err)
            throw err
        res.send(result)
        console.log(result)
    })
})

router.delete('/:nama',function(req,res){
    const query = `DELETE FROM users WHERE id=\'${req.params.id}\'`
    conn.query(query,function(err,result){
        if(err)
            throw err
        res.send("User Deleted")
    })
})

module.exports = router