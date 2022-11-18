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
      {
        name: "Salmon Filet",
        recipeId: 3,
        quantity: 2,
        measurement: "pieces"
      },
      {
        name: "Cabbage",
        recipeId: 3,
        quantity: 200,
        measurement: "grams"
      },
      {
        name: "Bean Sprouts",
        recipeId: 3,
        quantity: 100,
        measurement: "grams"
      },

      {
        name: "Onion",
        recipeId: 3,
        quantity: 0.5,
        measurement: "piece"
      },
      {
        name: "Paprika",
        recipeId: 3,
        quantity: 1,
        measurement: "piece"
      },
      {
        name: "Potato",
        recipeId: 3,
        quantity: 1,
        measurement: "medium piece"
      },
      {
        name: "Red Miso",
        recipeId: 3,
        quantity: 4,
        measurement: "tbsp"
      },
      {
        name: "White sesame seeds",
        recipeId: 3,
        quantity: 2,
        measurement: "tbsp"
      },
      {
        name: "Sugar",
        recipeId: 3,
        quantity: 1.5,
        measurement: "tbsp"
      },
      {
        name: "Soy Sauce",
        recipeId: 3,
        quantity: 1.5,
        measurement: "tbsp"
      },
      {
        name: "Mirin",
        recipeId: 3,
        quantity: 1.5,
        measurement: "tbsp"
      },
      {
        name: "Sake",
        recipeId: 3,
        quantity: 3,
        measurement: "tbsp"
      },
      {
        name: "Butter",
        recipeId: 3,
        quantity: 10,
        measurement: "gram"
      },
      {
        name: "Oil",
        recipeId: 3,
        quantity: 1,
        measurement: "tbsp"
      },
      {
        name: "Udon",
        recipeId: 4,
        quantity: 200,
        measurement: "g"
      },
      {
        name: "Minced pork",
        recipeId: 4,
        quantity: 120,
        measurement: "g"
      },
      {
        name: "Onion",
        recipeId: 4,
        quantity: 0.5,
        measurement: "piece"
      },
      {
        name: "Spring onions",
        recipeId: 4,
        quantity: 1,
        measurement: "stalk"
      },
      {
        name: "Cucumber",
        recipeId: 4,
        quantity: 1,
        measurement: "piece"
      },
      {
        name: "Minced garlic",
        recipeId: 4,
        quantity: 1,
        measurement: "tsp"
      },
      {
        name: "Grated ginger",
        recipeId: 4,
        quantity: 1,
        measurement: "tsp"
      },
      {
        name: "Sesame oil",
        recipeId: 4,
        quantity: 1,
        measurement: "tbsp"
      },
      {
        name: "Red miso",
        recipeId: 4,
        quantity: 3,
        measurement: "tbsp"
      },
      {
        name: "Osyter sauce",
        recipeId: 4,
        quantity: 1,
        measurement: "tbsp"
      },
      {
        name: "Sugar",
        recipeId: 4,
        quantity: 1,
        measurement: "tbsp"
      },
      {
        name: "Water",
        recipeId: 4,
        quantity: 0.5,
        measurement: "cup"
      },
      {
        name: "Tobanjan",
        recipeId: 4,
        quantity: 1,
        measurement: "tsp"
      },
      {
        name: "Minced pork",
        recipeId: 5,
        quantity: 100,
        measurement: "gram"
      },
      {
        name: "Yakisoba noodles",
        recipeId: 5,
        quantity: 1,
        measurement: "bunch"
      },
      {
        name: "Cabbage",
        recipeId: 5,
        quantity: 5,
        measurement: "leafs"
      },
      {
        name: "Carrot",
        recipeId: 5,
        quantity: 0.5,
        measurement: "piece"
      },
      {
        name: "Paprika",
        recipeId: 5,
        quantity: 1,
        measurement: "piece"
      },
      {
        name: "Oil",
        recipeId: 5,
        quantity: 1,
        measurement: "tsp"
      },
      {
        name: "Water",
        recipeId: 5,
        quantity: 2,
        measurement: "tbsp"
      },
      {
        name: "Oyster Sauce",
        recipeId: 5,
        quantity: 1,
        measurement: "tsp"
      },
      {
        name: "Tonkatsu Sauce",
        recipeId: 5,
        quantity: 2,
        measurement: "tsp"
      },
      {
        name: "Dashi power",
        recipeId: 5,
        quantity: 1,
        measurement: "tsp"
      },
      {
        name: "Egg",
        recipeId: 5,
        quantity: 1,
        measurement: "piece"
      },
      {
        name: "Salmon Filet",
        recipeId: 6,
        quantity: 3,
        measurement: "pieces"
      },
      {
        name: "Japanese Rice",
        recipeId: 6,
        quantity: 450,
        measurement: "grams"
      },
      {
        name: "Salmon roe",
        recipeId: 6,
        quantity: 70,
        measurement: "grams"
      },
      {
        name: "Konbu",
        recipeId: 6,
        quantity: 1,
        measurement: "10cm x 10cm piece"
      },
      {
        name: "Water",
        recipeId: 6,
        quantity: 450,
        measurement: "ml"
      },
      {
        name: "Soy sauce",
        recipeId: 6,
        quantity: 80,
        measurement: "ml"
      },
      {
        name: "Sake",
        recipeId: 6,
        quantity: 80,
        measurement: "ml"
      },
      {
        name: "Mirin",
        recipeId: 6,
        quantity: 50,
        measurement: "ml"
      },
      {
        name: "Sugar",
        recipeId: 6,
        quantity: 2,
        measurement: "tbsp"
      },
      {
        name: "Eggplant",
        recipeId: 7,
        quantity: 1,
        measurement: "piece"
      },
      {
        name: "Cucumber",
        recipeId: 7,
        quantity: 1,
        measurement: "piece"
      },
      {
        name: "Okra",
        recipeId: 7,
        quantity: 8,
        measurement: "pieces"
      },
      {
        name: "White dashi",
        recipeId: 7,
        quantity: 30,
        measurement: "ml"
      },
      {
        name: "Mentsuyu",
        recipeId: 7,
        quantity: 50,
        measurement: "ml"
      },
      {
        name: "Water",
        recipeId: 7,
        quantity: 80,
        measurement: "ml"
      },
      {
        name: "Dried Squid",
        recipeId: 8,
        quantity: 1,
        measurement: "piece"
      },
      {
        name: "Carrot",
        recipeId: 8,
        quantity: 1,
        measurement: "piece"
      },
      {
        name: "Sake",
        recipeId: 8,
        quantity: 210,
        measurement: "ml"
      },
      {
        name: "White dashi",
        recipeId: 8,
        quantity: 300,
        measurement: "ml"
      },
      {
        name: "Soy sauce",
        recipeId: 8,
        quantity: 5,
        measurement: "tbsp"
      },
      {
        name: "Mirin",
        recipeId: 8,
        quantity: 110,
        measurement: "ml"
      },
      {
        name: "Water",
        recipeId: 8,
        quantity: 50,
        measurement: "ml"
      },
      {
        name: "Sugar",
        recipeId: 8,
        quantity: 2,
        measurement: "tbsp"
      },
      {
        name: "Daikon",
        recipeId: 9,
        quantity: 300,
        measurement: "gram"
      },
      {
        name: "Carrot",
        recipeId: 9,
        quantity: 1,
        measurement: "piece"
      },
      {
        name: "Shiitake",
        recipeId: 9,
        quantity: 6,
        measurement: "pieces"
      },
      {
        name: "Mountain potato - Japanese Taro",
        recipeId: 9,
        quantity: 300,
        measurement: "gram"
      },
      {
        name: "Tofu",
        recipeId: 9,
        quantity: 350,
        measurement: "gram"
      },
      {
        name: "Kombu",
        recipeId: 9,
        quantity: 1,
        measurement: "10cm x 10cm piece"
      },
      {
        name: "Salt",
        recipeId: 9,
        quantity: 2,
        measurement: "pinches"
      },
      {
        name: "White dashi",
        recipeId: 9,
        quantity: 2,
        measurement: "tbsp"
      },
      {
        name: "Water",
        recipeId: 9,
        quantity: 650,
        measurement: "ml"
      },
      {
        name: "Dashi powder",
        recipeId: 9,
        quantity: 0.5,
        measurement: "tsp"
      },
      {
        name: "Soy sauce",
        recipeId: 9,
        quantity: 3,
        measurement: "tbsp"
      },
      {
        name: "Cod fillet",
        recipeId: 10,
        quantity: 400,
        measurement: "gram"
      },
      {
        name: "Enoki mushroom",
        recipeId: 10,
        quantity: 1,
        measurement: "bag"
      },
      {
        name: "Chinese cabbage",
        recipeId: 10,
        quantity: 200,
        measurement: "gram"
      },
      {
        name: "Spring onion",
        recipeId: 10,
        quantity: 1,
        measurement: "stalk"
      },
      {
        name: "Tofy",
        recipeId: 10,
        quantity: 200,
        measurement: "gram"
      },
      {
        name: "Carrot",
        recipeId: 10,
        quantity: 0.5,
        measurement: "piece"
      },
      {
        name: "Shiitake",
        recipeId: 10,
        quantity: 2,
        measurement: "piece"
      },
      {
        name: "Shirataki",
        recipeId: 10,
        quantity: 100,
        measurement: "gram"
      },
      {
        name: "Konbu",
        recipeId: 10,
        quantity: 3,
        measurement: "pieces"
      },
      {
        name: "Water",
        recipeId: 10,
        quantity: 1000,
        measurement: "ml"
      },
      {
        name: "Sake",
        recipeId: 10,
        quantity: 100,
        measurement: "ml"
      },
      {
        name: "Mirin",
        recipeId: 10,
        quantity: 60,
        measurement: "ml"
      },
      {
        name: "Sugar",
        recipeId: 10,
        quantity: 3,
        measurement: "tbsp"
      },
      {
        name: "Soy sauce",
        recipeId: 10,
        quantity: 50,
        measurement: "ml"
      },
      {
        name: "Potato",
        recipeId: 11,
        quantity: 4,
        measurement: "pieces"
      },
      {
        name: "Spring onion",
        recipeId: 11,
        quantity: 1,
        measurement: "stalk"
      },
      {
        name: "Sakura shirmp",
        recipeId: 11,
        quantity: 6,
        measurement: "gram"
      },
      {
        name: "Worchester sauce",
        recipeId: 11,
        quantity: 3,
        measurement: "dashes"
      },
      {
        name: "Aonori",
        recipeId: 11,
        quantity: null,
        measurement: "as needed"
      },
      // {
      //   name: "",
      //   recipeId: 11
      //   ,
      //   quantity: ,
      //   measurement: ""
      // },
      // {
      //   name: "",
      //   recipeId: 11
      //   ,
      //   quantity: ,
      //   measurement: ""
      // },













    ], {});

  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('ingredients', null, {});

  }
};
