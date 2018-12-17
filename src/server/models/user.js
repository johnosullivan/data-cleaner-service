'use strict';
module.exports = (sequelize, DataTypes) => {
  const user = sequelize.define('user', {
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
    updatedAt: {
      allowNull: false,
      type: DataTypes.DATE
    }
  }, {
    
  });
  user.associate = function(models) {
    // associations can be defined here
  };
  return user;
};