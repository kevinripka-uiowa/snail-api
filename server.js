const express = require('express')
const bodyParser = require('body-parser')
const fs = require('fs')
// const cors = require('cors')

const app = express()

const nocache = require('nocache')
app.use(nocache());
app.set('etag', false)


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

//
// app.use(cors)
//
// app.options('*', cors());

// app.all('*', function (req, res) {
//     res.header("Access-Control-Allow-Origin", "*");
// })

const routes = require('./src/routes/routes.js')(app,fs)

const server = app.listen(3001,()=>{
  console.log('listening on port %s...', server.address().port)
})
