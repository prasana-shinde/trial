const user = require('../../models').user;

class Update {
    updateUser(body){
        return new Promise((resolve, reject) => {  
            user.update({
                user_name : body.new_user_name
            },
            {
                where : {
                    user_name : body.user_name
                }
            }).then((data)=>{
                resolve(data)
            }).catch((err)=>{
                reject(err)
            })
        });
    }
}

module.exports = {
    UpdateClass : Update
}