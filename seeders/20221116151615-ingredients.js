'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('ingredients', [
      {
        // id 1
        name: "Dried Daikon",
        recipeId: 1,
        quantity: 2.5,
        measurement: "kg",
      },
      {
        name: "Koji",
        recipeId: 1,
        quantity: 400,
        measurement: "g",
      },
      {
        name: "Carrots",
        recipeId: 1,
        quantity: 140,
        measurement: "g"
      },
      {
        //id 5
        name: "Cabbage",
        recipeId: 1,
        quantity: 2.5,
        measurement: "kg"
      },
      {
        name: "Herring filet",
        recipeId: 1,
        quantity: 690,
        measurement: "g"
      },
      {
        name: "Salt",
        recipeId: 1,
        quantity: 256,
        measurement: "g"
      },
      {
        name: "Ginger",
        recipeId: 1,
        quantity: 130,
        measurement: "g"
      },
      {
        name: "Boiling water",
        recipeId: 1,
        quantity: 500,
        measurement: "ml"
      },
      {
        name: "Rice water (water kept from washing rice)",
        recipeId: 1,
        measurement: "Enought to cover the herring"
      },
      {
        name: "Mirin",
        recipeId: 1,
        quantity: 200,
        measurement: "ml"
      },
      {
        name: "Thinly sliced beef skirt",
        recipeId: 2,
        quantity: 200,
        measurement: "g"
      },
      {
        name: "Onion",
        recipeId: 2,
        quantity: 1,
        measurement: "piece"
      },
      {
        name: "Apple",
        recipeId: 2,
        quantity: 0.25,
        measurement: "piece"
      },
      {
        name: "Soy Sauce",
        recipeId: 2,
        quantity: 3,
        measurement: "tbsp"
      },
      {
        name: "Sake",
        recipeId: 2,
        quantity: 1,
        measurement: "tbsp"
      },
      {
        name: "Honey",
        recipeId: 2,
        quantity: 1,
        measurement: "tbsp"
      },
      {
        name: "Minced ginger",
        recipeId: 2,
        quantity: 1,
        measurement: "tsp"
      },
      {
        name: "Minced Garlic",
        recipeId: 2,
        quantity: 0.5,
        measurement: "tsp"
      },



    ], {});

  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('ingredients', null, {});

  }
};
