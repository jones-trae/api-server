'use strict';



const foodModel = require('./food.js');
const clothesModel = require('./clothes.js');

const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize('sqlite:memory');

foodModel(sequelize, DataTypes);
clothesModel(sequelize, DataTypes);

module.exports = {
  db: sequelize,
  food,
  clothes,

};


