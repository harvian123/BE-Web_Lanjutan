const express = require('express')
const mysql = require('mysql')
const cors = require('cors')

const app = express()
const routerTodos = require('./router/todo.js')
const routerUsers = require('./router/user')

const corsOptions ={
    origin:'*',
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200
}

app.use(cors(corsOptions))
app.use(express.json())
app.use(express.urlencoded())

app.use(routerTodos)
app.use(routerUsers)

app.listen(3000, () => {
    console.log('Server Running Port : 3000')
})