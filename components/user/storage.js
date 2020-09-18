const db = require('mongoose')
const Model = require('./model')

function addUser(user){
    const myUser = new Model(user)
    myUser.save()
}

async function getUser(filterUser){
    let filter = {}
    if(filterUser != null){
        filter = {user: filterUser}
    }
    const user = await Model.find(filter)
    return user
}
async function deleteUser(id){
    return Model.deleteOne({
        _id: id
    })
}

async function updateUser(id,name,lastname){
    const foundMessage = await Model.findOne({_id: id})
 
 
    foundMessage.name = name
    foundMessage.lastname = lastname
    const newMessage = foundMessage.save()
    return newMessage
}

module.exports = {
    add: addUser,
    list: getUser,
    delete:deleteUser,
    update:updateUser
}