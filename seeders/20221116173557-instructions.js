'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.bulkInsert('instructions', [
      {
        step: 1,
        description: "Soak the herring in rice water overnight, remove the scales and cut into 4-5cm pieces. Add the hot water and mirin into a pressure cooker, sprinkle the koji on top and mix well. Leave this over night at 60 degrees to ferment",
        recipeId: 1
      },
      {
        step: 2,
        description: "The next day wash the herring to remove any scales and cut into 3-4cm pieces. Cut the radishes, cabbage and carrots into bite size pieces and the ginger into matchsticks",
        recipeId: 1
      },
      {
        step: 3,
        description: "Wipe the your storing container with alcohol, put in a plastic bag, add radish and carrots, cabbage and herring, ginger and koji, and sprinkle salt.",
        recipeId: 1
      },
      {
        step: 4,
        description: "Wipe the storing containers lid and the weight(to weight down the lid) with alcohol and apply the weight. Leave it at room temperature",
        recipeId: 1
      },
      {
        step: 5,
        description: "After a day and a half remove the weight and give it a mix",
        recipeId: 1
      },
      {
        step: 6,
        description: "After 3 days it should be ready to eat. You can now store it in the fridge",
        recipeId: 1
      },
      {
        step: 1,
        description: "Remove the stem from the onion, cut it in half lengthwise, and cut it into 1 cm wide pieces so as to break the fiber.",
        recipeId: 2
      },
      {
        step: 2,
        description: "Peel the apple, remove the stem and core, and grate.",
        recipeId: 2
      },
      {
        step: 3,
        description: "Combine the grated apple, soy sauce, honey, grated giner, grated garlic in a bowl to make a sauce, and marinate the beef. Let it rest in the refrigerator for at least 1 hour.",
        recipeId: 2
      },
      {
        step: 4,
        description: "Heat a frying pan over medium heat, add oil and fry the onions.",
        recipeId: 2
      },
      {
        step: 5,
        description: "When the onions turn a little golden brown, add the sauce from step 3 and continue frying.",
        recipeId: 2
      }
    ], {});

  },

  async down(queryInterface, Sequelize) {

    await queryInterface.bulkDelete('instructions', null, {});

  }
};
