'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("recipes", [{
      name: "Pickled Herring",
      description: "Herring pickles are a local dish that conveys the history of the herring industry in Hokkaido. From the late Edo period to the Meiji period, the herring fishery flourished in Hokkaido, especially along the Sea of Japan. In spring, when large schools of herring rushed to the coast to spawn, the sea was dyed pure white. The herring catch peaked in the Meiji era, and there was a period of close to 1 million tons of landings, but from around the 30s of the Showa era, the number of herrings decreased sharply, and almost no herring could be caught. Currently, herring is often caught in lakes such as Lake Akkeshi and its surroundings, but the catch is far from the peak.",
      rating: 3,
      image: "/Users/Akiko_1/Desktop/portfolio-project/backed2/images/nishinZuke.jpeg",
      time: "20 minutes",
      difficulty: "easy",
      categoryId: 4,
      portions: 10,
      prefectureId: 1
    },
    {
      name: "Bara-Yaki",
      description: "Bara-yaki is a dish of grilled beef rib meat cooked on a hot plate or teppan surface over a massive bed of sliced onions. The dish was created in Aomori’s Towada City by local Korean immigrants and is flavored with a sweet and slightly spicy soy sauce, reminiscent of Korean-style barbecue. With its rich, yet down-to-earth taste, it’s no wonder that many people consider bara-yaki to be the “soul food” of Aomori.",
      rating: 5,
      image: "https://gurunavi.com/en/japanfoodie/article/9delights-from-northern-japan/img/03_aomori.jpg",
      time: "80 minutes",
      difficulty: "easy",
      categoryId: 6,
      portions: 2,
      prefectureId: 2
    },

    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('recipes', null, {});
  }
};
