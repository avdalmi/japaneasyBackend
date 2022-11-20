'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ingredient extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
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