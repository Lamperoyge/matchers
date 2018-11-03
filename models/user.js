'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {

    email: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: true
    },
    firstName: {
      type:DataTypes.STRING,
      allowNull: true 
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: true
    },
    password: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    position: {
      type: DataTypes.STRING
    },
    higherDate: {
      type: DataTypes.STRING
    },
    availableSpots: DataTypes.INTEGER
  }, {});
  User.associate = function(models) {
    // associations can be defined here
    User.belongsToMany(models.Skill, {through: models.UserSkill, foreignKey: "userId"})
  };

  return User;
};