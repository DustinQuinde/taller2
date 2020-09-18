const use = require('./network')
const storage = require('./storage')

function addUser(user, name, lastname){
    return new Promise((resolve,reject)=>{
        if (!user || !name || !lastname){
            console.error('[Message Controller] No hay usuario o mensaje.')
            return reject('Los datos son incorrectos.')
        }
        const fullUser = {
            user: user,
            name: name,
            lastname: lastname
        }
        storage.add(fullUser)
        return resolve(fullUser)
    })
}


function deleteuser(id){
    return new Promise(async (resolve, reject)=>{
        if (!id) {
            return reject('ID inválido')
        }
        const result = await storage.delete(id)
        return resolve(result)
    })
}



function getUser(filterUser){
    return new Promise((resolve, reject)=>{
        resolve(storage.list(filterUser))
    })
}
function updateUser(id,name,lastname){
    return new Promise(async (resolve, reject)=>{
        if (!id || !name || !lastname) {
            return reject('Data inválida'+name+lastname)
        }
        const result = await storage.update(id,name,lastname)
        return resolve(result)
    })
}

module.exports = {
    addUser, 
    getUser,
    deleteuser,
    updateUser
}