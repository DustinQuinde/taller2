const express = require('express')
const message = require('../components/message/network')
const user = require('../components/user/network')
const login = require('../components/login/network')
const routes = function(server){
    server.use('/message', message)
    server.use('/user', user)
    server.use('/login', login)
}

module.exports = routes