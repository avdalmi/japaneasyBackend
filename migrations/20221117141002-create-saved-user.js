'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('SavedUsers', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      userId: {
        type: Sequelize.INTEGER,
        references: {
          key: "id",
          model: "users"
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE"
      },
      recipeId: {
        type: Sequelize.INTEGER,
        references: {
          key: "id",
          model: "recipes"
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE"
      },
      isFavorite: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
      },
      isSaved: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: new Date()
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: new Date()
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('SavedUsers');
  }
};