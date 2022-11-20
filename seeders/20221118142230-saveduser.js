'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.bulkInsert('SavedUsers', [{
      recipeId: 1,
      userId: 1,
      isFavorite: true,
      isSaved: true,
    }], {});

  },

  async down(queryInterface, Sequelize) {

    await queryInterface.bulkDelete('SavedUsers', null, {});

  }
};
