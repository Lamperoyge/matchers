var models = require('../models');
var matching = require('./Matching').matching;
const sequelizeCreate = (email, pass, res) => {
    models.User.findOrCreate({
      where: {email: email, password: pass}})
      .spread((user, created) => {
        console.log(user.get({
          plain: true
        }))
        if(created) {
          res.status('200');
          //CREATED
          console.log('200')
          res.send('')
        }
        else {
          
          res.status('250');
          //FOUND 
          console.log('401')
          res.send('')
        }
        
    }).catch(() => {
        res.status('401')
    })
    
}

const sequelizeAddData = (email, firstName, lastName, availableSpots) => {
    models.User.findOne({
        where: {email: email}
    }).then(() => {
        models.User.update({
            firstName: firstName,
            lastName: lastName,
            availableSpots: availableSpots
        })
    })
}


const sequelizeAddSkillToUser = (email,skills) => {
    return models.User.findOne({
        where: {email: email}
    }).then((user) => {
        const promises = [];
        skills.forEach(el => {
            promises.push(models.Skill.findOne({
                where: {name: el}
            }).then((skill) => {
                return user.addSkill(skill)
            }));
        })
        return new Promise((done, fail)=>{
            Promise.all(promises).then((results)=>{
                console.log(results);
                done(user);
            });
        });
    }).then((a) => {
        
        setTimeout(matching(a.email), 2000);
    }).catch(err => console.log(err))
}






module.exports = { sequelizeCreate: sequelizeCreate, sequelizeAddData: sequelizeAddData, sequelizeAddSkillToUser: sequelizeAddSkillToUser};
  