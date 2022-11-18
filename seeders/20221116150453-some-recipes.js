'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("recipes", [{
      //1
      name: "Pickled Herring",
      description: "Herring pickles are a local dish that conveys the history of the herring industry in Hokkaido. From the late Edo period to the Meiji period, the herring fishery flourished in Hokkaido, especially along the Sea of Japan. In spring, when large schools of herring rushed to the coast to spawn, the sea was dyed pure white. The herring catch peaked in the Meiji era, and there was a period of close to 1 million tons of landings, but from around the 30s of the Showa era, the number of herrings decreased sharply, and almost no herring could be caught. Currently, herring is often caught in lakes such as Lake Akkeshi and its surroundings, but the catch is far from the peak.",
      rating: 2,
      image: "/Users/Akiko_1/Desktop/portfolio-project/backed2/images/nishinZuke.jpeg",
      time: "20 minutes",
      difficulty: "easy",
      categoryId: 4,
      portions: 10,
      prefectureId: 1
    },
    {
      //2
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
    {
      //3
      name: "Chan chan yaki salmon",
      description: "Bara-yaki is a dish of grilled beef rib meat cooked on a hot plate or teppan surface over a massive bed of sliced onions. The dish was created in Aomori’s Towada City by local Korean immigrants and is flavored with a sweet and slightly spicy soy sauce, reminiscent of Korean-style barbecue. With its rich, yet down-to-earth taste, it’s no wonder that many people consider bara-yaki to be the “soul food” of Aomori.",
      rating: 4,
      image: "https://assets.st-note.com/production/uploads/images/62050470/picture_pc_7e764c89d79667bac5c1aad88bef1343.jpg?width=800",
      time: "30 minutes",
      difficulty: "easy",
      categoryId: 4,
      portions: 2,
      prefectureId: 1
    },
    {
      //4
      name: "Zya Zya noodles",
      description: "Jajamen is said to have originated when repatriates from China recreated local home cooking using ingredients available in Morioka. It looks like a Chinese dish called \"jajangmen\", with meat miso, cucumbers, and green onions on top of flat noodles that look like kishimen! \n The type and amount of seasoning to add is up to you, so you can enjoy finding your favorite taste, which is the unique appeal of jajamen.\n The miso flavor is mixed with sweetness, sourness, and spiciness, creating a complex and deep flavor! Also, the chewy noodles are mixed with minced meat, cucumbers, and green onions, giving it a unique texture.",
      rating: 4,
      image: "https://assets.st-note.com/production/uploads/images/62191190/picture_pc_cff2cc275b597f56b985da660b6fb4f1.png?width=800",
      time: "15 minutes",
      difficulty: "medium",
      categoryId: 3,
      portions: 2,
      prefectureId: 3
    },
    {
      //5
      name: "Yokote Yakisoba",
      description: "Yakisoba is a classic Japanese stir-fried noodle dish that’s seasoned with a sweet and savory sauce similar to Worcestershire sauce. Use any proteins you like: pork, chicken, shrimp, or calamari. For vegetarians, just swap it with tofu or shiitake mushrooms. Yokote yakisoba is characterized by the addition of cabbage and minced pork, topped with a fried egg, and Fukujinzuke pickles. Another feature of Yokote yakisoba is the use of thick noodles!",
      rating: 4,
      image: "https://assets.st-note.com/production/uploads/images/61960468/picture_pc_8e3f4910543747ebaf346706520d869e.png?width=800",
      time: "15 minutes",
      difficulty: "medium",
      categoryId: 3,
      portions: 1,
      prefectureId: 4
    },
    {
      //6
      name: "Salmon \"Harako\" Rice",
      description: "A salty-sweet salmon fillet simmered in kombu dashi and soy sauce.It's a local autumn dish where you cook rice in the broth and put plenty of salmon and salmon roe on top of the rice!\n Miyagi Prefecture has many rivers, large and small, including the Kitakami River, Naruse River, and Abukuma River, and every autumn salmon swim upstream to spawn. The season for natural autumn salmon (white salmon) begins in earnest in October and continues until mid-December. Although it is only in season for about two months in a year, autumn salmon return to the sea in their hometown four years after they are released. The trip goes as far as Alaska and the Sea of ​​Okhotsk and returns to the Sanriku Sea. Natural autumn salmon can be said to be the blessing of the extremely cold sea where the water temperature is low.\n \"Harako-meshi\" is famous for being presented by the people of the domain when Prince Date Masamune inspected the construction of the canal in Arahama. \n Even before it was presented to Prince Masamune, the salmon that ran upstream in the Abukuma River was caught with a seine and was eaten as a local fisherman's meal.",
      rating: 5,
      image: "https://assets.st-note.com/production/uploads/images/63329537/picture_pc_501402dddef0c3a20126eac2469844c4.png?width=800",
      time: "1.5 hours",
      difficulty: "medium",
      categoryId: 4,
      portions: 3,
      prefectureId: 5
    },
    {
      //7
      name: "Dasi salad",
      description: "A salty-sweet salmon fillet simmered in kombu dashi and soy sauce.It's a local autumn dish where you cook rice in the broth and put plenty of salmon and salmon roe on top of the rice!\n Miyagi Prefecture has many rivers, large and small, including the Kitakami River, Naruse River, and Abukuma River, and every autumn salmon swim upstream to spawn. The season for natural autumn salmon (white salmon) begins in earnest in October and continues until mid-December. Although it is only in season for about two months in a year, autumn salmon return to the sea in their hometown four years after they are released. The trip goes as far as Alaska and the Sea of ​​Okhotsk and returns to the Sanriku Sea. Natural autumn salmon can be said to be the blessing of the extremely cold sea where the water temperature is low.\n \"Harako-meshi\" is famous for being presented by the people of the domain when Prince Date Masamune inspected the construction of the canal in Arahama. \n Even before it was presented to Prince Masamune, the salmon that ran upstream in the Abukuma River was caught with a seine and was eaten as a local fisherman's meal.",
      rating: 4,
      image: "https://assets.st-note.com/production/uploads/images/60240714/picture_pc_116f66b8150d557b2d7dd3b33c95b378.jpg?width=800",
      time: "1.5 hours",
      difficulty: "easy",
      categoryId: 2,
      portions: 4,
      prefectureId: 6
    },
    {
      //8
      name: "Ikaninnjin - Squid and carrots",
      description: "Ikanjin is a local dish from the northern part of Nakadori in Fukushima Prefecture. \n Sliced squid and carrots are seasoned with soy sauce, sake, and mirin. It is mainly made in each household from late autumn to winter, and is popular as an appetizer or side dish.It's also perfect to accompany rice. \n The umami of dried squid and the sweetness of carrots are combined, combined very well with Japanese sake",
      rating: 2,
      image: "https://assets.st-note.com/production/uploads/images/61082018/picture_pc_68fce37d027a96132165f5d1691327eb.png?width=800",
      time: "1 day",
      difficulty: "easy",
      categoryId: 4,
      portions: 4,
      prefectureId: 7
    },
    {
      //9
      name: "Kenchi jiru ",
      description: "Kenchin-jiru is a vegetarian dish that was originally served at temples, and it is said that the orthodox style of kenchin-jiru uses only vegetables and no meat. Kenchin-jiru is characterized by stir-frying vegetables in oil and then adding dashi stock. Today, it has taken root in Nasu as a local dish, and is eaten not only in soup but also in udon noodles.",
      rating: 4,
      image: "https://assets.st-note.com/production/uploads/images/61517765/picture_pc_710425650888c3b839c34cbfa409de3a.png?width=800",
      time: "40 minutes",
      difficulty: "hard",
      categoryId: 2,
      portions: 4,
      prefectureId: 8
    },
    {
      //10
      name: "Annkou nabe - Monk fish hotpot",
      description: "Though in this case we will be using cod, the anglerfish is a winter delicacy that represents Ibaraki Prefecture. Ibaraki monkfish is in season from November to March, and is said to be especially delicious from December to February when the liver is enlarged. The more shiny the skin, the fresher it is. Monkfish is low in fat, healthy and good for beauty",
      rating: 3,
      image: "https://assets.st-note.com/production/uploads/images/62895245/picture_pc_a49e4c7c5a8c3ec332a973ed65861501.jpg?width=800",
      time: "40 minutes",
      difficulty: "medium",
      categoryId: 4,
      portions: 2,
      prefectureId: 9
    },
    {
      //11
      name: "Kodomo Yoshoku",
      description: "Kodomo yoshyoku (directly translated: Children's western food) is a local gourmet of Kiryu City, Gunma Prefecture. It seems that the origin of the name is because it was a snack for children! For adults, this dish pairs well with sake!",
      rating: 3,
      image: "https://assets.st-note.com/production/uploads/images/61685108/picture_pc_b041a8c1e0ec8b84571310904c9dadc0.png?width=800",
      time: "20 minutes",
      difficulty: "easy",
      categoryId: 4,
      portions: 3,
      prefectureId: 10
    }
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('recipes', null, {});
  }
};
