'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class recipe extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      recipe.belongsTo(models.category);
      // recipe.belongsToMany(category, { through: "recipecategory" });
      recipe.hasMany(models.ingredient);
      recipe.hasMany(models.instructions);
      recipe.belongsTo(models.prefectures);

      recipe.belongsToMany(models.user, {
        through: "SavedUsers",
        foreignKey: "recipeId"
      });
    }
  }
  recipe.init({
    categoryId: DataTypes.INTEGER,
    name: DataTypes.STRING,
    description: DataTypes.TEXT,
    rating: DataTypes.INTEGER,
    image: DataTypes.STRING,
    time: DataTypes.STRING,
    difficulty: DataTypes.STRING,
    portions: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'recipe',
  });
  return recipe;
};