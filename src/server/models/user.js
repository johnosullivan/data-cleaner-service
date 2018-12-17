'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('user', {
    id: {
      type: DataTypes.UUID
    },
    firstName: {
      type: DataTypes.STRING
    },
    lastName: {
      type: DataTypes.STRING
    },
    email: {
      type: DataTypes.STRING
    },
    phone: {
      type: DataTypes.STRING
    },
    backupCode: {
      type: DataTypes.STRING
    },
    password: {
      type: DataTypes.STRING
    },
    twoFactorSecret: {
      type: DataTypes.STRING
    },
    twoFactorConfirmation: {
      type: DataTypes.BOOLEAN
    },
    updatedAt: {
      allowNull: false,
      type: DataTypes.DATE
    }
  }, {
    
  });
  User.associate = function(models) {
    // associations can be defined here
  };
  return User;
};