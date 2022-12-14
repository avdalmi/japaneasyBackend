'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ingredientDescription extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {

      ingredientDescription.hasMany(models.ingredient);
    }
  }
  ingredientDescription.init({
    name: DataTypes.STRING,
    description: DataTypes.TEXT,
    image: DataTypes.STRING,
    substitution: DataTypes.TEXT,
  }, {
    sequelize,
    modelName: 'ingredientDescription',
  });
  return ingredientDescription;
};