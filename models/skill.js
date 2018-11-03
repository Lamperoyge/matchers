'use strict';
module.exports = (sequelize, DataTypes) => {
  const Skill = sequelize.define('Skill', {
    name: DataTypes.STRING,
    alias: DataTypes.STRING,
    type: DataTypes.STRING
  }, {});
  Skill.associate = function(models) {
    // associations can be defined here
    Skill.belongsTo(models.User, {through: models.UserSkill, foreignKey: "skillId"})
  };
  return Skill;
};

//sequelize.define(UserSkill, coloana: type (present, future))
//User.hasMany(skills, {through: UserSkill})
