const User = require('../models').User;
const Skill = require('../models').Skill;


// User.findOne({
//     where: {email: 'admin'},
//     include: [
//         {model: Skill}
//     ]
// }).then((user) => {
    
// })


// Skill.destroy({
//     where: {},
//     truncate: true
// })




// const skills = [
// "Abilitatea de rezolvare a problemelor",
// "Abilitati de ascultare",
// "Abilitati de negociere",
// "Abilitati de vanzare",
// "Adaptabilitate (mediu, cultura organizationala)",
// "Adaptabilitate/flexibilitate",
// "Asertivitate",
// "Atentie la detalii",
// "Autocontrol",
// "Capacitatea de a lua decizii",
// "Colaborare/Lucrul in echipa",
// "Comunicare",
// "Creativitate",
// "Drive/Energie/Entuziasm",
// "Empatie",
// "Flexibilitate",
// "Gandire analitica",
// "Gndire strategic",
// "Initiativa",
// "Invatare continua",
// "Oferire feedback/selfawerness",
// "Organizare si planificare",
// "Orientare pe rezultate",
// "Perseverenta",
// "Proactivitate/initiativa",
// "Project management skills",
// "Responsabilitate",
// "Sinteza si analiza",
// "Integritate",
// ]

// // User.create({
// //     email: "hello@hello.com",
// //     firstName: "John",
// //     lastName: "Doe"
// // }).then(user => {
// //     user.createSkill({
// //         name:"rekt"
// //     })
// // });

// const hardSkills = [
//     "php",
//     "javascript",
//     "react",
//     "git",
//     "linux",
//     "mysql",
//     "symfony",
//     "doctrine",
//     "nodejs",
//     "css3",
//     "html5",
//     "amazonwebservices",
//     "bootstrap",
//     "jquery",
//     "nginx",
//     "vuejs",
//     "ubuntu",
//     "python",
//     "laravel"
// ]


// const hobbies = [
//     "biciclism",
//     "sf",
//     "bere",
//     "whisky",
//     "motociclism",
//     "muzica",
//     "sport",
//     "citit",
//     "origami",
//     "hiking",
//     "blackjack",
//     "pariuri",
//     "filme",
//     "video games",
//     "fotografie",
//     "calatorii"
// ]



// hardSkills.forEach(el => {
//     Skill.create({
//         name: el,
//         type:"tech"
//     })
// })

// hobbies.forEach(el => {
//     Skill.create({
//         name: el,
//         type:"hobby"
//     })
// })
// skills.forEach(el => {
//     Skill.create({
//         name: el,
//         type: 'soft'
//     })
// })


