const express = require('express')
const response = require('../../network/response')
const controller = require('./controller')

const router = express.Router()

router.get('/', function(req, res){
    let filterUser = req.query.user || null
    let filterUserp = req.query.pass || null
    console.log(filterUser+""+filterUserp)
    controller.getUser(filterUser , filterUserp)
    .then((UserList)=>{
        response.success(req,res, UserList, 200,1)
    })
    .catch((error)=>{
        response.error(req, res, 'Unexpected error.', 500, error)
    })
})


module.exports = router