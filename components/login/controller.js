const use = require('./network')
const storage = require('./storage')







function getUser(filterUser, filterUserp){
    return new Promise((resolve, reject)=>{
        resolve(storage.list(filterUser,filterUserp))
    })
}

module.exports = {
    
    getUser,
   
}