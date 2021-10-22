'use strict';

const clothes = (sequelize, DataTypes) => sequelize.define('clothes', {
  type: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  calories: {
    type: DataTypes.INTERGER,
    allowNull: true,
  }

});

module.exports = clothes