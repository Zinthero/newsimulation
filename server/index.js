const massive= require('massive')
const express = require('express')
const bodyParser = require('body-parser')
require('dotenv').config()

const controller = require('./controller')

const app = express()

app.use(bodyParser.json())

massive(process.env.CONNECTION_STRING).then(dbInstance =>{
    app.set('db', dbInstance)
    console.log('Connection set, yo')
})
.catch(err=>{
    console.log(err.message)
})

app.get('/api/inventory', controller.createProduct)


const port = process.env.APP_PORT || 4000
app.listen(port,()=>{console.log(`Server listening on port ${port}`)})