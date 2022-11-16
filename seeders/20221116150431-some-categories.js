'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("categories", [
      {
        name: "Vegan",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Vegetarian",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Pork",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Seafood",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Chicken",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Beef",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Tofu",
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ]);
  },

  async down(queryInterface, Sequelize) {

    await queryInterface.bulkDelete('categories', null, {});

  }
};
