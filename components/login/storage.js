const db = require('mongoose')
const Model = require('../user/model')



async function getUser(filterUser,b){
    let filter = {}
    console.log(filterUser+"2"+b)
    if(filterUser != null){
        filter = {user: filterUser ,lastname:b}
    }
    const user = await Model.find(filter)
    console.log(user);
    return user
}

module.exports = {
   
    list: getUser,
    
}