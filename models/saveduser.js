'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class SavedUser extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      SavedUser.belongsTo(models.user, {
        foreignKey: "userId"
      });
      SavedUser.belongsTo(models.recipe, {
        foreignKey: "recipeId"
      });
    }
  }
  SavedUser.init({
    isFavorite: DataTypes.BOOLEAN,
    isSaved: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'SavedUser',
  });
  return SavedUser;
};