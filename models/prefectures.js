'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class prefectures extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      prefectures.hasMany(models.recipe);
    }
  }
  prefectures.init({
    title: DataTypes.STRING,
    description: DataTypes.TEXT,
    image: DataTypes.ARRAY(DataTypes.STRING),
    long: DataTypes.STRING,
    lat: DataTypes.STRING

  }, {
    sequelize,
    modelName: 'prefectures',
  });
  return prefectures;
};