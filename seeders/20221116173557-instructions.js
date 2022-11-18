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
      },
      {
        step: 1,
        description: "Cut the salmon filet into 4 pieces each",
        recipeId: 3
      },
      {
        step: 2,
        description: "Cut the cabbage into bite sized pieces",
        recipeId: 3
      },
      {
        step: 3,
        description: "Cut the paprika into long thin pieces",
        recipeId: 3
      },
      {
        step: 4,
        description: "Peel the potatoes and cut them into bite sized pieces",
        recipeId: 3
      },
      {
        step: 5,
        description: "Mix the red miso, white sesame seeds, sugar, soy sauce, mirin, sake and butter in a bowl. Cover the bowl with a heat resistant plastic foil and microwave it for 1.5 minutes at 600W",
        recipeId: 3
      },
      {
        step: 6,
        description: "Pour the oil in a hot frying pan and grill the salmon on both sides until crispy",
        recipeId: 3
      },
      {
        step: 7,
        description: "When the salmon is almost cooked through add in the cabbage, bean sprouts, onions, and paprika. Cover the pan with a lid and let it steam for 10minutes",
        recipeId: 3
      },
      {
        step: 8,
        description: "Once 10 minutes hav passed, add the sauce made in step 5 and mix it well",
        recipeId: 3
      },
      {
        step: 9,
        description: "Add in the butter and sprinkle it with some chopped spring onions if preferred",
        recipeId: 3
      },
      {
        step: 1,
        description: "Cut the spring onion into small pieces and the cucumber into strips",
        recipeId: 4
      },
      {
        step: 2,
        description: "Add 1 tablespoon of sesame oil, grated garlic and ginger to a frying pan and heat over medium heat. When the aroma comes out, add the onions and sauté until softened.",
        recipeId: 4
      },
      {
        step: 3,
        description: "Add minced pork and fry until the color changes. Add the tobanjan to your liking and stir-fry. Mix the miso, oyster sauce, sugar and the water in a small pot and heat until thickened.",
        recipeId: 4
      },
      {
        step: 4,
        description: "When it becomes thick, add ground black sesame and when the moisture is almost gone, the meat miso is ready",
        recipeId: 4
      },
      {
        step: 5,
        description: "Boil plenty of water in a pot, boil the udon according to the instructions, drain well, and serve on a plate.",
        recipeId: 4
      },
      {
        step: 6,
        description: "Top with meat miso, cucumber, green onion, and grated ginger, sprinkle with vinegar and chili oil, and enjoy!",
        recipeId: 4
      },
      {
        step: 1,
        description: "Cut the cabbage, carrots, and paprika into bite sized pieces. Mix the water, osyter sauce, tonkatsu sauce and dashi power in a bowl to make the sauce.",
        recipeId: 5
      },
      {
        step: 2,
        description: "Heat 1 small amount of oil in a frying pan over medium heat, add minced pork and fry while loosening. When the color changes, add cabbage, carrots, and green peppers and fry.",
        recipeId: 5
      },
      {
        step: 3,
        description: "When the oil has soaked into the vegetables, add the yakisoba noodles and the the sauce made in step 1, and mix the flavors together. Serve on a plate",
        recipeId: 5
      },
      {
        step: 4,
        description: "Lightly wipe the frying pan with kitchen paper, add 1 small amount of oil, and crack the egg. Cover and heat over low to medium heat for 1 to 1.5 minutes while keeping an eye on it. It is done when the egg whites are cooked through.",
        recipeId: 5
      },
      {
        step: 1,
        description: "Remove the salmon bones with tweezers. If you don't have tweezers, you can easily pull it out by hand after cooking. Put kelp and 450ml of water in a pot and soak for 30 minutes. Wash the rice and put it in a colander.",
        recipeId: 6
      },
      {
        step: 2,
        description: "Divide a piece of salmon into 3 equal parts, sprinkle with light salt and leave for about 10 minutes. Wipe off the moisture on the surface with kitchen paper.",
        recipeId: 6
      },
      {
        step: 3,
        description: "Mix the soy sauce, sake, mirin, and sugar in a pot and add the water with konbu in it and bring it to a boil",
        recipeId: 6
      },
      {
        step: 4,
        description: "Add salmon fillet and simmer for 5 minutes. Remove the salmon and konbu and remove skin from the salmon. Remove any small bones if necessary.",
        recipeId: 6
      },
      {
        step: 5,
        description: "Put the rice in the rice cooker and measure the amount of broth you have before adding it in. If the broth is less than 600ml, add more water to reach 600ml ",
        recipeId: 6
      },
      {
        step: 6,
        description: "Cook the rice normally. When the rice is cooked, add the salmon fillet, cover and steam until ready to eat.",
        recipeId: 6
      },
      {
        step: 7,
        description: "Place the rice in a bowl, put the salmon on top, and add some salmon roe to complete.",
        recipeId: 6
      },
      {
        step: 1,
        description: "Roughly chop the eggplants and soak in plenty of water for 10 minutes to remove the scum and drain.",
        recipeId: 7
      },
      {
        step: 2,
        description: "Coarsely chop the cucumber, slice the okra into rounds",
        recipeId: 7
      },
      {
        step: 3,
        description: "Put all the cut vegetables in a bowl, add white dashi stock and then add mentsuyu and water.",
        recipeId: 7
      },
      {
        step: 4,
        description: "Let it chill in the refridgerator for 1 hour and then serve",
        recipeId: 7
      },
      {
        step: 1,
        description: "Cut the body part of the squid with kitchen scissors. In a bowl add the squid and cover it with 120cc of sake and let it soak for 30 minutes. Cut the carrots into matchsticks ",
        recipeId: 8
      },
      {
        step: 2,
        description: "To make the dashi add the remaining sake in a pot and briefly bring it to a boil",
        recipeId: 8
      },
      {
        step: 3,
        description: "Put the drained dried squid and carrots in a bowl.",
        recipeId: 8
      },
      {
        step: 4,
        description: "Add 100ml of dashi stock, 1 tablespoon of soy sauce, 2 tablespoons of water, 50ml of mirin, and 2 tablespoons of sugar to a small pot and bring it to a boil",
        recipeId: 8
      },
      {
        step: 5,
        description: "When it boils, turn off the heat and pour it into the bowl of with the squid and carrots while it is still hot. Mix and let it rest overnight in the refrigerator.",
        recipeId: 8
      },
      {
        step: 1,
        description: "Cut the daikon into 0.7mm slices and the carrots into bite sized pieces. Peel the skin off the Japanese taro and cut into bite sized pieces(be careful when you are cutting because Japanese taro can be slippery). Cut the shiitake into quarters.",
        recipeId: 9
      },
      {
        step: 2,
        description: "Heat oil in a pan, add daikon radish, carrot, taro, shiitake mushrooms, and fry until the oil is absorbed.",
        recipeId: 9
      },
      {
        step: 3,
        description: "When the oil is well absorbed in the whole and it is fried enough, add the tofu while tearing it.",
        recipeId: 9
      },
      {
        step: 4,
        description: "Add 2 types of dashi stock, water and the konbu, and simmer for 10 to 12 minutes until the vegetables become soft.",
        recipeId: 9
      },
      {
        step: 5,
        description: "Finally, add soy sauce and salt to taste Serve.",
        recipeId: 9
      },
      {
        step: 1,
        description: "Cut off the stalk of the enoki mushrooms and loosen them up. Cut the cabbage into chunks, slice the spring onions into 3cm pieces. Cut the tofu into large cubes. Remove the stalks off the shiitake mushrooms and cut into quarters. Cut the carrots into bite sized pieces.",
        recipeId: 10
      },
      {
        step: 2,
        description: "Boil the cod in boiling water for about 10 seconds and place into a ice bath. Drain.",
        recipeId: 10
      },
      {
        step: 3,
        description: "Put 1000ml of water and 3 slices of kelp with cuts (wipe the surface with wet paper towel) in a pot and soak for 30 minutes. Turn off the heat as soon as it boils, take out the kombu, and the kombu dashi is ready!",
        recipeId: 10
      },
      {
        step: 4,
        description: "Add the soy sauce, mirin, sugar and sake into the kelp stock we just made and bring it to a boil.",
        recipeId: 10
      },
      {
        step: 5,
        description: "When it boils, add vegetables, grilled tofu, mushrooms and shirataki.",
        recipeId: 10
      },
      {
        step: 6,
        description: "Finally, add the cod and let it cook through",
        recipeId: 10
      },
      {
        step: 1,
        description: "Cut the spring onions into bite sized pieces. wash the potato thoroughly and remove the sprouts",
        recipeId: 11
      },
      {
        step: 2,
        description: "put the potatos in a heat-resistant container with the skin on, cover with plastic wrap and heat in a 600W microwave oven for 8 minutes",
        recipeId: 11
      },
      {
        step: 3,
        description: "Peel the skin of the potatoes (it's easier if you rub them gently by wrapping them in kitchen paper) and cut them into bite-sized pieces.",
        recipeId: 11
      },
      {
        step: 4,
        description: "Heat some in a frying pan, add the potatoes and fry until golden brown.",
        recipeId: 11
      },
      {
        step: 5,
        description: "When the whole surface is baked, add green onions and sakura shrimp and stir-fry.",
        recipeId: 11
      },
      {
        step: 6,
        description: "Add Worcestershire sauce about 3 times and mix well.",
        recipeId: 11
      },
      {
        step: 7,
        description: "Arrange on a plate and sprinkle with aonori and serve.",
        recipeId: 11
      },
      // {
      //   step: ,
      //   description: "",
      //   recipeId: 11
      // },
      // {
      //   step: ,
      //   description: "",
      //   recipeId: 11
      // },





    ], {});

  },

  async down(queryInterface, Sequelize) {

    await queryInterface.bulkDelete('instructions', null, {});

  }
};
