var models = require('../models');

const matching = (user) => {
    models.User.findOne({
        where: {email: user},
        include: [models.Skill]
    }).then((user) => {
        let userSkillSet = []
        Object.entries(user.Skills).forEach(([key, val]) => {
          userSkillSet.push(val.name)
        })
        return userSkillSet;
    }).then((arr) => {
        arr.forEach(el => {
            models.User.findAll({
                include: [{
                    model: models.Skill, where: { name: el }
                }]
            }).then((data) => {
                let users = []
                Object.entries(data).forEach(([key, val]) => {
                    users.push(val.email)
                })
            })
        })
    })    
}


// matching('root')




module.exports = {matching: matching};