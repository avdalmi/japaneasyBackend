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
        ingredientDescriptionId: 1
      },
      {
        name: "Koji",
        recipeId: 1,
        quantity: 400,
        measurement: "g",
        ingredientDescriptionId: 2
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
        measurement: "ml",
        ingredientDescriptionId: 4
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
        measurement: "tbsp",
        ingredientDescriptionId: 3,
      },
      {
        name: "Sake",
        recipeId: 2,
        quantity: 1,
        measurement: "tbsp",
        ingredientDescriptionId: 5
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
        measurement: "tbsp",
        ingredientDescriptionId: 7
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
        measurement: "tbsp",
        ingredientDescriptionId: 3
      },
      {
        name: "Mirin",
        recipeId: 3,
        quantity: 1.5,
        measurement: "tbsp",
        ingredientDescriptionId: 4
      },
      {
        name: "Sake",
        recipeId: 3,
        quantity: 3,
        measurement: "tbsp",
        ingredientDescriptionId: 5
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
        measurement: "tbsp",
        ingredientDescriptionId: 7
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
        measurement: "tsp",
        ingredientDescriptionId: 10
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
        measurement: "ml",
        ingredientDescriptionId: 3
      },
      {
        name: "Sake",
        recipeId: 6,
        quantity: 80,
        measurement: "ml",
        ingredientDescriptionId: 5
      },
      {
        name: "Mirin",
        recipeId: 6,
        quantity: 50,
        measurement: "ml",
        ingredientDescriptionId: 4
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
        measurement: "ml",
        ingredientDescriptionId: 10
      },
      {
        name: "Mentsuyu",
        recipeId: 7,
        quantity: 50,
        measurement: "ml",
        ingredientDescriptionId: 9
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
        measurement: "ml",
        ingredientDescriptionId: 5
      },
      {
        name: "White dashi",
        recipeId: 8,
        quantity: 300,
        measurement: "ml",
        ingredientDescriptionId: 10
      },
      {
        name: "Soy sauce",
        recipeId: 8,
        quantity: 5,
        measurement: "tbsp",
        ingredientDescriptionId: 3
      },
      {
        name: "Mirin",
        recipeId: 8,
        quantity: 110,
        measurement: "ml",
        ingredientDescriptionId: 4
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
        measurement: "gram",
        ingredientDescriptionId: 1
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
        measurement: "pieces",
        ingredientDescriptionId: 6
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
        measurement: "tbsp",
        ingredientDescriptionId: 10
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
        measurement: "tsp",
        ingredientDescriptionId: 10
      },
      {
        name: "Soy sauce",
        recipeId: 9,
        quantity: 3,
        measurement: "tbsp",
        ingredientDescriptionId: 3
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
        measurement: "piece",
        ingredientDescriptionId: 6
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
        measurement: "ml",
        ingredientDescriptionId: 5
      },
      {
        name: "Mirin",
        recipeId: 10,
        quantity: 60,
        measurement: "ml",
        ingredientDescriptionId: 4
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
        measurement: "ml",
        ingredientDescriptionId: 3
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
      {
        name: "Japanese Taro",
        recipeId: 12,
        quantity: 200,
        measurement: "gram"
      },
      {
        name: "Flour",
        recipeId: 12,
        quantity: 170,
        measurement: "gram"
      },
      {
        name: "Egg",
        recipeId: 12,
        quantity: 2,
        measurement: "pieces"
      },
      {
        name: "Carrot",
        recipeId: 12,
        quantity: 1,
        measurement: "piece"
      },
      {
        name: "Fried Tofu (Aburaage)",
        recipeId: 12,
        quantity: 2,
        measurement: "pieces"
      },
      {
        name: "Spring onion",
        recipeId: 12,
        quantity: 1,
        measurement: "stalk"
      },
      {
        name: "Shiitake",
        recipeId: 12,
        quantity: 8,
        measurement: "pieces",
        ingredientDescriptionId: 6
      },
      {
        name: "Water",
        recipeId: 12,
        quantity: 1400,
        measurement: "ml"
      },
      {
        name: "White dashi",
        recipeId: 12,
        quantity: 150,
        measurement: "ml",
        ingredientDescriptionId: 10
      },
      {
        name: "Soy sauce",
        recipeId: 12,
        quantity: 3,
        measurement: "tbsp",
        ingredientDescriptionId: 3
      },
      {
        name: "Daikon",
        recipeId: 12,
        quantity: 0.25,
        measurement: "piece",
        ingredientDescriptionId: 1
      },
      {
        name: "Shimezi mushroom",
        recipeId: 13,
        quantity: 1,
        measurement: "pack"
      },
      {
        name: "Shiitake",
        recipeId: 13,
        quantity: 5,
        measurement: "pieces",
        ingredientDescriptionId: 6
      },
      {
        name: "Rice",
        recipeId: 13,
        quantity: 360,
        measurement: "ml"
      },
      {
        name: "Soy Sauce",
        recipeId: 13,
        quantity: 2,
        measurement: "tbsp",
        ingredientDescriptionId: 3
      },
      {
        name: "Sake",
        recipeId: 13,
        quantity: 2,
        measurement: "tbsp",
        ingredientDescriptionId: 5
      },
      {
        name: "Mirin",
        recipeId: 13,
        quantity: 2,
        measurement: "tbsp",
        ingredientDescriptionId: 4
      },
      {
        name: "Spring onion",
        recipeId: 13,
        quantity: 1,
        measurement: "stalk"
      },

      {
        name: "Carrots",
        recipeId: 14,
        quantity: 2,
        measurement: "cups"
      },

      {
        name: "Sesame oil",
        recipeId: 14,
        quantity: 0.5,
        measurement: "tsp"
      },

      {
        name: "Sake",
        recipeId: 14,
        quantity: 0.5,
        measurement: "tbsp",
        ingredientDescriptionId: 5
      },

      {
        name: "Egg - beaten",
        recipeId: 14,
        quantity: 1,
        measurement: "piece"
      },

      {
        name: "Kabocha pumpkin",
        recipeId: 15,
        quantity: 0.5,
        measurement: "piece"
      },

      {
        name: "Cucumber",
        recipeId: 15,
        quantity: 1,
        measurement: "piece"
      },

      {
        name: "Lemon juice",
        recipeId: 15,
        quantity: 1,
        measurement: "tsp"
      },

      {
        name: "Japanese mayonnaise",
        recipeId: 15,
        quantity: 2,
        measurement: "tbsp"
      },
      {
        name: "Okra",
        recipeId: 16,
        quantity: 5,
        measurement: "pieces"
      },
      {
        name: "Tomato",
        recipeId: 16,
        quantity: 1,
        measurement: "piece"
      },
      {
        name: "Nagaimo long yam",
        recipeId: 16,
        quantity: 1,
        measurement: "piece"
      },
      {
        name: "Shiso Leaves",
        recipeId: 16,
        quantity: 4,
        measurement: "pieces"
      },
      {
        name: "Dried somen noodles",
        recipeId: 16,
        quantity: 3,
        measurement: "bunches"
      },
      {
        name: "Mentsuyu sauce",
        recipeId: 16,
        quantity: 0.5,
        measurement: "cup",
        ingredientDescriptionId: 9
      },
      {
        name: "Cold water",
        recipeId: 16,
        quantity: 1,
        measurement: "cup"
      },
      {
        name: "Potato",
        recipeId: 17,
        quantity: 1,
        measurement: ""
      },
      {
        name: "Carrot",
        recipeId: 17,
        quantity: 0.5,
        measurement: "piece"
      },
      {
        name: "Napa cabbage",
        recipeId: 17,
        quantity: 3,
        measurement: "leaves"
      },
      {
        name: "Spring onion",
        recipeId: 17,
        quantity: 2,
        measurement: "stalks"
      },
      {
        name: "Dashi",
        recipeId: 17,
        quantity: 4,
        measurement: "cups",
        ingredientDescriptionId: 10
      },
      {
        name: "Miso",
        recipeId: 17,
        quantity: 5,
        measurement: "tbsp",
        ingredientDescriptionId: 7
      },
      {
        name: "Napa cabbage",
        recipeId: 18,
        quantity: 0.5,
        measurement: "piece"
      },
      {
        name: "Chinese chives",
        recipeId: 18,
        quantity: 1,
        measurement: "bunch"
      },
      {
        name: "Shimeji mushroom",
        recipeId: 18,
        quantity: 1,
        measurement: "pack"
      },
      {
        name: "Enoki mushroom",
        recipeId: 18,
        quantity: 1,
        measurement: "pack"
      },
      {
        name: "Tofu medium hard",
        recipeId: 18,
        quantity: 1,
        measurement: "pack"
      },
      {
        name: "sliced pork",
        recipeId: 18,
        quantity: 460,
        measurement: "gram"
      },

      {
        name: "Sesame oil",
        recipeId: 18,
        quantity: 3,
        measurement: "tbsp"
      }, {
        name: "Dashi",
        recipeId: 18,
        quantity: 1500,
        measurement: "ml",
        ingredientDescriptionId: 10
      },
      {
        name: "Miso",
        recipeId: 18,
        quantity: 0.25,
        measurement: "cup",
        ingredientDescriptionId: 7
      },
      {
        name: "Sake",
        recipeId: 18,
        quantity: 3,
        measurement: "tbsp",
        ingredientDescriptionId: 5
      },
      {
        name: "Chinese cabbage",
        recipeId: 19,
        quantity: 200,
        measurement: "gram"
      },
      {
        name: "Onion",
        recipeId: 19,
        quantity: 100,
        measurement: "gram"
      },
      {
        name: "Chinese chives",
        recipeId: 19,
        quantity: 100,
        measurement: "gram"
      },
      {
        name: "Shiitake",
        recipeId: 19,
        quantity: 3,
        measurement: "pieces",
        ingredientDescriptionId: 6
      },
      {
        name: "Bamboo shoots - canned",
        recipeId: 19,
        quantity: 2,
        measurement: "tbsp"
      },

      {
        name: "Garlic",
        recipeId: 19,
        quantity: 1,
        measurement: "clove"
      },
      {
        name: "Ginger",
        recipeId: 19,
        quantity: 1,
        measurement: "2cm"
      },
      {
        name: "Soy sauce",
        recipeId: 19,
        quantity: 1,
        measurement: "tbsp",
        ingredientDescriptionId: 3
      },
      {
        name: "Sake",
        recipeId: 19,
        quantity: 1,
        measurement: "tsp",
        ingredientDescriptionId: 5
      },
      {
        name: "Corn starch",
        recipeId: 19,
        quantity: 1,
        measurement: "tbsp"
      },
      {
        name: "Panko breadcrumbs",
        recipeId: 19,
        quantity: 3,
        measurement: "tbsp"
      },
      {
        name: "Sesame oil",
        recipeId: 19,
        quantity: 1,
        measurement: "tbsp"
      },
      {
        name: "Gyoza skins",
        recipeId: 19,
        quantity: 25,
        measurement: "pieces"
      },
      {
        name: "Frying oil",
        recipeId: 19,
        quantity: 1,
        measurement: "litre"
      },
      {
        name: "Soy sauce",
        recipeId: 19,
        quantity: 3,
        measurement: "tbsp",
        ingredientDescriptionId: 3
      },
      {
        name: "Rice vingar",
        recipeId: 19,
        quantity: 3,
        measurement: "tbsp"
      },
      {
        name: "Chili oil",
        recipeId: 19,
        quantity: 1,
        measurement: "tsp"
      },
      {
        name: "Cabbage",
        recipeId: 20,
        quantity: 10,
        measurement: "leaves"
      },
      {
        name: "Onion",
        recipeId: 20,
        quantity: 0.5,
        measurement: "piece"
      },
      {
        name: "Minced pork",
        recipeId: 20,
        quantity: 220,
        measurement: "gram"
      },
      {
        name: "Minced beef",
        recipeId: 20,
        quantity: 220,
        measurement: "gram"
      },
      {
        name: "Egg",
        recipeId: 20,
        quantity: 1,
        measurement: "piece"
      },
      {
        name: "Panko breadcrumbs",
        recipeId: 20,
        quantity: 0.5,
        measurement: "cup"
      },
      {
        name: "Chicken broth",
        recipeId: 20,
        quantity: 2,
        measurement: "cup"
      },
      {
        name: "Salt",
        recipeId: 20,
        quantity: 0.5,
        measurement: "tsp"
      },
      {
        name: "Tomato paste",
        recipeId: 20,
        quantity: 1,
        measurement: "tbsp"
      },
      {
        name: "Ketchup",
        recipeId: 20,
        quantity: 1,
        measurement: ""
      },
      {
        name: "Yellowtail fillets",
        recipeId: 21,
        quantity: 300,
        measurement: "gram"
      },
      {
        name: "Daikon radish",
        recipeId: 21,
        quantity: 0.5,
        measurement: "piece",
        ingredientDescriptionId: 1
      },
      {
        name: "Ginger",
        recipeId: 21,
        quantity: 20,
        measurement: "gram"
      },
      {
        name: "water",
        recipeId: 21,
        quantity: 360,
        measurement: "ml"
      },
      {
        name: "Soy sauce",
        recipeId: 21,
        quantity: 80,
        measurement: "ml",
        ingredientDescriptionId: 3
      },

      {
        name: "Sake",
        recipeId: 21,
        quantity: 80,
        measurement: "ml",
        ingredientDescriptionId: 5
      },
      {
        name: "Mirin",
        recipeId: 21,
        quantity: 60,
        measurement: "ml",
        ingredientDescriptionId: 4
      },
      {
        name: "Sugar",
        recipeId: 21,
        quantity: 3,
        measurement: "tbsp"
      },
      {
        name: "Tomato",
        recipeId: 22,
        quantity: 2,
        measurement: "pieces"
      },
      {
        name: "Daikon",
        recipeId: 22,
        quantity: 300,
        measurement: "gram",
        ingredientDescriptionId: 1
      },
      {
        name: "Green onions",
        recipeId: 22,
        quantity: 4,
        measurement: "stalks"
      },
      {
        name: "Sliced pork",
        recipeId: 22,
        quantity: 225,
        measurement: "gram"
      },
      {
        name: "Rice vinegar",
        recipeId: 22,
        quantity: 2,
        measurement: "tbsp"
      },
      {
        name: "Soy sauce",
        recipeId: 22,
        quantity: 2,
        measurement: "tbsp",
        ingredientDescriptionId: 3
      },
      {
        name: "Sesame oil",
        recipeId: 22,
        quantity: 2,
        measurement: "tbsp"
      },
      {
        name: "Carrot",
        recipeId: 23,
        quantity: 1,
        measurement: "piece"
      },
      {
        name: "Green beans",
        recipeId: 23,
        quantity: 15,
        measurement: "pieces"
      },
      {
        name: "Soy sauce",
        recipeId: 23,
        quantity: 2,
        measurement: "tbsp",
        ingredientDescriptionId: 3
      },
      {
        name: "Sugar",
        recipeId: 23,
        quantity: 1,
        measurement: "tbsp"
      },
      {
        name: "Sake",
        recipeId: 23,
        quantity: 1,
        measurement: "tbsp",
        ingredientDescriptionId: 5
      },
      {
        name: "Water",
        recipeId: 23,
        quantity: 2,
        measurement: "tbsp"
      },
      {
        name: "Sliced beef",
        recipeId: 23,
        quantity: 200,
        measurement: "gram"
      },
      {
        name: "Oil",
        recipeId: 23,
        quantity: 1,
        measurement: "tbsp"
      },
      // {
      //   name: "",
      //   recipeId: 23,
      //   quantity: ,
      //   measurement: ""
      // },
      // {
      //   name: "",
      //   recipeId: 23,
      //   quantity: ,
      //   measurement: ""
      // },
      // {
      //   name: "",
      //   recipeId: 23,
      //   quantity: ,
      //   measurement: ""
      // },
      // {
      //   name: "",
      //   recipeId: 23,
      //   quantity: ,
      //   measurement: ""
      // },



















    ], {});

  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('ingredients', null, {});

  }
};
