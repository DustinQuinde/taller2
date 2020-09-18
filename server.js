const express = require('express')
const bodyParser = require('body-parser')
const config = require('./config')
var cors = require('cors');
const router = require('./network/routes')
const db = require('./db')

db(config.dbUrl)

var app = express()
const server = require('http').Server(app)
const io = require('socket.io')(server)
const socket = require('./socket')
app.use(cors({
    'allowedHeaders': ['sessionId', 'Content-Type'],
    'exposedHeaders': ['sessionId'],
    'origin': '*',
    'methods': 'GET,HEAD,PUT,PATCH,POST,DELETE',
    'preflightContinue': false
  }));
app.use( bodyParser.json() )
app.use( bodyParser.urlencoded({extended: false}))
socket.connect(server)
router( app )

app.use('/', express.static('public'))

server.listen( config.port, function() {
  console.log('La aplicación está escuchando en http://localhost:' + config.port)
})

