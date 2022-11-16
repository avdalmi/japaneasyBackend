'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class saved extends Model {
    static associate(models) {
      saved.belongsTo(models.user);
      saved.belongsTo(models.recipe);
    }
  }
  saved.init({
    userId: DataTypes.INTEGER,
    recipeId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'saved',
  });
  return saved;
};