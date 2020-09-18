const express = require('express')
const response = require('../../network/response')
const controller = require('./controller')

const router = express.Router()

router.get('/', function(req, res){
    const filterUser = req.query.user || null
    controller.getUser(filterUser)
    .then((UserList)=>{
        response.success(req,res, UserList, 200,1)
    })
    .catch((error)=>{
        response.error(req, res, 'Unexpected error.', 500, error)
    })
})

router.post('/', function(req, res){
    controller.addUser(req.body.user, req.body.name, req.body.lastname)
        .then((fullUser)=>{
            response.success(req, res, fullUser, 201)
        })
        .catch((error) =>{
            response.error(req, res, 'Error simulado',500, 'Es solo una simulación de los errores.')
        })
})
router.delete('/:id', function(req,res){
    controller.deleteuser(req.params.id).then((data)=>{
        response.success(req, res, 200)
    }).catch((error)=>{
        response.error(req, res, 'Error simulado',500, 'Es solo una simulación de los errores.')
    })
 
})

router.patch('/:id', function(req, res){
    
    controller.updateUser(req.params.id,req.body.name,req.body.lastname)
        .then((data)=>{
            response.success(req, res, data, 200)
        })
        .catch((error)=>{
            response.error(req, res, 'Error interno'+req.body.name, 500, error)
        })
})


module.exports = router