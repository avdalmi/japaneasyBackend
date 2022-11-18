'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.bulkInsert('ingredientDescriptions', [
      {
        name: "Daikon",
        description: "Daikon is a long white root vegetable grown throughout East and South Asian countries. It sort of resembles an extra-extra large carrot and, like many radish varieties, it’s nutritious, crunchy, refreshing, and takes on different consistencies and flavors depending on how it’s cooked. \n Daikon radishes can grow up to 20 inches long and are mostly white, although some varieties like the Korean mu have light green coloring near their leaves. Red radishes tend to be spicier, max out at about two inches in diameter, and are more commonly consumed in Western cuisines.",
        substitution: "White turnips will likely be your best bet when you can't find daikon, as the root vegetables are similar (but not identical) in appearance, flavor, and texture. Jicama. If you're looking to replicate raw daikon's crunchy texture, try substituting jicama.",
        image: "https://cdn.pixabay.com/photo/2011/03/24/10/31/white-radish-5756_960_720.jpg",
        ingredientId: 1
      },
      {
        name: "Koji",
        description: "Koji is a strain of Aspergillus oryzae, a fungus used for various culinary purposes, including the production of alcoholic beverages like sake or shōchū, or invaluable condiments like miso, mirin, and shōyu (soy sauce).\n Like yeast starters in bread making, koji kickstarts the fermentation process when added to other base ingredients, like soybeans, rice, or wheat grains like barley. When applied to proteins, koji acts as a curing agent in the production of charcuterie. The enzymes present in koji molds (like amylase and glutamate) transform starches and proteins into amino acids and sugars. The resulting flavors define the realm of umami: sweet, savory, salty, with an undertone of pleasing funk.\n Koji can also refer to other molds in the same bacterial family; for example, Aspergillus sojae, rather than Aspergillus oryzae, may also be used to make miso and shōyu.",
        substitution: "To begin with, there is no better meat tenderizer than yogurt. This is because yogurt has lactic acid bacteria, which helps soften the meat. Many people make the mistake of adding Greek yogurt or flavored yogurt to the meat but it can change the flavor of the recipe. So, it’s recommended that you add plain yogurt in place of shio koji. However, we recommend that you add a bit of lemon to add the kick of flavor.\n Miso paste is also one of the best choices for people who are looking to add umami flavor to the meat. Miso paste is basically a fermented food that has koji, which is why it’s suitable to replace shio koji. Miso paste offers umami, rich, and salty flavor to the recipe. In addition to meat recipes, it can be used to upgrade the flavor of any recipe but it’s recommended that you add some sweet seasoning to enhance the flavor.",
        image: "https://assets.epicurious.com/photos/5e78e6064555bc000874ac13/master/w_2516,h_1667,c_limit/ShioKoji.jpg",
        ingredientId: 2,
      },
      {
        name: "Soy Sauce",
        description: "Soy sauce is one of the oldest condiments in the world. It's believed to have originated during the Western Han Dynasty in China, over 2,500 years ago, a byproduct of fermented soybeans and wheat that have been mixed with brine. Known in Chinese as jiang you, soy sauce's manufacturing process slowly spread across Asia and was readily adopted by various different culinary traditions, and now is one of the most used condiments in the world.\n While there are many different kinds of soy sauces, many of them share the same manufacturing process. First, a substrate of cooked soybeans, often mixed with roasted wheat, is inoculated with Apergillus mold. After the mold colonizes the substrate, a process that takes about three days, the culture is combined with salt water and transferred to large vats where lactobacillus—a bacteria that breaks down sugars into lactic acid—is added, and the resulting mixture ferments for a period of time, anywhere from six months for some standard supermarket brands to several years for more pricey bottles. Once fermented, the mixture is strained and the liquid is typically pasteurized, bottled, and sold. /nDespite the fact that soy sauce originated in China, if you stand in the international foods aisle of a mainstream grocery store, you're most likely to see a range of shoyu, or Japanese-style soy sauces. While traditional Chinese soy sauces were made only using soy beans (some modern Chinese soy sauces contain wheat, too), when the brewing method made its way to Japan, the recipe was modified to use an even ratio of soybeans and wheat, producing a soy sauce with a sweeter flavor profile. There are two primary types of Japanese soy sauce, koikuchi shoyu (dark soy sauce) and usukuchi shoyu (light soy sauce), but there are three others, namely shiro shoyu (white soy sauce), tamari shoyu, and saishikomi shoyu (twice-brewed soy sauce). \n Koikuchi Shoyu (Dark Soy Sauce)\n Use: General purpose seasoning for cooked and raw applications. \n Koikuchi shoyu is the most commonly used soy sauce in the Japanese kitchen, and it's likely what you think of when you think of soy sauce. Most major supermarket brands available in the US, like Kikkoman's All-Purpose Naturally Brewed Soy Sauce, don't indicate a type on the label, but they are koikuchi shoyu. \n Usukuchi Shoyu (Light Soy Sauce) \n Use: General purpose cooking and seasoning, particularly in light-colored dishes such as soups and braises. \n",
        image: "https://cdn.pixabay.com/photo/2017/09/21/01/00/sauce-2770300_960_720.jpg",
        ingredientId: 14,
      },
      {
        name: "Mirin",
        description: "Mirin is similar to sake, but has more sugar and a lower alcohol content (14% to be precise). A staple in many Japanese kitchens, it pairs especially well with soy sauce (both of which are ingredients in homemade teriyaki sauce). Of course, there's a chance that your local grocery store won't carry mirin—at least not in its purest form. Some bigger brands like Kikkoman will be labled as \"aji-mirin\" (which translates to \"tastes like mirin\"\), which means they're probably cut with added sweeteners, but they'll more than do the trick.",
        substitution: "You can always buy mirin online, but if you're really in a crunch, you can sub in a dry sherry or a sweet marsala wine. Dry white wine or rice vinegar will also do, though you'll need to counteract the sourness with about a 1/2 teaspoon of sugar for every tablespoon you use.",
        image: "https://www.justonecookbook.com/wp-content/uploads/2022/03/Japanese-Mirin-9297.jpg",
        ingredientId: 14,
      },
      {
        name: "Sake",
        description: "Sake is very important in Japanese cuisine. It is a building block in the flavor of marinades and soups. It is used when stir-frying, steaming foods, cooking rice, and baking. We use it to remove odors, to add flavor, and to add umami to dishes. It is a versatile ingredient with many uses, and it is very different from the sake that you just poured to sip while you read this blog post.\n In broad strokes, cooking sake, compared with the sake you are drinking, has a lower alcohol content (ABV), more concentrated flavor and sometimes contains salt. If you were to use the sake you’re drinking as a substitute for cooking sake you’d probably need to double the amount you use to impart the same amount of flavor and you’d also be introducing a lot more alcohol.\n Cooking sake is not governed by the same controls used for premium sake. It can be brewed from low grade rice; it can have amino acids and sugars added; it can have alcohol added and then be diluted for more volume All of this makes cooking sake generally cheaper, gives it a unique flavor, and makes it perfect for cooking.",
        substitution: "The best sake substitute? Dry sherry. Cooking sherry is dry white wine that’s been fortified by adding alcohol. The flavor is sharp, with a scent of apple cider and a very dry finish. The flavor is a bit stronger than sake, but it’s close. Use it as a 1:1 replacement. \n Another good sake substitute? Dry white wine. The flavor profiles of sake and dry white wine are very similar, though sake may be slightly stronger. Use a dry white wine as a 1:1 replacement. Avoid using a sweet wine, because it will give the recipe an entirely new character.",
        image: "https://cdn.pixabay.com/photo/2017/08/03/14/00/shrine-2576477_960_720.jpg",
        ingredientId: 14,
      },
      {
        name: "Dried Shiitake",
        description: "Flavorful shiitake mushrooms are such a foundation of Asian cooking. They have an intense flavor. Dried shiitake mushrooms can easily add deep savory flavor, umami, to dishes. I like to think of them as healthy little punches of flavor since they contain no fat, and even vegans can eat them. \n While fresh shiitake mushrooms are just as delicious, they can be harder to find, so having dried shiitake mushrooms stocked in your pantry means that you always have a flavorful ingredient at your fingertips. They\'re easily found at Asian grocery stores and can last for months, maybe even years, if stored in an airtight container in a cool place or the refrigerator. \n But the best part about these dried mushrooms? Since you have to rehydrate them in hot water before they can be used, the mushroom soaking liquid that you’re left with is a tasty bonus ingredient! Don’t waste that liquid — use it in the place of chicken broth or as the base of a sauce.",
        substitution: "The best sake substitute? Dry sherry. Cooking sherry is dry white wine that’s been fortified by adding alcohol. The flavor is sharp, with a scent of apple cider and a very dry finish. The flavor is a bit stronger than sake, but it’s close. Use it as a 1:1 replacement. \n Another good sake substitute? Dry white wine. The flavor profiles of sake and dry white wine are very similar, though sake may be slightly stronger. Use a dry white wine as a 1:1 replacement. Avoid using a sweet wine, because it will give the recipe an entirely new character.",
        image: "https://cdn.pixabay.com/photo/2017/12/01/07/35/food-2990321_960_720.jpg",
        ingredientId: 14,
      },
      {
        name: "Red miso",
        description: "This is also typically made from soybeans fermented with barley or other grains, though with a higher percentage of soybeans and/or a longer fermentation period. It can range in color from red to dark brown. The deep umami flavor of red miso can overwhelm mild dishes, but is perfect for hearty soups, braises, and glazes.",
        substitution: "You can substitute with any miso available to you",
        image: "https://cdn.media.amplience.net/i/japancentre/Category-header-10907-red-miso/Buy-Japanese-Red-Miso-Online?$poi$&w=1200&h=630&sm=c&fmt=auto",
        ingredientId: 25
      },
      {
        name: "Yellow miso",
        description: "Yellow miso is usually made from soybeans that have been fermented with barley and sometimes a small percentage of rice. It can be yellow to light brown in color. This miso has a mild, earthy flavor and is better for general use in not only condiments, but soups, marinades, and glazes.",
        substitution: "You can substitute with any miso available to you",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3lENnPsmX7p5VpArdVu0BBNAz61sAFBFdRg&usqp=CAU"
      }
    ], {});

  },

  async down(queryInterface, Sequelize) {

    await queryInterface.bulkDelete('ingredientDescriptions', null, {});

  }
};
