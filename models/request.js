'use strict';
module.exports = (sequelize, DataTypes) => {
  const Request = sequelize.define('Request', {
    menteeEmail: DataTypes.STRING,
    mentorEmail: DataTypes.STRING,
    date: DataTypes.DATE,
    status: DataTypes.STRING
  }, {});
  Request.associate = function(models) {
    // associations can be defined here
  };
  return Request;
};