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
      ingredientDescription.belongsTo(models.ingredient);
    }
  }
  ingredientDescription.init({
    name: DataTypes.STRING,
    description: DataTypes.TEXT,
    image: DataTypes.STRING,
    substitutions: DataTypes.TEXT,
    ingredientId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'ingredientDescription',
  });
  return ingredientDescription;
};