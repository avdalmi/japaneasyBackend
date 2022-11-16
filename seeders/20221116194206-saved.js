'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.bulkInsert('saveds', [
      {
        userId: 1,
        recipeId: 1
      },
      {
        userId: 1,
        recipeId: 2
      },
      {
        userId: 2,
        recipeId: 1
      },
      {
        userId: 3,
        recipeId: 2
      },
      {
        userId: 4,
        recipeId: 1
      },
      {
        userId: 4,
        recipeId: 2
      }
    ], {});

  },

  async down(queryInterface, Sequelize) {

    await queryInterface.bulkDelete('saveds', null, {});

  }
};
