'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.bulkInsert('prefectures', [
      {
        // 1
        title: "Hokkaido 北海道",
        description: "Hokkaido, the northernmost of Japan’s main islands, is known for its volcanoes, natural hot springs (onsen) and ski areas. Rugged Daisetsuzan National Park is home to steaming, volcanic Mount Asahi. Shikotsu-Tōya National Park contains caldera lakes, geothermal springs and a Mount Fuji look-alike, Mount Yōtei. Popular ski resorts include Rusutsu, Furano and Niseko. \n If you have the chance to visit this northern island of Japan, make sure to try the wide variety of vegetables, seafood, and dairy products that Hokkaido has to offer. From its fresh and surprisingly sweet seafood, to its hearty soup curry and nabe, to its fragrant and milky rich ice cream, Hokkaido food is quite unlike anywhere else in Japan",
        image: ["https://www.pandotrip.com/wp-content/uploads/2016/02/Takinoue-980x588.jpg", "https://gaijinpot.scdn3.secure.raxcdn.com/app/uploads/sites/6/2019/10/Jozankei-Onsen-Hokkaido-Autumn-Top.jpg", "https://web-japan.org/kidsweb/explore/regions/images/Kids_Region_Hokkaido_Q_Character_AkankoLake_pixta_47139233_M.jpg", "http://cdn.shopify.com/s/files/1/1083/2612/articles/shutterstock_1064528600.jpg?v=1606919109"],
      },
      {
        //2
        title: "Aomori 青森県",
        description: "Aomori may be far from the bustling action of Tokyo or Osaka, but this northernmost prefecture of Japan’s main island of Honshu has plenty to make it an attractive destination to visit or live. The prefecture offers something for every season, from gorgeous late-blooming sakura at the scenic castle town of Hirosaki in the spring, to the summer Nebuta Festival in Aomori City with its massive parade floats, as well as Japan’s biggest apple harvest in the autumn, and peak snow conditions with pristine powder in the winter. Located on the Tsugaru Strait, Aomori also has a passenger ferry that can be taken across the strait from Aomori City to Hakodate, Hokkaido. \n Aomori’s food cannot be overlooked either. Surrounded by the sea on three sides, Aomori offers up plenty of fresh fish and seafood in its coastal areas, in addition to rice, grains, yams, and apples from the region’s traditional farming and forestry sectors. The prefecture is known for its heavy snowfall, so many of Aomori’s regional foods are hearty winter dishes that help people get through the long, cold winter season. Read on for 9 famous Aomori dishes that highlight the wonderful cuisine of the prefecture.",
        image: ["https://www.pandotrip.com/wp-content/uploads/2016/02/Takinoue-980x588.jpg", "https://gaijinpot.scdn3.secure.raxcdn.com/app/uploads/sites/6/2019/10/Jozankei-Onsen-Hokkaido-Autumn-Top.jpg", "https://web-japan.org/kidsweb/explore/regions/images/Kids_Region_Hokkaido_Q_Character_AkankoLake_pixta_47139233_M.jpg", "http://cdn.shopify.com/s/files/1/1083/2612/articles/shutterstock_1064528600.jpg?v=1606919109"],
      },
      {
        //3
        title: "Iwate 岩手県",
        description: "The bountiful nature of Iwate’s mountains and sea coast has formed the basis of a rich regional culture since the early days – from unique nature worship, numerous seasonal festivals, folk dances and indigenous stories passed down by the ancestors to the farm produce and seafood from the harsh natural environment.",
        image: ["https://www.lonelyplanet.com/_next/image?url=https%3A%2F%2Flp-cms-production.imgix.net%2Ffeatures%2F2018%2F07%2Fkitayamazaki_cliffs_iwate-2b0fec6a72b2.jpg&w=1920&q=75", "https://lp-cms-production.imgix.net/features/2018/07/tono_furusato_village_iwate-6692f09849cc.jpg?auto=format&q=40&w=870&dpr=1", "https://lp-cms-production.imgix.net/features/2018/07/iwate_mount_farm-7f4afc8d5910.jpg?auto=format&q=40&w=870&dpr=1", "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/10/d8/85/3e/takkokuno-iwaya.jpg?w=1600&h=900&s=1/"],
      },
      {
        //4
        title: "Akita 秋田県",
        description: "Akita (秋田県, Akita-ken) is a large prefecture at the Sea of Japan coast in the northern Tohoku Region. Prefectural capital is Akita City. Among Akita's main attractions are its natural beauty of mountains and the sea, hot springs and the town of Kakunodate, which preserves one of Japan's most interesting samurai districts.",
        image: ["https://www.japan-guide.com/thumb/XYZlistXYZe1203_1680.jpg", "https://s3.voyapon.com/wp-content/uploads/2019/01/14225219/76bb6283a0e476d420a6ec73755596f7.jpg", "http://cdn.shopify.com/s/files/1/1083/2612/articles/unnamed_3b60dcb0-1026-466e-8a73-399ae3a71501.jpg?v=1588797841", "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/10/d8/8f/eb/nyuto-onsen.jpg?w=1600&h=900&s=1/"],
      },
      {
        //5
        title: "Miyagi 宮城県",
        description: "Miyagi Prefecture offers a myriad of ways for visitors to relax and refresh, from spa getaways, to nature retreats and animal companionship. When it comes to onsen hot springs, the diversity Miyagi offers is remarkable: Akiu and Sakunami present an authentic onsen experience while being only 30 minutes away from the heart of metropolitan Sendai; Naruko is a little more remote, yet boasts 8 hot spring qualities out of the 10 existing in Japan, unrivaled in their quality and abundance; for those who seek a lean yet deep onsen experience, Miyagi also has a long history of toji, self-catering simple stays at natural onsen hot springs prized for their curative properties. One unique relaxation experience Miyagi is renowned for is meeting adorable animals. Tashirojima in Ishinomaki is known as a cat island, with cats densely populating its streets, while Fox Village in southern Miyagi lets you come very close to fluffy foxes.",
        image: ["https://c4.wallpaperflare.com/wallpaper/817/215/754/shiroishi-castle-shiroishi-miyagi-japan-wallpaper-preview.jpg", "https://images.pling.com/img/00/00/62/84/47/1775730/mountain-zao-complex-volcano-before-dawn-town-in-japan-in-miyagi-prefecture-japan-desktop-hd-wallpaper-for-mobile-phones-tablet-and-pc-3840x2400-1920x1080.jpg", "https://www.ana.co.jp/japan-travel-planner/area/tohoku/miyagi/0000025/main.jpg", "https://www.nippon.com/en/ncommon/contents/guide-to-japan/84465/84465.jpg"],
      },
      {
        //6
        title: "Yamagata 山形県",
        description: "Enclosed by the Sea of Japan to the west and mountains to the east, Yamagata Prefecture is defined by its nature. Along the coast sit the port cities of Tsuruoka and Sakata, while deep inland is Zao Onsen, an area home to hot springs, sparsely visited ski slopes, and spectacular snow-covered evergreens. Mountain temple Yamadera is the subject of one of the most famous haiku poems, and Ginzan Onsen is a picturesque hot spring resort town on the site of a former silver mine.",
        image: ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdy7C-m_gS91wlbrVpecck8h-HuJBJ-2zoMJsXHRUONSZpH6lN_xEbk2vfzg9NVBuZ-TE&usqp=CAU", "https://kolbe-adventures.com/2021SeptemberFirstEntry/Ginzan1.png", "https://static.gltjp.com/glt/prd/data/article/12000/11108/20210513_154116_ab92eb0d_w1920.jpg", "https://res-3.cloudinary.com/jnto/image/upload/w_2064,h_1300,c_fill,f_auto,fl_lossy,q_auto/v1648527931/yamagata/H_00564_002"],
      },
      {
        //7
        title: "Fukushima 福島県",
        description: "Fukushima (福島県, Fukushima-ken) is the third largest of Japan's 47 prefectures and stretches over 150 kilometers from the Pacific coast into the mountainous interior of northeastern Honshu.\n Reached in just over an hour by shinkansen from Tokyo, Fukushima offers ample of natural beauty, historic sites and leisure activities, including spectacular volcanic landscapes, excellent hot spring waters, outstanding cherry blossom and autumn color spots, prominent castle towns, high-quality sake, pleasant ski resorts and Japan's first ever theme park, the Spa Resort Hawaiians.",
        image: ["https://www.japantimes.co.jp/wp-content/uploads/2019/04/n-fukushima-a-20190429.jpg", "https://cdn.britannica.com/94/126694-050-B600BD67/Paddy-fields-Inawashiro-Lake-Fukushima-prefecture-Japan.jpg", "https://a1.cdn.japantravel.com/photo/266-164120/1440x960!/fukushima-fukushima-prefecture-164120.jpg", "https://previews.123rf.com/images/kendonice/kendonice1712/kendonice171200068/92724105-to-no-hetsuri-in-fukushima-prefecture-of-japan-.jpg"],
      },
      {
        //8
        title: "Tochigi 栃木県",
        description: "Tochigi Prefecture is located approximately 100 km north of Tokyo. Utsunomiya, its most populous city, can be reached in about one hour by Shinkansen. The northern Nasu and Nikko areas are home to a range of mountains with peaks more than 2,000 meters high, giving way to wide open plains in the south. Each area has its own distinct features, from the Nasu area, one of the premier highland resort areas in Japan, to the Nikko area and its UNESCO World Heritage shrines and temples in the mountains, the central area with Utsunomiya as its transportation hub, thriving traditional crafts in the eastern area, and the southern area, which is nearest to Tokyo and once flourished as a commercial center.",
        image: ["https://www.visit-tochigi.com/wp-content/uploads/2022/01/vt_top_01_pc.jpg", "https://www.visit-tochigi.com/wp-content/uploads/2022/01/vt_top_04_pc-1.jpg", "https://gaijinpot.scdn3.secure.raxcdn.com/app/uploads/sites/6/2021/01/Kegon-falls-Tochigi.jpg", "https://upload.wikimedia.org/wikipedia/commons/1/14/Nikk%C5%8D_city%2C_Tochigi_Prefecture%3B_November_2017_%2806%29.jpg"],
      },
      {
        //9
        title: "Ibaraki 茨城県",
        description: "Ibaraki Prefecture is on the Pacific coast about 150 km north east of Tokyo. Ibaraki is a diverse mixture of agriculture, industry, and high-tech R&D. Kairaku-en is one of Japan's top gardens and famous for its plum blossom. Ibaraki has Japan's most famous university in Japan for robotics, Tsukuba University. Ibaraki also has a 60 km-long beach that is a popular hangout for surfers mainly from Tokyo. Mito City is the capital city of Ibaraki Prefecture.",
        image: ["https://cdn.britannica.com/39/10839-050-2BCFC4D6/rice-Itako-Japan-Ibaraki-prefecture.jpg", "https://img.cooljapan-videos.com/files/articles/dn3uxfmp/thumbnail/fbb18e974afa5f6678e3f92bbd033a74.jpg.webp", "https://blog.japanwondertravel.com/wp-content/uploads/2020/06/Kairakuen-1200x675.jpg", "https://wanderplans.com/storage/3730/Ibaraki-2.jpg"],
      },
      {
        //10
        title: "Gunma 群馬県",
        description: "Gunma Prefecture is literally at the center of Japan, surrounded by mountains and volcanos that create the ideal environment for hot springs, snow sports, and other outdoor adventures. Visit Kusatsu and witness a yumomi performance—a traditional way of cooling down hot spring water—before soaking in a mineral-rich bath. Hit one of Gunma's many ski slopes in winter, ranging from beginner to expert, or have an adventure in the mountains of Minakami, where you can find lakes, rivers, rafting, canyoning, canoeing and hiking.",
        image: ["https://a2.cdn.japantravel.com/photo/269-223103/1440x960!/gunma-gunma-prefecture-223103.jpg", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_nBHVq14zO2UOndwrX3DRFwl1vWyXINu0Wo5TBhWacW_iZ6cM2aCdnR4rcoeW9vggyMU&usqp=CAU", "https://i.imgur.com/sKMkUKc.jpg", "hhttps://d15k2d11r6t6rl.cloudfront.net/public/users/Integrators/8acbeec7-ece8-4e66-9ac5-d1a10a4369ba/test1-clientside/editor_images/gunma-takaragawa-onsen-170760.jpg"],
      }
    ], {});

  },

  async down(queryInterface, Sequelize) {

    await queryInterface.bulkDelete('prefectures', null, {});

  }
};
