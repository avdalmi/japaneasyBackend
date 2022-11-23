'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ingredient extends Model {

    static associate(models) {
      ingredient.belongsTo(models.recipe);
      ingredient.belongsTo(models.ingredientDescription);
    }
  }
  ingredient.init({
    name: DataTypes.STRING,
    quantity: DataTypes.INTEGER,
    measurement: DataTypes.STRING,
    recipeId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'ingredient',
  });
  return ingredient;
};