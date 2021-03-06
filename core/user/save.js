const user = require('../../models').user;

class Save {
    saveUser(body){
        return new Promise((resolve, reject) => {  
            user.create({
                user_name : body.user_name,
                password : body.password
            }).then((data)=>{
                resolve(data)
            }).catch((err)=>{
                reject(err)
            });
        });
    }
}

module.exports = {
    SaveClass : Save
}