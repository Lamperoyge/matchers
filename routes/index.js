var express = require('express');
var router = express.Router();
var models = require('../models');
var sequelizeCreate = require('../controller/User').sequelizeCreate;
// import sequelizeCreate from '../controller/User';
var sequelizeAddSkillToUser = require('../controller/User').sequelizeAddSkillToUser;
var matching = require('../controller/Matching').matching;

/* GET home page. */
router.get('/users', function(req,res,next) {
  models.User.findAll({
    include: [models.Skill]
  }).then(users => res.json({
    data: users,
    error: false
  }))
})



router.get('/getAllOptions', function(req,res,next) {
  models.Skill.findAll({
    
  }).then(skills => res.json({
    data: skills,
    error: false
  }))
})



router.post('/user/:name/setOptions', function(req,res,next) {
  // console.log(typeof req.body)
  sequelizeAddSkillToUser(req.params.name, req.body)
  
})

router.get('/login/:email/:password', function(req,res,next) {
  res.header('Cache-Control', 'public, max-age=0');
  // console.log(req.params.email)
  // console.log(req.params.password)
  sequelizeCreate(req.params.email, req.params.password, res);
  console.log('created')
  // res.send('');
  // res.status('200');
})

router.get('/*', function(req, res, next) {
  res.render('index', { title: 'Express' });

});



module.exports = router;
