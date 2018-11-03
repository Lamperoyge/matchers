'use strict';
module.exports = (sequelize, DataTypes) => {
  const UserSkill = sequelize.define('UserSkill', {
    type: DataTypes.STRING
  }, {});
  UserSkill.associate = function(models) {
    // associations can be defined here
  };
  return UserSkill;
};