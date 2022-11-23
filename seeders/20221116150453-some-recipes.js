'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("recipes", [{
      //1
      name: "Pickled Herring",
      description: "Herring pickles are a local dish that conveys the history of the herring industry in Hokkaido. From the late Edo period to the Meiji period, the herring fishery flourished in Hokkaido, especially along the Sea of Japan. In spring, when large schools of herring rushed to the coast to spawn, the sea was dyed pure white. The herring catch peaked in the Meiji era, and there was a period of close to 1 million tons of landings, but from around the 30s of the Showa era, the number of herrings decreased sharply, and almost no herring could be caught. Currently, herring is often caught in lakes such as Lake Akkeshi and its surroundings, but the catch is far from the peak.",
      rating: 2,
      image: "https://www.maff.go.jp/j/keikaku/syokubunka/k_ryouri/img/hokkaido_5_3.jpg",
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
      name: "Dashi salad",
      description: "A classic summer dish in Yamagata where you can easily eat raw vegetables! It is said to have been eaten mainly in the Murayama area, which is surrounded by mountains and is hot and humid in the summer, and is still a staple in the lives of the locals. Dashi is a mixture of chopped and seasoned summer vegetables, such as cucumbers and eggplants, and flavored vegetables such as perilla and myoga ginger.",
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
    },
    {
      //12
      name: "Tsumikko",
      description: "Tsumikko is made using wheat and vegetables✨ In Honjo City, Saitama Prefecture, the local farmers often ate it between work, and it seems to be a familiar taste in the area😌 It is said that the unusual name “Tsumikko” comes from the kneaded flour that was torn off like a pick and placed in a pot.",
      rating: 3,
      image: "https://assets.st-note.com/production/uploads/images/63407012/picture_pc_58f7653769c13c5ff0c50b0ae62d966a.png?width=800",
      time: "40 minutes",
      difficulty: "medium",
      categoryId: 4,
      portions: 5,
      prefectureId: 11
    },
    {
      //13
      name: "Konoko Gohan (mushroom rice)",
      description: "Kinoko Gohan is a kind of Takikomi Gohan, seasoned steamed rice with meat and vegetables. For Kinoko Gohan we use mushrooms (kinoko).  The Umami savory taste and aroma from mushrooms are absorbed into the rice while it cooks, which makes the dish so delicious.",
      rating: 5,
      image: "https://www.japanesecooking101.com/wp-content/uploads/2015/10/IMG_8916-700x467.jpg",
      time: "1 hour",
      difficulty: "easy",
      categoryId: 1,
      portions: 5,
    },
    {
      //14
      name: "Ninjin Shirishiri (Pan-Fried Carrot)",
      description: "Ninjin Shirishiri is pan-fried julienned carrot with scrambled egg.  It is originally a popular local dish from Okinawa, a very southern island in Japan.  But Ninjin Shirishiri now is spread all over the country and became a side dish many people eat for meals and Bento lunch boxes.",
      rating: 5,
      image: "https://www.japanesecooking101.com/wp-content/uploads/2022/04/IMG_2789-1024x683.jpeg",
      time: "30 minutes",
      difficulty: "easy",
      categoryId: 2,
      portions: 5,
    },
    {
      //15
      name: "Kabocha salad",
      description: "Kabocha Salad is mashed Kabocha mixed with mayo and seasonings.  It is a popular side dish for Bento or any Japanese meal.  Kabocha (Japanese pumpkin) is sweet, healthy, and very versatile.  You can cook it just like potatoes.  Mash it, fry it, simmer it, etc. We made Kabocha salad with cucumbers here, but you could add other vegetables like sliced onion or cooked broccoli, and some protein like boiled eggs or ham. ",
      rating: 5,
      image: "https://www.justonecookbook.com/wp-content/uploads/2019/09/Kabocha-Salad-2984-I-500x375.jpg",
      time: "25 minutes",
      difficulty: "easy",
      categoryId: 2,
      portions: 4,
    },
    {
      //16
      name: "Summer Vegetable Somen",
      description: "Summer Vegetable Somen is cold Somen noodles with summer vegetables like okra and tomato. The sauce is also cold, simple Mentsuyu poured over the noodles.  This easy to make cold noodle dish is perfect on hot summer days.  Even when you don’t have much appetite on a hot day, this will cool you down and give you good nutrients and energy ",
      rating: 4,
      image: "https://www.japanesecooking101.com/wp-content/uploads/2021/08/DSC00852.jpeg",
      time: "15 minutes",
      difficulty: "easy",
      categoryId: 1,
      portions: 4,
    },
    {
      //17
      name: "Everyday miso soup",
      description: "Miso Soup is one of the most important dishes in Japanese cuisine.  It comes with every meal, every day, with meals using Steamed Rice as a main starch.  Because we eat Miso Soup so often, we try to simplify the process of making it, and add more variations to it so that we don’t get tired of eating it. Everyday Miso Soup is Miso Soup for everyday living, combining Japanese tradition with cleaning up leftovers.",
      rating: 5,
      image: "https://www.japanesecooking101.com/wp-content/uploads/2019/09/DSC00531b-1024x575.jpg",
      time: "15 minutes",
      difficulty: "easy",
      categoryId: 2,
      portions: 4,
    },
    {
      //18
      name: "Kimchi nabe",
      description: "Nabe are hot pot dishes (called Nabemono or simply Nabe) in which fish or other kinds of meat and vegetables are cooked in unseasoned fish broth and dipped in tangy Ponzu sauce, or cooked in seasoned broth without dipping sauces.  It is cooked in a ceramic pot called Donabe, right at the dinner table using a portable gas stove, and we eat it as we cook.  Kimchi Nabe is seasoned with Kimchi which is packed with complicated flavors already, but we also add some Miso paste and Sake to deepen the taste.  Dashi, of any kind, instead of mere hot water as a base of the soup can give more Umami (savory flavor), so there are multiple layers of flavors even before adding any vegetables and meat.",
      rating: 4,
      image: "https://www.japanesecooking101.com/wp-content/uploads/2019/01/DSC00401b-1024x575.jpg",
      time: "25 minutes",
      difficulty: "easy",
      categoryId: 3,
      portions: 4,
    },
    {
      //19
      name: "Vegetable gyoza",
      description: "Gyoza is dumplings, usually ground pork or chicken and vegetables wrapped in round (fresh pasta like) flour skins and pan-fried.  Gyoza is originally from Chinese fried dumplings, but it is so popular and rooted well in Japanese cuisine today.  Most of the time, Japanese Gyoza is pan fried (with some steaming action in the middle), however, here we deep-fry to make them crispy outside and juicy inside.",
      rating: 5,
      image: "https://www.japanesecooking101.com/wp-content/uploads/2018/03/DSC00217b-1024x575.jpg",
      time: "40 minutes",
      difficulty: "easy",
      categoryId: 3,
      portions: 4,
    },
    {
      //20
      name: "Cabbage roll",
      description: "Cabbage Roll is ground meat stuffed in cabbage leaves and cooked in seasoned soup.  It is one of the most popular western-style Japanese foods of all time, just like Hamburger Steak and Tonkatsu.  Cabbage and ground meat are cooked in a mild but flavorful soup until very soft.  This tasty and nutritious dish is a favorite dinner item for any age.\n The origin of Cabbage Roll is Europe but it came to Japan a long time ago.  It became close to today’s Cabbage Roll in Japan in the late 19th century.  We have two kinds of Cabbage Roll dishes, one with a tomato flavor soup and one with a clear broth. There is not one that is more Japanese or popular, but it just depends on your preference or how your mother made it. Cabbage Roll is very much home cooking, and it may be hard to find restaurants who serve this dish",
      rating: 5,
      image: "https://www.japanesecooking101.com/wp-content/uploads/2017/03/IMG_0468-1024x683.jpg",
      time: "40 minutes",
      difficulty: "medium",
      categoryId: 3,
      portions: 4,
    },
    {
      //21
      name: "Buri daikon",
      description: "Buri Daikon is cooked yellowtail and Daikon radish in a seasoned broth.  This dish is a winter taste in Japan since both main ingredients, yellowtail and Daikon, are in season in winter. \n Yellowtail is a fish whose name changes as it grows, and Buri is the oldest and biggest of the kind. Hamachi, which is well known for Nigiri Sushi, is the young yellowtail 20″ (50cm) in size, about 2 years old, while Buri is 30″ (75cm) or bigger, about 4 years old.  Buri is the fattest and most flavorful in winter since it’s about breeding time.\n Daikon radish is also in season in winter.  Daikon is available all year round, but the taste is the best when grown in cold weather.  The top (closer to the leaves) is sweet, and it becomes spicier as it goes down to the bottom end.",
      rating: 3,
      image: "https://www.japanesecooking101.com/wp-content/uploads/2017/01/IMG_0439-1024x683.jpg",
      time: "40 minutes",
      difficulty: "medium",
      categoryId: 4,
      portions: 4,
    },
    {
      //22
      name: "Pork shabu shabu",
      description: "Pork Shabu Shabu Salad is a perfect dish for a hot summer dinner.  It is easy to cook with a minimal amount of cooking time using heat, and you can cook ahead earlier in the day when it’s not so hot. \n Shabu Shabu is a Japanese hot pot dish (Nabemono), with paper-thin sliced beef.   It is cooked at the dinner table using a portable gas stove and we eat it as we cook.  For this dish though we used sliced pork, and made it into cold salad.  If you prefer, you may use sliced beef too.  You can also add or replace different vegetables such as Daikon sprouts, lettuce, and cucumber.\n This salad also uses grated Daikon radish. When we grate Daikon in Japan we use a special kind of tool to grate the Daikon very finely, almost like grinding it (see the video). If you use a regular grater you may end up with small strips. That will work, but the consistency will be different and the way it combines with the other flavors will not be the same.",
      rating: 3,
      image: "https://www.japanesecooking101.com/wp-content/uploads/2015/09/IMG_8867-700x467.jpg",
      time: "15 minutes",
      difficulty: "easy",
      categoryId: 3,
      portions: 2,
    },
    {
      //23
      name: "Beef Roll Up with vegetables",
      description: "Beef Roll Up with Vegetables is pan-fried beef that is rolled up with vegetables inside.  It is a great beef dish for dinner and also stays tasty cold in the lunch box.\n When we cook beef in Japan, even though many of us like steaks and hamburgers just like in other countries, we most often use very thinly sliced meat. Thinly sliced beef is not only for Sukiyaki and Shabu Shabu either, but we use it for more casual everyday dishes such as Nikujaga.  Paper thin beef is easy to use because it can be cooked through quickly and it’s softer and easier to chew.\n Beef Roll Up seems to be hearty and beefy from outside, but actually not that much beef is used.  Inside are a lot of vegetables, so it is quite healty. We used a carrot and green beans here, but you can choose other vegetables you like.  Just cook them before rolling up.  Seasoning in this recipe is a sweet and salty Teriyaki-like sauce, but you can simply use salt and pepper if you prefer.",
      rating: 3,
      image: "https://www.japanesecooking101.com/wp-content/uploads/2015/04/IMG_8732-700x467.jpg",
      time: "25 minutes",
      difficulty: "medium",
      categoryId: 6,
      portions: 4,
    },
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('recipes', null, {});
  }
};
