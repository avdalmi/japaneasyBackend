'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.bulkInsert('ingredientDescriptions', [
      {
        //1
        name: "Daikon",
        description: "Daikon is a long white root vegetable grown throughout East and South Asian countries. It sort of resembles an extra-extra large carrot and, like many radish varieties, it’s nutritious, crunchy, refreshing, and takes on different consistencies and flavors depending on how it’s cooked. \n\n Daikon radishes can grow up to 20 inches long and are mostly white, although some varieties like the Korean mu have light green coloring near their leaves. Red radishes tend to be spicier, max out at about two inches in diameter, and are more commonly consumed in Western cuisines.",
        substitution: "White turnips will likely be your best bet when you can't find daikon, as the root vegetables are similar (but not identical) in appearance, flavor, and texture. Jicama. If you're looking to replicate raw daikon's crunchy texture, try substituting jicama.",
        image: "https://cdn.pixabay.com/photo/2011/03/24/10/31/white-radish-5756_960_720.jpg",
      },
      {
        //2
        name: "Koji",
        description: "Koji is a strain of Aspergillus oryzae, a fungus used for various culinary purposes, including the production of alcoholic beverages like sake or shōchū, or invaluable condiments like miso, mirin, and shōyu (soy sauce).\n\n Like yeast starters in bread making, koji kickstarts the fermentation process when added to other base ingredients, like soybeans, rice, or wheat grains like barley. When applied to proteins, koji acts as a curing agent in the production of charcuterie. The enzymes present in koji molds (like amylase and glutamate) transform starches and proteins into amino acids and sugars. The resulting flavors define the realm of umami: sweet, savory, salty, with an undertone of pleasing funk.\n\n Koji can also refer to other molds in the same bacterial family; for example, Aspergillus sojae, rather than Aspergillus oryzae, may also be used to make miso and shōyu.",
        substitution: "To begin with, there is no better meat tenderizer than yogurt. This is because yogurt has lactic acid bacteria, which helps soften the meat. Many people make the mistake of adding Greek yogurt or flavored yogurt to the meat but it can change the flavor of the recipe. So, it’s recommended that you add plain yogurt in place of shio koji. However, we recommend that you add a bit of lemon to add the kick of flavor.\n\n Miso paste is also one of the best choices for people who are looking to add umami flavor to the meat. Miso paste is basically a fermented food that has koji, which is why it’s suitable to replace shio koji. Miso paste offers umami, rich, and salty flavor to the recipe. In addition to meat recipes, it can be used to upgrade the flavor of any recipe but it’s recommended that you add some sweet seasoning to enhance the flavor.",
        image: "https://assets.epicurious.com/photos/5e78e6064555bc000874ac13/master/w_2516,h_1667,c_limit/ShioKoji.jpg",
      },
      {
        //3
        name: "Soy Sauce",
        description: "Soy sauce is one of the oldest condiments in the world. It's believed to have originated during the Western Han Dynasty in China, over 2,500 years ago, a byproduct of fermented soybeans and wheat that have been mixed with brine. Known in Chinese as jiang you, soy sauce's manufacturing process slowly spread across Asia and was readily adopted by various different culinary traditions, and now is one of the most used condiments in the world.\n\n While there are many different kinds of soy sauces, many of them share the same manufacturing process. First, a substrate of cooked soybeans, often mixed with roasted wheat, is inoculated with Apergillus mold. After the mold colonizes the substrate, a process that takes about three days, the culture is combined with salt water and transferred to large vats where lactobacillus—a bacteria that breaks down sugars into lactic acid—is added, and the resulting mixture ferments for a period of time, anywhere from six months for some standard supermarket brands to several years for more pricey bottles. Once fermented, the mixture is strained and the liquid is typically pasteurized, bottled, and sold.\n\nDespite the fact that soy sauce originated in China, if you stand in the international foods aisle of a mainstream grocery store, you're most likely to see a range of shoyu, or Japanese-style soy sauces. While traditional Chinese soy sauces were made only using soy beans (some modern Chinese soy sauces contain wheat, too), when the brewing method made its way to Japan, the recipe was modified to use an even ratio of soybeans and wheat, producing a soy sauce with a sweeter flavor profile. There are two primary types of Japanese soy sauce, koikuchi shoyu (dark soy sauce) and usukuchi shoyu (light soy sauce), but there are three others, namely shiro shoyu (white soy sauce), tamari shoyu, and saishikomi shoyu (twice-brewed soy sauce). \n\n Koikuchi Shoyu (Dark Soy Sauce)\n\n Use: General purpose seasoning for cooked and raw applications. \n\n Koikuchi shoyu is the most commonly used soy sauce in the Japanese kitchen, and it's likely what you think of when you think of soy sauce. Most major supermarket brands available in the US, like Kikkoman's All-Purpose Naturally Brewed Soy Sauce, don't indicate a type on the label, but they are koikuchi shoyu. \n\n Usukuchi Shoyu (Light Soy Sauce) \n\n Use: General purpose cooking and seasoning, particularly in light-colored dishes such as soups and braises. \n\n",
        image: "https://cdn.pixabay.com/photo/2017/09/21/01/00/sauce-2770300_960_720.jpg",

      },
      {
        //4
        name: "Mirin",
        description: "Mirin is similar to sake, but has more sugar and a lower alcohol content (14% to be precise). A staple in many Japanese kitchens, it pairs especially well with soy sauce (both of which are ingredients in homemade teriyaki sauce). Of course, there's a chance that your local grocery store won't carry mirin—at least not in its purest form. Some bigger brands like Kikkoman will be labled as \"aji-mirin\" (which translates to \"tastes like mirin\"\), which means they're probably cut with added sweeteners, but they'll more than do the trick.",
        substitution: "You can always buy mirin online, but if you're really in a crunch, you can sub in a dry sherry or a sweet marsala wine. Dry white wine or rice vinegar will also do, though you'll need to counteract the sourness with about a 1/2 teaspoon of sugar for every tablespoon you use.",
        image: "https://www.justonecookbook.com/wp-content/uploads/2022/03/Japanese-Mirin-9297.jpg",

      },
      {
        //5
        name: "Sake",
        description: "Sake is very important in Japanese cuisine. It is a building block in the flavor of marinades and soups. It is used when stir-frying, steaming foods, cooking rice, and baking. We use it to remove odors, to add flavor, and to add umami to dishes. It is a versatile ingredient with many uses, and it is very different from the sake that you just poured to sip while you read this blog post.\n\n In broad strokes, cooking sake, compared with the sake you are drinking, has a lower alcohol content (ABV), more concentrated flavor and sometimes contains salt. If you were to use the sake you’re drinking as a substitute for cooking sake you’d probably need to double the amount you use to impart the same amount of flavor and you’d also be introducing a lot more alcohol.\n\n Cooking sake is not governed by the same controls used for premium sake. It can be brewed from low grade rice; it can have amino acids and sugars added; it can have alcohol added and then be diluted for more volume All of this makes cooking sake generally cheaper, gives it a unique flavor, and makes it perfect for cooking.",
        substitution: "The best sake substitute? Dry sherry. Cooking sherry is dry white wine that’s been fortified by adding alcohol. The flavor is sharp, with a scent of apple cider and a very dry finish. The flavor is a bit stronger than sake, but it’s close. Use it as a 1:1 replacement. \n\n Another good sake substitute? Dry white wine. The flavor profiles of sake and dry white wine are very similar, though sake may be slightly stronger. Use a dry white wine as a 1:1 replacement. Avoid using a sweet wine, because it will give the recipe an entirely new character.",
        image: "https://cdn.pixabay.com/photo/2017/08/03/14/00/shrine-2576477_960_720.jpg",

      },
      {
        //6
        name: "Dried Shiitake",
        description: "Flavorful shiitake mushrooms are such a foundation of Asian cooking. They have an intense flavor. Dried shiitake mushrooms can easily add deep savory flavor, umami, to dishes. I like to think of them as healthy little punches of flavor since they contain no fat, and even vegans can eat them. \n\n While fresh shiitake mushrooms are just as delicious, they can be harder to find, so having dried shiitake mushrooms stocked in your pantry means that you always have a flavorful ingredient at your fingertips. They\'re easily found at Asian grocery stores and can last for months, maybe even years, if stored in an airtight container in a cool place or the refrigerator. \n\n But the best part about these dried mushrooms? Since you have to rehydrate them in hot water before they can be used, the mushroom soaking liquid that you’re left with is a tasty bonus ingredient! Don’t waste that liquid — use it in the place of chicken broth or as the base of a sauce.",
        substitution: "The best sake substitute? Dry sherry. Cooking sherry is dry white wine that’s been fortified by adding alcohol. The flavor is sharp, with a scent of apple cider and a very dry finish. The flavor is a bit stronger than sake, but it’s close. Use it as a 1:1 replacement. \n\n Another good sake substitute? Dry white wine. The flavor profiles of sake and dry white wine are very similar, though sake may be slightly stronger. Use a dry white wine as a 1:1 replacement. Avoid using a sweet wine, because it will give the recipe an entirely new character.",
        image: "https://cdn.pixabay.com/photo/2017/12/01/07/35/food-2990321_960_720.jpg",

      },
      {
        //7
        name: "Red miso",
        description: "This is also typically made from soybeans fermented with barley or other grains, though with a higher percentage of soybeans and/or a longer fermentation period. It can range in color from red to dark brown. The deep umami flavor of red miso can overwhelm mild dishes, but is perfect for hearty soups, braises, and glazes.",
        substitution: "You can substitute with any miso available to you",
        image: "https://cdn.media.amplience.net/i/japancentre/Category-header-10907-red-miso/Buy-Japanese-Red-Miso-Online?$poi$&w=1200&h=630&sm=c&fmt=auto",
      },
      {
        //8
        name: "Yellow miso",
        description: "Yellow miso is usually made from soybeans that have been fermented with barley and sometimes a small percentage of rice. It can be yellow to light brown in color. This miso has a mild, earthy flavor and is better for general use in not only condiments, but soups, marinades, and glazes.",
        substitution: "You can substitute with any miso available to you",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3lENnPsmX7p5VpArdVu0BBNAz61sAFBFdRg&usqp=CAU"
      },
      {
        //9
        name: "Mentsuyu",
        description: "Mentsuyu (noodle sauce) is a very versatile sauce that gives many dishes a great Japanese flavor.  This is perfect for dipping cold Soba or Somen noodles, tempura and more.　It is so easy to make and keeps well in the refrigerator (at least a couple weeks, stays for a month in my fridge), and comes in handy in a crunch time for dinner.   I actually make a lot of  it at once so that I don’t have to make it frequently (oh, lazy me).  You can cook meat and vegetables with this sauce as seasoning, like a quick teriyaki sauce, or just drizzle over steamed vegetables or tofu.",
        substitution: "Add 1/2 cup soy sauce, 1/2cup mirin, 1/4 cup sake and a hanful of dried bonito flake in a pot and bring it to a boil. Once boiled bring off heat, let cool and strain",
        image: "https://www.justonecookbook.com/wp-content/uploads/2020/05/Mentsuyu-3344.jpg"
      },
      {
        //10
        name: "Dashi",
        description: "Dashi is a very flavorful basic broth in Japanese cooking. It has a savory taste (umami) and is typically made from dried bonito flakes (Katsuobushi), dried fish (Niboshi) or kelp (Kombu).  It is a very important ingredient for traditional Japanese food. Dashi is used not only for soups such as Miso Soup, but also for a lot of boiled and flavored vegetables and stews. Katsuobushi, Niboshi, and Kombu are all easily found at Japanese markets or online stores.  A lot of people like to use instant Dashi powder or packets of Dashi mix that can be merely add to hot water to make Dashi.  This will eliminate a step and some time for everyday cooking",
        substitution: "Add 2 handfuls of dried bonito flakes and 4 cups of water to a small pot and let simmer for 3 minutes. Strain and let cool.",
        image: "https://www.japanesecooking101.com/wp-content/uploads/2012/03/IMG_6588-1024x682.jpg"
      },
      {
        name: "Udon",
        description: "Udon are thick white noodles made with flour, salt and water.  It can be cooked hot in Katsuobushi (dried bonito) or Kombu (dried kelp) broth, or prepared cold with Mentsuyu dipping  sauce (Zaru Udon).  Udon itself has a very mild flavor and can be seasoned with any kind of flavor you like.  It can be used not only in broth but also with stronger flavors like curry soup.  It is also very good good stir-fried (Yaki Udon). \n The most common kinds of Udon found in stores in the US are dried and frozen.Dried Udon is much thinner and when cooked is usually pretty soft.It is a convenient choice because it has a long shelf life in the pantry.You need to be careful not to overcook dried Udon especially when you prepare in hot soup.Dried Udon may not be suitable for stir - fry because the thin and soft noodles may stick to the pan too much.The frozen kind is firmer and has a chewier texture, and it’s more forgiving for overcooking; however, it may be harder to find in local stores, other than Japanese stores.You could also make fresh noodles at home.Homemade fresh noodles are elastic and even firmer than frozen udon.It can be cooked in any ways, but it may be best cold to enjoy the texture.",
        substitution: " Soba noodles have emerged as the best substitute for udon noodles, thanks in no small part to their similarities in application. They might not have the same taste and texture, but soba noodles are definitely a good substitute overall.",
        image: "https://www.thespruceeats.com/thmb/RDj1PPXtMpInwBeleM_YDKrrVxI=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/udon-noodles-2031621-hero-01-fb29be155d17409999c0e900ac265b77.jpg",
      },
      {
        name: "Sesame Oil",
        description: "Sesame oil is a cooking oil made from sesame seeds that's popular in Asian cooking. There are a few varieties made with pressed plain seeds or toasted seeds, and they are used in different ways in Chinese, Japanese, South Indian, and Middle Eastern cuisine. Light sesame oil is typically used as a neutral cooking oil, while toasted sesame oil is used as a flavoring in sauces, soups, and other dishes.Toasted sesame oil is also known as dark, black, or Asian sesame oil. The light brown to dark reddish-brown oil is made with toasted sesame seeds and has a strong aroma and flavor. A little goes a long way; sesame oil is often used as a finishing oil, adding nutty, toasty flavor to a hot or cold dish. \n\n Typically, the darker the toasted sesame oil, the stronger the flavor.Light sesame oil, also called white or plain sesame oil, is light in color.It's made using raw sesame seeds, resulting in high-heat, low-flavor oil.\n\n ",
        substitution: " Sesame oil substitutes vary depending on the type of taste you are after. Although generally speaking the best substitute for sesame oil would have to be perilla oil. Perilla oil is an oil used frequently in Korean and Chinese dishes and it has a similar flavour, taste and smell to sesame oil. If you don’t have perilla oil any other nut or seed oil would suffice. Alternatively if you require a substitute for untoasted sesame oil, and the nutty flavour is irrelevant, light olive oil is the best replacement.",
        image: "https://cdn.shopify.com/s/files/1/0017/9234/4153/products/seasame7_1024x1024@2x.jpg?v=1563979998",
      },
      {
        name: "Tonkatsu Sauce",
        description: "Tonkatsu sauce is like Worcester- base sauce used mainly for Tonkatsu(deep fried pork).Japanese Worcester sauce is different from American(English) one, and it has more fruits and vegetable such as tomatoes and apples along with sugar, vinegar, and salt.Tonkatsu sauce has similar favor to Japanese Worcester sauce, but it is much thicker. Tonkatsu sauce can be a substitute for Okonomiyaki sauce.",
        substitution: " If you don’t have all the ingredients to make your own, you can substitute with tomato, Worcestershire or barbecue sauce. Otherwise, you could also shake things up by using other Japanese sauces such as takoyaki, okonomiyaki or yakisoba sauce instead.",
        image: "https://littlefamilyadventure.com/wp-content/uploads/2022/04/Drizzling-sauce-over-pork-cutlet-735x490.jpg",
      },
      {
        name: "Dashi Powder",
        description: "If you’re a fan of Japanese food, you know that the base of Japanese cuisine depends on a secret ingredient that brings a great depth of flavor or umami to the food. That secret ingredient is none other than dashi. Using dashi powder is the easiest and quickest way to make Japanese soup stock or add dashi flavor to a dish. Simply sprinkle the dashi powder over the food while cooking or add it to water to make instant dashi soup stock.",
        substitution: "An important aspect to consider while choosing a dashi substitute is the base of the flavor. Here, it is seafood, particularly fish. This means you are free to use fish to recreate that umami taste.\n\n However, not every fish will yield the best results.Remember, bonito flakes are considered to be white fish.So, choosing any other mild, non- oily, white - meat fish should be your preferred substitute.Red meats, on the other hand, can overpower your dish.\n\n Some white meat fish includes catfish, tilefish, halibut, bass, cod, haddock, and snapper.You can make various creative recipes out of white fish, one being the white fish cake.",
        image: "https://i.ytimg.com/vi/QpJvdQXD92o/maxresdefault.jpg",
      },
      {
        name: "Kombu",
        description: "Kombu is dried edible sea kelp that is mainly used to make Dashi broth in Japanese cooking.  It has a subtle but great savory taste (Umami) when it’s boiled in water.  Kombu should be rehydrated in cool water and then cooked to extract its Umami flavor.  When rehydrated, it grows about 3 times in size. \n\n Kombu Dashi is good for clear soups and Nabemono(hot pot) such as Mizutaki and Shabu Shabu.It is a perfect broth for vegetarians since it’s plant- based. \n\n When Kombu is hydrated, it becomes a soft and tasty ingredient for Nimono(boiled vegetables and meat) and Tsukudani(strongly flavored Kombu).",
        substitution: "You could substitute Katsuobushi, dried bonito flakes, in place of Kombu, if you prefer, although they don’t have exactly the same flavor.",
        image: "https://www.japanesecooking101.com/wp-content/uploads/2013/11/IMG_7854-1024x682.jpg",
      },
      {
        name: "Aburaage",
        description: "Aburaage, also called Usuage, is thin deep fried tofu.  It has a mild soy flavor and a spongy texture and absorbs seasonings well.   You can open it up and make a pouch to use for Inarizushi or cut thinly to use for Miso soup,  and it is also a main ingredient for Kitsune Udon.  It often comes packaged as squares or rectangles.",
        substitution: "Just omit from recipe",
        image: "https://www.japanesecooking101.com/wp-content/uploads/2013/05/IMG_9679-1024x682.jpg",
      },
      {
        name: "Benishoga",
        description: "Benishoga is pickled red ginger root.  It is bright red and comes in long thin slices.  It should not be mistaken for Sushi ginger which is pickled in sweet vinegar.  Benishoga is pickled in plum vinegar, and it is sour.  Also there is spiciness from the ginger itself.\n\nBenishoga is used for Okonomiyaki, Takoyaki, Gyudon, and many other dishes.It goes particularly well with the sweetness of sauces and seasoning of dishes.",
        substitution: "So, why not using pickled plum itself as a substitute for red pickled ginger.\n\nThere are various types of pickled plums, such as relatively sweet ones that are pickled with honey.If you use plums instead of red pickled ginger, the normal pickled plums that are pickled with red shiso leaves are recommended.This should be better choice because it’s not sweet but salty and has flavor of red shiso just like the red pickled ginger.The red color of the plum is also nice to color meals.",
        image: "https://www.japanesecooking101.com/wp-content/uploads/2013/09/DSC02233-2-1024x682.jpg",
      },
      {
        name: "Katsuo bushi",
        description: "Bonito is a kind of tuna, and Katsuobushi is dried, smoked bonito. Katsuobushi is often used as flakes shaved from a piece of dried fish. This is actually Kezuribushi, but we still call it Katsuobushi. Some Katsuobushi is only smoked and dried, but the real Katsuobushi is smoked and then ripened with a special kind of mold for months to a couple of years. Katsuobushi is usually sold as flakes or shavings in a package today, but you can buy a chunk and shave it yourself with a Katsuobushi plane if you would like to make your own.\n\n Katsuobushi has a smokey savory taste that is a great accent for many Japanese dishes.Because dried bonito is packed with lot of umami(savory taste), it is perfect for making Dashi(fish broth) with which is a crucial component for Japanese cooking.Katsuobushi also can be used as is, sprinkling on simple vegetables to give a deeper flavor instantly.",
        substitution: "You can use only Kombu if you don’t want to use or don’t have any Katsuobushi.",
        image: "https://www.japanesecooking101.com/wp-content/uploads/2012/02/IMG_6484-1024x682.jpg",
      },
      {
        name: "Japanese Rice",
        description: "Japanese rice is a short-grain kind, and its texture is soft and sticky compared to long-grain rice.  Calrose rice is medium-grain rice that is similar to Japanese rice and most well known in the US.\n\nCalrose rice can be purchased at most grocery stores in the US.Either short or medium kind, they need to be soaked in water before cooking.It can be cooked in heavy pot with lid or rice cooker(suihanki).",
        substitution: "Use any type of rice you prefer",
        image: "https://www.japanesecooking101.com/wp-content/uploads/2012/02/IMG_6166-1024x682.jpg",
      },
      {
        name: "Rice vinegar",
        description: "Rice vinegar is made from fermented rice.  Japanese rice vinegar is a yellowish clear color, and it has a milder flavor for vinegar.  It is used in many Japanese foods such as sushi and pickled vegetables.\n\n Rice vinegar can be found at a lot of supermarkets in the US, or you can also buy it online.",
        substitution: "Use white wine vinegar",
        image: "https://www.japanesecooking101.com/wp-content/uploads/2012/02/IMG_6310.jpg",
      },
      {
        name: "Shimeji Mushroom",
        description: "Shimeji Mushrooms are very common mushrooms in Japan.  Small mushrooms are clustered together, and they usually have a light brown color on top and white on the stems.  Shimeji have a mild and subtle mushroom flavor.  They are often used in Nabemono such as Mizutaki or in stir-fry dishes.",
        substitution: "You can use oyster mushrooms as a substitute or experiment with other mushroom varieties that are known for having a savory, slightly nutty flavor.",
        image: "https://www.japanesecooking101.com/wp-content/uploads/2013/11/DSC02219-1024x682.jpg",
      },
      {
        name: "Umeboshi",
        description: "Umeboshi is sour pickled plum and has been eaten for over a thousand years in Japan.  Ripened plums are marinaded with salt, sun-dried, and preserved for a couple of months to develop the flavor.  Initially, the preserved plums are actually yellow, not the familiar red you typically see Umeboshi. Red perilla leaves (Shiso) are pickled along with the plums to give a nice red color.  It tastes salty and sour and goes with rice very well.\n\nUmeboshi also is said to suppress bacteria, and often is used in Bento Box lunches which may be kept at room temperature for a couple of hours.Umeboshi has a refreshing plum flavor and is good in Okayu porridge when you are not feeling well.It can also be chopped up and added to sauces or other dishes to flavor.A very flexible ingredient and a basic part of Japanese food.",
        substitution: "The five best substitutes for umeboshi vinegar are red wine vinegar, white wine vinegar, apple cider vinegar, rice vinegar, and black vinegar. Each of these vinegar has a unique flavor that can be used to enhance the flavor of many dishes.",
        image: "https://www.japanesecooking101.com/wp-content/uploads/2012/06/IMG_7370-1024x682.jpg",
      }

    ], {});

  },

  async down(queryInterface, Sequelize) {

    await queryInterface.bulkDelete('ingredientDescriptions', null, {});

  }
};
