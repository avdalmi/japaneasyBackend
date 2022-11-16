'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.bulkInsert('prefectures', [
      {
        title: "Hokkaido 北海道",
        description: "Hokkaido, the northernmost of Japan’s main islands, is known for its volcanoes, natural hot springs (onsen) and ski areas. Rugged Daisetsuzan National Park is home to steaming, volcanic Mount Asahi. Shikotsu-Tōya National Park contains caldera lakes, geothermal springs and a Mount Fuji look-alike, Mount Yōtei. Popular ski resorts include Rusutsu, Furano and Niseko. \n If you have the chance to visit this northern island of Japan, make sure to try the wide variety of vegetables, seafood, and dairy products that Hokkaido has to offer. From its fresh and surprisingly sweet seafood, to its hearty soup curry and nabe, to its fragrant and milky rich ice cream, Hokkaido food is quite unlike anywhere else in Japan",
        image: ["https://www.pandotrip.com/wp-content/uploads/2016/02/Takinoue-980x588.jpg", "https://gaijinpot.scdn3.secure.raxcdn.com/app/uploads/sites/6/2019/10/Jozankei-Onsen-Hokkaido-Autumn-Top.jpg", "https://web-japan.org/kidsweb/explore/regions/images/Kids_Region_Hokkaido_Q_Character_AkankoLake_pixta_47139233_M.jpg", "http://cdn.shopify.com/s/files/1/1083/2612/articles/shutterstock_1064528600.jpg?v=1606919109"],
      },
      {
        title: "Aomori 青森県",
        description: "Aomori may be far from the bustling action of Tokyo or Osaka, but this northernmost prefecture of Japan’s main island of Honshu has plenty to make it an attractive destination to visit or live. The prefecture offers something for every season, from gorgeous late-blooming sakura at the scenic castle town of Hirosaki in the spring, to the summer Nebuta Festival in Aomori City with its massive parade floats, as well as Japan’s biggest apple harvest in the autumn, and peak snow conditions with pristine powder in the winter. Located on the Tsugaru Strait, Aomori also has a passenger ferry that can be taken across the strait from Aomori City to Hakodate, Hokkaido. \n Aomori’s food cannot be overlooked either. Surrounded by the sea on three sides, Aomori offers up plenty of fresh fish and seafood in its coastal areas, in addition to rice, grains, yams, and apples from the region’s traditional farming and forestry sectors. The prefecture is known for its heavy snowfall, so many of Aomori’s regional foods are hearty winter dishes that help people get through the long, cold winter season. Read on for 9 famous Aomori dishes that highlight the wonderful cuisine of the prefecture.",
        image: ["https://www.pandotrip.com/wp-content/uploads/2016/02/Takinoue-980x588.jpg", "https://gaijinpot.scdn3.secure.raxcdn.com/app/uploads/sites/6/2019/10/Jozankei-Onsen-Hokkaido-Autumn-Top.jpg", "https://web-japan.org/kidsweb/explore/regions/images/Kids_Region_Hokkaido_Q_Character_AkankoLake_pixta_47139233_M.jpg", "http://cdn.shopify.com/s/files/1/1083/2612/articles/shutterstock_1064528600.jpg?v=1606919109"],
      }
    ], {});

  },

  async down(queryInterface, Sequelize) {

    await queryInterface.bulkDelete('prefectures', null, {});

  }
};
