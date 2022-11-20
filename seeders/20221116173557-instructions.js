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
      {
        step: 1,
        description: "Peel the Japanese taro, grate it, put it in a bowl, and mix it with the cake flour and beaten egg. Knead until soft like an earlobe. Cover with plastic wrap and leave for 1-2 hours to make it soft and stretchy.",
        recipeId: 12
      },
      {
        step: 2,
        description: "Cut the daikon into chunks, the fried tofu into strips, the spring onion into rounds, and slice the shiitake mushrooms",
        recipeId: 12
      },
      {
        step: 3,
        description: "Put water and shirodashi in a pot, add root vegetables such as daikon radish, carrots and lotus root, and heat.",
        recipeId: 12
      },
      {
        step: 4,
        description: "After 2 to 3 minutes after boiling, add the dough with a spoon and add it while making it round. (The picture is large, but the smaller ones are softer and easier to eat.)",
        recipeId: 12
      },
      {
        step: 5,
        description: "Add the rest of the shiitake mushrooms, green onions, and fried tofu and simmer for about 2 minutes.",
        recipeId: 12
      },
      {
        step: 6,
        description: "Finally, add soy sauce and mix to complete.",
        recipeId: 12
      },
      {
        step: 1,
        description: "Separate Shimeji mushrooms into pieces. Slice Shiitake thinly.",
        recipeId: 13
      },
      {
        step: 2,
        description: "Wash rice and put in the rice cooker's removable bowl. Add salt, Soy Sauce, Sake and Mirin and stir. Add enough water to reach the line for 2 cups of rice, and then add mushrooms. Cook like white rice (according to the rice cooker instructions).",
        recipeId: 13
      },
      {
        step: 3,
        description: "After the rice is done, mix in green onions.",
        recipeId: 13
      },
      {
        step: 1,
        description: "Cut carrot into thin match sticks. Measure about 2 cups.",
        recipeId: 14
      },
      {
        step: 2,
        description: "Heat sesame oil in a frying pan at medium low heat. Add carrot and cook until tender, taking care not to brown too much. Add Soy Sauce, Sake, and salt, and cook for a minute.",
        recipeId: 14
      },
      {
        step: 3,
        description: "Add egg and stir like making scrambled eggs. When egg is set, remove from heat.",
        recipeId: 14
      },
      {
        step: 1,
        description: "Cut Kabocha into small pieces and place in a microwave-safe dish. Cover and cook about 6 minutes in the microwave oven or until soft. Remove skins and mash Kabocha (you don't need to mash all the way if you want it chunky).",
        recipeId: 15
      },
      {
        step: 2,
        description: "Slice cucumber thinly and sprinkle with salt in another bowl. Let it sit for a few minutes and squeeze water out.",
        recipeId: 15
      },
      {
        step: 3,
        description: "Mix Kabocha, cucumber, lemon juice and mayonnaise. Salt and pepper to taste.",
        recipeId: 15
      },
      {
        step: 1,
        description: "Blanch okra and slice thinly. Dice tomato into small cube and cut Nagaimo into thin match sticks. Cut Shiso leaves very thinly. Keep all the vegetables cold in the fridge.",
        recipeId: 16
      },
      {
        step: 2,
        description: "Cook dried Somen noodles according to the package. Wash well under running water. Chill in ice water if you like. Drain water when noodles are cold.",
        recipeId: 16
      },
      {
        step: 3,
        description: "Mix Mentsuyu and cold water.",
        recipeId: 16
      },
      {
        step: 4,
        description: "Place half of noodles in a deep dish or bowl and top with vegetables. Pour half of the sauce on top. Repeat for second serving.",
        recipeId: 16
      },
      {
        step: 1,
        description: "Cut potato into 1/4” (6 mm) thick bite size pieces. Peel carrot, cut vertically in half, and slice thinly. Cut Napa cabbage into 1” (2.4 mm) wide strips.",
        recipeId: 17
      },
      {
        step: 2,
        description: "Boil Dashi, add vegetables (except green onions), and cook until tender.",
        recipeId: 17
      },
      {
        step: 3,
        description: "Dissolve Miso paste in the soup. Add green onions just before serving.",
        recipeId: 17
      },
      {
        step: 1,
        description: "Cut Nappa cabbage into bite size pieces. Slice long white onions diagonally. Cut Nira into 2 inch long pieces. Pull apart mushrooms into small bunches by hand. Cut Tofu into 8-10 pieces. Cut thinly sliced pork into smaller pieces if too big.",
        recipeId: 18
      },
      {
        step: 2,
        description: "In a large pot, heat sesame oil at medium heat. Add Kimchi and cook for a couple of minutes. Add Dashi and Kimchi liquid. When the soup starts to boil, add Miso paste, Sake, and salt to taste.",
        recipeId: 18
      },
      {
        step: 3,
        description: "Then add all the vegetables except Nira. Cook covered until vegetables are tender. Add sliced pork, and lastly Nira.",
        recipeId: 18
      },
      {
        step: 1,
        description: "Chop cabbage finely. Sprinkle 1/4 tsp salt over cabbage and mix. Let sit for 5 minutes, and squeeze out water very well. Do the same for the onion. Cut Nira, Shiitake, and bamboo shoot into very small pieces. Grate garlic and ginger.",
        recipeId: 19
      },
      {
        step: 2,
        description: "In a large bowl, put in all the ingredients (except skins and frying oil), and mix well.",
        recipeId: 19
      },
      {
        step: 3,
        description: "Take a sheet of gyoza wrapper in your hand and place about a tablespoon of the mixture in the center of the wrapper. Moisten the edge along the lower half of the wrapper and fold the upper half of the wrapper up to meet the moistened edge. Fold one of the edges in a series of pleats (about 6), leaving the other edge smooth. Press the edges together to seal the gyoza. Repeat for the rest of the wrappers.",
        recipeId: 19
      },
      {
        step: 4,
        description: "Heat deep-frying oil at medium high heat. Deep fry Gyoza until golden.",
        recipeId: 19
      },
      {
        step: 5,
        description: "Mix soy sauce, rice vinegar, and Rayu chili oil (optional) together for a dipping sauce.",
        recipeId: 19
      },
      {
        step: 1,
        description: "Remove cabbage leaves carefully, not tearing too much. Microwave cabbage for 2 minutes to make cabbage pliable. Set aside. Chop onion finely.",
        recipeId: 20
      },
      {
        step: 2,
        description: "Put meat, onion, salt and pepper, egg, and Panko together in a large bowl, and then mix very well. Divide the meat into 10 portions and form each into a rough cylinder. Wrap each meat ball with cabbage tucking the end of the leaf under. Place cabbage wrapped meat in a pan that fits 10 pieces of them.",
        recipeId: 20
      },
      {
        step: 3,
        description: "Add the rest of the ingredients to the pot, and cook at medium heat covering loosely for 20 minutes or so.",
        recipeId: 20
      },
      {
        step: 4,
        description: "Serve with chopped parsley.",
        recipeId: 20
      },
      {
        step: 1,
        description: "Cut fillets into 3 pieces, and blanch in boiling water for a couple of seconds . Remove from water and set aside.",
        recipeId: 21
      },
      {
        step: 2,
        description: "Cut Daikon radish into 1 inch thick rounds. Then peel and cut into halves. Round off the sharp edges. In a pot boil enough water to cover, and cook Daikon for 15 minutes until easily pierced with a toothpick. Strain water and set aside.",
        recipeId: 21
      },
      {
        step: 3,
        description: "Cut ginger thinly, like matchsticks.",
        recipeId: 21
      },
      {
        step: 4,
        description: "In a medium pot, add water, Soy Sauce, Sake, Mirin, and sugar, and let boil. Add fish, Daikon, and ginger. Cover with parchment paper and cook 25 minutes. Cool completely. Serve at room temperature or reheat.",
        recipeId: 21
      },
      {
        step: 1,
        description: "Slice tomatoes thinly, and place them to cover the plate. Finely grate Daikon radish and set aside. Chop green onions into small pieces and set aside.",
        recipeId: 22
      },
      {
        step: 2,
        description: "Make the dressing. Mix all the ingredients for the dressing and set aside.",
        recipeId: 22
      },
      {
        step: 3,
        description: "n a large pot, boil water and cook pork slices one by one for 15 seconds or so. Remove from hot water, put in ice water to cool, and pat dry with paper towel.",
        recipeId: 22
      },
      {
        step: 4,
        description: "Place grated Daikon radish and pork over tomatoes, top with chopped green onions. At this point you can chill in the fridge for 1/2-1 hour. Drizzle the dressing before serving.",
        recipeId: 22
      },

      {
        step: 1,
        description: "Peel and cut the carrot into 7.5cm by 8mm square sticks. Cut green beans into 3cm long pieces.",
        recipeId: 23
      },
      {
        step: 2,
        description: "Cook carrot first in salted boiling water for 2 minutes, and add green beans and cook together for another 2 minutes. Strain and let them cool.",
        recipeId: 23
      },
      {
        step: 3,
        description: "In a small bowl, mix Soy Sauce, sugar, Sake, and 2 Tbsp water until the sugar dissolves completely. Set aside.",
        recipeId: 23
      },
      {
        step: 4,
        description: "Open up a thin beef strip on a cutting board, place 2-3 carrot sticks and 2-3 green beans on the end of the meat, and then roll up. Repeat for each strip of meat.",
        recipeId: 23
      },

      {
        step: 5,
        description: "Heat oil in a frying pan at medium heat, place the meat rolls in the pan (end of the meat strip down), and start cooking. Cook while turning, until browned all the way around, about 7-8 minutes.",
        recipeId: 23
      },
      {
        step: 6,
        description: "Turn down heat to low, and add Soy Sauce mixture. Coat the meat with the sauce well.",
        recipeId: 23
      },
      {
        step: 7,
        description: "Cut the rolls in half, and serve.",
        recipeId: 23
      },
      // {
      //   step: ,
      //   description: "",
      //   recipeId: 23
      // },
      // {
      //   step: ,
      //   description: "",
      //   recipeId: 23
      // },
      // {
      //   step: ,
      //   description: "",
      //   recipeId: 23
      // },











    ], {});

  },

  async down(queryInterface, Sequelize) {

    await queryInterface.bulkDelete('instructions', null, {});

  }
};
