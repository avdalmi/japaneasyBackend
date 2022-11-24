'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.bulkInsert('prefectures', [
      {
        // 1
        title: "Hokkaido 北海道",
        description: "Hokkaido, the northernmost of Japan’s main islands, is known for its volcanoes, natural hot springs (onsen) and ski areas. Rugged Daisetsuzan National Park is home to steaming, volcanic Mount Asahi. Shikotsu-Tōya National Park contains caldera lakes, geothermal springs and a Mount Fuji look-alike, Mount Yōtei. Popular ski resorts include Rusutsu, Furano and Niseko. \n\n If you have the chance to visit this northern island of Japan, make sure to try the wide variety of vegetables, seafood, and dairy products that Hokkaido has to offer. From its fresh and surprisingly sweet seafood, to its hearty soup curry and nabe, to its fragrant and milky rich ice cream, Hokkaido food is quite unlike anywhere else in Japan",
        image: ["https://www.pandotrip.com/wp-content/uploads/2016/02/Takinoue-980x588.jpg", "https://gaijinpot.scdn3.secure.raxcdn.com/app/uploads/sites/6/2019/10/Jozankei-Onsen-Hokkaido-Autumn-Top.jpg", "https://web-japan.org/kidsweb/explore/regions/images/Kids_Region_Hokkaido_Q_Character_AkankoLake_pixta_47139233_M.jpg", "http://cdn.shopify.com/s/files/1/1083/2612/articles/shutterstock_1064528600.jpg?v=1606919109"],
        long: "43.283",
        lat: "142.671",
      },
      {
        //2
        title: "Aomori 青森県",
        description: "Aomori may be far from the bustling action of Tokyo or Osaka, but this northernmost prefecture of Japan’s main island of Honshu has plenty to make it an attractive destination to visit or live. The prefecture offers something for every season, from gorgeous late-blooming sakura at the scenic castle town of Hirosaki in the spring, to the summer Nebuta Festival in Aomori City with its massive parade floats, as well as Japan’s biggest apple harvest in the autumn, and peak snow conditions with pristine powder in the winter. Located on the Tsugaru Strait, Aomori also has a passenger ferry that can be taken across the strait from Aomori City to Hakodate, Hokkaido. \n\n Aomori’s food cannot be overlooked either. Surrounded by the sea on three sides, Aomori offers up plenty of fresh fish and seafood in its coastal areas, in addition to rice, grains, yams, and apples from the region’s traditional farming and forestry sectors. The prefecture is known for its heavy snowfall, so many of Aomori’s regional foods are hearty winter dishes that help people get through the long, cold winter season. Read on for 9 famous Aomori dishes that highlight the wonderful cuisine of the prefecture.",
        image: ["https://aomori-tourism.com/lsc/upfile/theme/0000/0014/14_201_l.jpg", "https://www.remotelands.com/storage/media/3625/conversions/b180621028-banner-size.jpg", "https://images5.alphacoders.com/551/551029.jpg", "https://www.remotelands.com/storage/media/3620/conversions/b180621023-banner-size.jpg"],
        long: "40.741",
        lat: "140.880",
      },
      {
        //3
        title: "Iwate 岩手県",
        description: "The bountiful nature of Iwate’s mountains and sea coast has formed the basis of a rich regional culture since the early days – from unique nature worship, numerous seasonal festivals, folk dances and indigenous stories passed down by the ancestors to the farm produce and seafood from the harsh natural environment.",
        image: ["https://www.lonelyplanet.com/_next/image?url=https%3A%2F%2Flp-cms-production.imgix.net%2Ffeatures%2F2018%2F07%2Fkitayamazaki_cliffs_iwate-2b0fec6a72b2.jpg&w=1920&q=75", "https://lp-cms-production.imgix.net/features/2018/07/tono_furusato_village_iwate-6692f09849cc.jpg?auto=format&q=40&w=870&dpr=1", "https://lp-cms-production.imgix.net/features/2018/07/iwate_mount_farm-7f4afc8d5910.jpg?auto=format&q=40&w=870&dpr=1", "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/10/d8/85/3e/takkokuno-iwaya.jpg?w=1600&h=900&s=1/"],
        long: "39.5833",
        lat: "141.2535",
      },
      {
        //4
        title: "Akita 秋田県",
        description: "Akita (秋田県, Akita-ken) is a large prefecture at the Sea of Japan coast in the northern Tohoku Region. Prefectural capital is Akita City. Among Akita's main attractions are its natural beauty of mountains and the sea, hot springs and the town of Kakunodate, which preserves one of Japan's most interesting samurai districts.",
        image: ["https://www.japan-experience.com/sites/default/files/images/content_images/akita-prefecture-2017-4.jpg", "https://s3.voyapon.com/wp-content/uploads/2019/01/14225219/76bb6283a0e476d420a6ec73755596f7.jpg", "http://cdn.shopify.com/s/files/1/1083/2612/articles/unnamed_3b60dcb0-1026-466e-8a73-399ae3a71501.jpg?v=1588797841", "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/10/d8/8f/eb/nyuto-onsen.jpg?w=1600&h=900&s=1/"],
        long: "40.1376",
        lat: "140.3343",
      },
      {
        //5
        title: "Miyagi 宮城県",
        description: "Miyagi Prefecture offers a myriad of ways for visitors to relax and refresh, from spa getaways, to nature retreats and animal companionship. When it comes to onsen hot springs, the diversity Miyagi offers is remarkable: Akiu and Sakunami present an authentic onsen experience while being only 30 minutes away from the heart of metropolitan Sendai; Naruko is a little more remote, yet boasts 8 hot spring qualities out of the 10 existing in Japan, unrivaled in their quality and abundance; for those who seek a lean yet deep onsen experience, Miyagi also has a long history of toji, self-catering simple stays at natural onsen hot springs prized for their curative properties. One unique relaxation experience Miyagi is renowned for is meeting adorable animals. Tashirojima in Ishinomaki is known as a cat island, with cats densely populating its streets, while Fox Village in southern Miyagi lets you come very close to fluffy foxes.",
        image: ["https://c4.wallpaperflare.com/wallpaper/817/215/754/shiroishi-castle-shiroishi-miyagi-japan-wallpaper-preview.jpg", "https://images.pling.com/img/00/00/62/84/47/1775730/mountain-zao-complex-volcano-before-dawn-town-in-japan-in-miyagi-prefecture-japan-desktop-hd-wallpaper-for-mobile-phones-tablet-and-pc-3840x2400-1920x1080.jpg", "https://www.tohokukanko.jp/lsc/upfile/spot/0100/4830/1004830_1_l.jpg", "https://www.nippon.com/en/ncommon/contents/guide-to-japan/84465/84465.jpg"],
        long: "38.6306",
        lat: "141.1193",
      },
      {
        //6
        title: "Yamagata 山形県",
        description: "Enclosed by the Sea of Japan to the west and mountains to the east, Yamagata Prefecture is defined by its nature. Along the coast sit the port cities of Tsuruoka and Sakata, while deep inland is Zao Onsen, an area home to hot springs, sparsely visited ski slopes, and spectacular snow-covered evergreens. Mountain temple Yamadera is the subject of one of the most famous haiku poems, and Ginzan Onsen is a picturesque hot spring resort town on the site of a former silver mine.",
        image: ["https://64.media.tumblr.com/2152677196744455ffdcd645be18c9a5/d7f014562fc67cca-86/s1280x1920/e807938d04f1383a1ac07812203bb28620152742.jpg", "https://kolbe-adventures.com/2021SeptemberFirstEntry/Ginzan1.png", "https://static.gltjp.com/glt/prd/data/article/12000/11108/20210513_154116_ab92eb0d_w1920.jpg", "https://res-3.cloudinary.com/jnto/image/upload/w_2064,h_1300,c_fill,f_auto,fl_lossy,q_auto/v1648527931/yamagata/H_00564_002"],
        long: "38.5371",
        lat: "140.1435",
      },
      {
        //7
        title: "Fukushima 福島県",
        description: "Fukushima (福島県, Fukushima-ken) is the third largest of Japan's 47 prefectures and stretches over 150 kilometers from the Pacific coast into the mountainous interior of northeastern Honshu.\n\n Reached in just over an hour by shinkansen from Tokyo, Fukushima offers ample of natural beauty, historic sites and leisure activities, including spectacular volcanic landscapes, excellent hot spring waters, outstanding cherry blossom and autumn color spots, prominent castle towns, high-quality sake, pleasant ski resorts and Japan's first ever theme park, the Spa Resort Hawaiians.",
        image: ["https://www.japantimes.co.jp/wp-content/uploads/2019/04/n-fukushima-a-20190429.jpg", "https://cdn.britannica.com/94/126694-050-B600BD67/Paddy-fields-Inawashiro-Lake-Fukushima-prefecture-Japan.jpg", "https://a1.cdn.japantravel.com/photo/266-164120/1440x960!/fukushima-fukushima-prefecture-164120.jpg", "https://previews.123rf.com/images/kendonice/kendonice1712/kendonice171200068/92724105-to-no-hetsuri-in-fukushima-prefecture-of-japan-.jpg"],
        long: "37.3834",
        lat: "140.1833",
      },
      {
        //8
        title: "Tochigi 栃木県",
        description: "Tochigi Prefecture is located approximately 100 km north of Tokyo. Utsunomiya, its most populous city, can be reached in about one hour by Shinkansen. The northern Nasu and Nikko areas are home to a range of mountains with peaks more than 2,000 meters high, giving way to wide open plains in the south. Each area has its own distinct features, from the Nasu area, one of the premier highland resort areas in Japan, to the Nikko area and its UNESCO World Heritage shrines and temples in the mountains, the central area with Utsunomiya as its transportation hub, thriving traditional crafts in the eastern area, and the southern area, which is nearest to Tokyo and once flourished as a commercial center.",
        image: ["https://www.visit-tochigi.com/wp-content/uploads/2022/01/vt_top_01_pc.jpg", "https://www.visit-tochigi.com/wp-content/uploads/2022/01/vt_top_04_pc-1.jpg", "https://gaijinpot.scdn3.secure.raxcdn.com/app/uploads/sites/6/2021/01/Kegon-falls-Tochigi.jpg", "https://upload.wikimedia.org/wikipedia/commons/1/14/Nikk%C5%8D_city%2C_Tochigi_Prefecture%3B_November_2017_%2806%29.jpg"],
        long: "36.3824",
        lat: "139.7341",
      },
      {
        //9
        title: "Ibaraki 茨城県",
        description: "Ibaraki Prefecture is on the Pacific coast about 150 km north east of Tokyo. Ibaraki is a diverse mixture of agriculture, industry, and high-tech R&D. Kairaku-en is one of Japan's top gardens and famous for its plum blossom. Ibaraki has Japan's most famous university in Japan for robotics, Tsukuba University. Ibaraki also has a 60 km-long beach that is a popular hangout for surfers mainly from Tokyo. Mito City is the capital city of Ibaraki Prefecture.",
        image: ["https://cdn.britannica.com/39/10839-050-2BCFC4D6/rice-Itako-Japan-Ibaraki-prefecture.jpg", "https://img.cooljapan-videos.com/files/articles/dn3uxfmp/thumbnail/fbb18e974afa5f6678e3f92bbd033a74.jpg.webp", "https://blog.japanwondertravel.com/wp-content/uploads/2020/06/Kairakuen-1200x675.jpg", "https://wanderplans.com/storage/3730/Ibaraki-2.jpg"],
        long: "36.2869",
        lat: "140.4245",
      },
      {
        //10
        title: "Gunma 群馬県",
        description: "Gunma Prefecture is literally at the center of Japan, surrounded by mountains and volcanos that create the ideal environment for hot springs, snow sports, and other outdoor adventures. Visit Kusatsu and witness a yumomi performance—a traditional way of cooling down hot spring water—before soaking in a mineral-rich bath. Hit one of Gunma's many ski slopes in winter, ranging from beginner to expert, or have an adventure in the mountains of Minakami, where you can find lakes, rivers, rafting, canyoning, canoeing and hiking.",
        image: ["https://a2.cdn.japantravel.com/photo/269-223103/1440x960!/gunma-gunma-prefecture-223103.jpg", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_nBHVq14zO2UOndwrX3DRFwl1vWyXINu0Wo5TBhWacW_iZ6cM2aCdnR4rcoeW9vggyMU&usqp=CAU", "https://i.imgur.com/sKMkUKc.jpg", "https://d15k2d11r6t6rl.cloudfront.net/public/users/Integrators/8acbeec7-ece8-4e66-9ac5-d1a10a4369ba/test1-clientside/editor_images/gunma-takaragawa-onsen-170760.jpg"],
        long: "36.5605",
        lat: "138.8800",
      },
      {
        //11
        title: "Saitama 埼玉県",
        description: "Just above Tokyo, Saitama Prefecture (埼玉県, Saitama-ken) is more than just a suburb for commuters to the nation’s capital.\n\n The city of Kawagoe is famous for its traditional kura-zukuri style warehouses, which remain from the 18th and 19th centuries and house many souvenir shops. The Railway Museum is also an intriguing site, while if you need to do some shopping, Aeon Lake Town in Koshigaya, the largest shopping mall in Japan, is your answer. The Tobu Zoo is one of the most popular zoos in the Kanto area and a great place to take children to.\n\n The northern half of Saitama is abundant with nature, especially the Chichibu region, known for its many mountains and temples. The Nagatoro Valley is renowned for its beautiful scenery and whitewater rafting.",
        image: ["https://jw-webmagazine.com/wp-content/uploads/2019/07/1_B61mj8ch9vNFy3qRNtylXw.jpeg", "https://www.japantimes.co.jp/wp-content/uploads/2018/07/n-ataglance-a-20180722.jpg", "https://preview.redd.it/4wuj4uumndl01.jpg?auto=webp&s=e9856a324ee35d1cd3ef16e2d5555a618ffb494f", "https://www.silverkris.com/wp-content/uploads/2018/05/Kawagoe-Photo-Picture-Cells-Shutterstock.com-1200x852-1.jpg"],
        long: "35.8616",
        lat: "139.6455",
      },
      {
        //12
        title: "Chiba 千葉県",
        description: "Chiba Prefecture is located east of Tokyo. Many foreign travelers visit Chiba Prefecture, because Narita Airport, one of Japan's busiest international airports, is located there. The prefectural capital is Chiba City. A large part of the prefecture is made up of the rural Boso Peninsula which is a popular resort destinations for Tokyoites. ",
        image: ["https://www.luxurytravelmagazine.com/files/593/9/81229/samurai-path-and-bamboo-grove_bu.jpg", "https://top.his-usa.com/destination-japan/up_img/top/fs_1506980010_0.jpg ", " https://cdn.zekkei-japan.jp/images/spots/43bea9136144ec1fa56e891eeb0fdbb1.jpg", "http://d20aeo683mqd6t.cloudfront.net/articles/title_images/000/038/883/medium/naritasan-chiba-s1324767698.jpg?2022 "],
        long: "35.6074",
        lat: "140.1065",
      },
      {
        //13
        title: "Tokyo 東京都",
        description: "Tokyo, Japan’s busy capital, mixes the ultramodern and the traditional, from neon-lit skyscrapers to historic temples. The opulent Meiji Shinto Shrine is known for its towering gate and surrounding woods. The Imperial Palace sits amid large public gardens. The city's many museums offer exhibits ranging from classical art (in the Tokyo National Museum) to a reconstructed kabuki theater (in the Edo-Tokyo Museum). ",
        image: ["https://media.istockphoto.com/id/1390815938/photo/tokyo-city-in-japan.jpg?b=1&s=170667a&w=0&k=20&c=YVI8iGWf-w_cLyQNcWA57Ll9eXv_s_SHfoM0MufEMMQ= ", "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8dG9reW98ZW58MHx8MHx8&w=1000&q=80 ", "https://assets.vogue.com/photos/5e387ae1be72df00088bf8c8/master/w_2560%2Cc_limit/EEX74X.jpg ", "https://media.timeout.com/images/105624406/750/422/image.jpg "],
        long: "35.6762",
        lat: "139.6503",
      },
      {
        //14
        title: "Kanagawa 神奈川県",
        description: "Kanagawa Prefecture is a part of the Kanto region of Japan. Kanagawa is characterized by the mountains, rivers, and sea that are within it, as well as for being close to Japan's most popular city, Tokyo. One of it's most well-known cities, Yokohama, is the main site for Kanagawa's business and economy relations, and it is also the capital city. Kanagawa also has two very popular destinations in Japan, Hakone and Kamakura that has served as the primary tourist destinations for Kanagawa. ",
        image: ["https://wattention.com/wp-content/uploads/2019/07/Nakamise-Kawasaki-daishi.jpg ", " https://peakvisor.com/img/news/Mount-Fuji-from-Tanzawa-Lake-Kanagawa-Japan.jpg", "https://a.travel-assets.com/findyours-php/viewfinder/images/res70/502000/502456-kanagawa-province.jpg", " https://www.tokyoweekender.com/wp-content/uploads/2022/08/shutterstock_1435197722.jpg"],
        long: "35.4828",
        lat: "139.6146",
      },
      {
        //15
        title: "Niigata 新潟県",
        description: "Niigata is a port city on Honshu, Japan’s main island. The Minatopia history museum complex includes heritage buildings like the 19th-century Niigata Customs House. Along the seacoast, the Marinepia Nihonkai aquarium has sea otters and dolphins. Part of the Northern Culture Museum, the Ito Estate was home to a wealthy 1800s family and displays their art collection. South are the hot springs of Iwamuro. ",
        image: ["https://gaijinpot.scdn3.secure.raxcdn.com/app/uploads/sites/6/2016/01/Mie-Prefecture.jpg", "https://wattention.com/wp-content/uploads/2019/07/128-Niigata-Prefectural-Tourist-Association.jpg ", "https://www.melbtravel.com/wp-content/uploads/2019/11/Cover-Hiking-Niigata-Japan-1024x696.jpeg ", " https://imgcp.aacdn.jp/img-a/1720/auto/global-aaj-front/article/2016/05/573df8e6daf68_573df74fd10aa_63047857.jpg"],
        long: "37.9161",
        lat: "139.0364",
      },
      {
        //16
        title: "Toyama 富山県",
        description: "Toyama is a prefecture on Japan’s main island, Honshu. Its Hida Mountains are known for hot springs and ski areas. The capital, also called Toyama, is the starting point of the 90km-long Tateyama Kurobe Alpine Route. On this popular sightseeing course, visitors travel by bus, funicular and ropeway to sites like Mt. Tate (one of Japan’s 3 Holy Mountains), Mikurigaike crater lake and 186m-tall Kurobe Dam. ",
        image: [" https://www.ana-cooljapan.com/destinations/img/toyama/sp_top01.jpg", "https://www.japan-guide.com/thumb/XYZlistXYZe1219_1680.jpg ", " https://a1.cdn.japantravel.com/photo/274-137970/1440x960!/toyama-toyama-prefecture-137970.jpg", "https://a.travel-assets.com/findyours-php/viewfinder/images/res70/499000/499426-ainokura.jpg "],
        long: "36.6958",
        lat: "137.2137",
      },
      {
        //17
        title: "Nagano 長野県",
        description: "Nagano is a mountainous, landlocked prefecture in the center of Honshu, belonging to the Chubu Region. Nagano was the site of the Olympic Winter Games 1998. Prefectural capital is Nagano City. ",
        image: ["https://peakvisor.com/img/news/Hotaka-mountains-Kappa-bridge-Kamikochi-Nagano.jpg", "https://www.travellens.co/content/images/2021/09/Nagano.jpg ", " https://cotoacademy.com/app/uploads/2017/11/DSC_2504yokoteyama-s.jpg", "https://cdn.theculturetrip.com/wp-content/uploads/2020/03/j40mfw.jpg"],
        long: "36.6485",
        lat: "138.1950",
      },
      {
        //18
        title: "Yamanashi 山梨県",
        description: "Yamanashi is a Japanese prefecture to the southwest of Tokyo on the island of Honshu.It encompasses the northern part of Mount Fuji, where hundreds of thousands of visitors climb to the summit every year.In the Fuji Five Lakes area, resort towns surround the lakes created by the iconic mountain’s eruption.The region is renowned for hiking, climbing, fishing and skiing.  ",
        image: [" https://cdn.cheapoguides.com/wp-content/uploads/sites/3/2020/05/shibazaukra-yamanashi-fuji-iStock-536653714-1024x600.jpg", "https://a3.cdn.japantravel.com/photo/15623-163362/1440x960!/yamanashi-yamanashi-prefecture-163362.jpg ", "https://images.fineartamerica.com/images/artworkimages/mediumlarge/2/1-night-view-of-mount-fuji-from-lake-yamanaka-yamanashi-prefecture-japan-cavan-images.jpg ", "https://cdn.mainichi.jp/vol1/2022/09/14/20220914p2a00m0li020000p/8.jpg?1 "],
        long: "35.6933",
        lat: "138.6873",
      },
      {
        //19
        title: "Shizuoka 静岡県静岡県",
        description: "Sometimes referred to as Japan's riviera, Shizuoka Prefecture is located along the Pacific coast in the south of the Chubu Region. Mount Fuji and the Izu Peninsula are part of Shizuoka Prefecture. Tea is the prefecture's most famous product.The prefectural capital is Shizuoka City. ",
        image: [" https://res-4.cloudinary.com/jnto/image/upload/w_1000,h_667,c_fill,f_auto,fl_lossy,q_auto/v1650006824/shizuoka/H_00026_001", "https://a3.cdn.japantravel.com/photo/16407-224494/1200x630!/shizuoka-shizuoka-prefecture-224494.jpg ", "https://static.gltjp.com/glt/prd/data/article/12000/11118/20210621_084704_6cf57311_w1920.jpg ", "https://blog.japanwondertravel.com/wp-content/uploads/2020/01/Lake-Kawaguchiko-sakura-Mount-Fuji-1200x692.jpg"],
        long: "34.9756",
        lat: "138.3827",
      },
      {
        //20
        title: "Gifu 岐阜県",
        description: "Gifu is a prefecture in central Honshu, Japan’s main island.It’s home to traditional mountain villages, including Gujo Hachiman and the skiing destination Takayama.The city of Gifu, the prefecture’s capital, is famed for cormorant fishing to catch trout, while the Nagara River Ukai Museum in town demystifies this ancient sport.Above town, the reconstructed Gifu Castle topping Mount Kika offers far- reaching views.",
        image: ["https://gaijinpot.scdn3.secure.raxcdn.com/app/uploads/sites/6/2016/01/Gifu-Prefecture.jpg ", "https://cdn.cheapoguides.com/wp-content/uploads/sites/3/2020/05/shirakawago-village-gifu-iStock-645312944-1024x600.jpg ", " https://japandeluxetours.com/uploads/2015/08/20150811173721_55ca873138836.jpg", "https://img.cooljapan-videos.com/files/articles/jubp6sxq/thumbnail/6a001c0ed4f513765d1916e8a6b731f0.jpg.webp"],
        long: "35.4234",
        lat: "136.7606",
      },
      {
        //21
        title: "Ishikawa 石川県",
        description: "Ishikawa Prefecture is located on the coast of the Sea of Japan in the Chubu Region.Ishikawa's capital and largest tourist attraction is Kanazawa, best known for Kenrokuen Garden. ",
        image: ["https://a.travel-assets.com/findyours-php/viewfinder/images/res70/69000/69788-Fushimi-Inari-Shrine.jpg", "http://www.jlgc.org.uk/en/wp-content/uploads/2014/07/%E5%85%BC%E5%85%AD%E5%9C%92%E7%A7%8B%EF%BC%89.jpg ", "https://gaijinpot.scdn3.secure.raxcdn.com/app/uploads/sites/6/2016/03/Hatago-Iwa-Rock-Ishikawa-Noto-Hanto.jpg ", " https://gaijinpot.scdn3.secure.raxcdn.com/app/uploads/sites/6/2016/03/Ishikawa-Kanazawa-Geisha-1024x683.jpg"],
        long: "36.3260",
        lat: "136.5290",
      },
      {
        //22
        title: "Fukui 福井県",
        description: "Fukui prefecture is located near the center of the Japan Sea Coast, with Tsuruga City’s eastern section dividing the northern Reihoku area(formerly called Echizen) from the southern Reinan area(formerly called Wakasa).Fukui prefecture has four distinct seasons with winter’s north - westerly winds bringing heavy precipitation, making her a very moist place blessed with abundant water resources.Additionally, with her entire coastline being designated a quasi - national park our Fukui is truly one prefecture but many lands, a place of myriad natural wonders. ",
        image: ["https://a0.cdn.japantravel.com/photo/276-40670/1440x960!/fukui-fukui-prefecture-40670.jpg", "https://peakvisor.com/photo/Echizen-Katsuyama-Castle-Fukui-prefecture.jpg ", " https://www.japantimes.co.jp/wp-content/uploads/2016/01/n-temple-a-20160106.jpg", "https://matcha-place-additional-photo-pro.s3.ap-northeast-1.amazonaws.com/2022/10/28-16-21-10-6bad5d99152dce210a006365a9bba3a7.webp"],
        long: "36.0641",
        lat: "136.2196",
      },
      {
        //23
        title: "Aichi 愛知県",
        description: "Aichi Prefecture is located in the Chubu Region.The prefectural capital of Nagoya is the region's largest and Japan's fourth largest city.The prefecture is home to the Toyota Motor Corporation and as such is a major center of Japan's automotive industry.",
        image: [" https://www.kawaii-aichi.jp/wp-content/uploads/2018/04/osu_temple_cover-1920x1280.jpg", "https://wanderplans.com/storage/4445/Aichi-Japan-2.jpg", "https://www.ana.co.jp/japan-travel-planner/area/chubu/aichi/0000010/img001.jpg", " https://experiences.travel.rakuten.co.jp/pages/japan-tokai-aichi/images/hero-3.jpg"],
        long: "35.0183",
        lat: "137.2924",
      },
      {
        //24
        title: "Shiga 滋賀県",
        description: "Part of the Kansai Region, Shiga Prefecture is located east of Kyoto.Prefectural capital is Otsu.Shiga Prefecture fully encloses Lake Biwa, Japan's largest lake. Another attraction is Hikone with its feudal castle. ",
        image: ["https://a.travel-assets.com/findyours-php/viewfinder/images/res70/477000/477657-Shiga-Pro.jpg", "https://upload.wikimedia.org/wikipedia/commons/f/f8/Mangetsuji_Otsu_Shiga02n4500.jpg ", "https://media.tacdn.com/media/attractions-splice-spp-674x446/09/4c/77/77.jpg ", "https://rimage.gnst.jp/livejapan.com/public/article/detail/a/20/00/a2000165/img/en/a2000165_parts_5d1c6a6eccd76.jpg?20210216090103&q=80&rw=686&rh=490"],
        long: "35.3292",
        lat: "136.0563",
      },
      {
        //25
        title: "Mie 三重県",
        description: "Mie Prefecture belongs to both the Kansai Region and the Tokai Region.The prefecture is home to the Ise Shrines, Japan's most sacred Shinto shrines. Prefectural capital is Tsu City. ",
        image: ["https://rimage.gnst.jp/livejapan.com/public/article/detail/a/20/00/a2000170/img/en/a2000170_main.jpg?20210222091646&q=80&rw=750&rh=536 ", "https://cdn-japantimes.com/wp-content/uploads/2017/08/n-ninja-a-20170828.jpg", "https://japantoday-asset.scdn3.secure.raxcdn.com/img/store/1c/ce/b026f912dc0c1ae4818b1a91228e142050be/Things-to-do-in-Mie-Prefecture-Magose-Toge-Pass-travel-guide-to-central-Japan.jpg ", "https://gaijinpot.scdn3.secure.raxcdn.com/app/uploads/sites/6/2021/03/mie-Maruyama-senmaida-scaled.jpg "],
        long: "33.8144",
        lat: "136.0487",
      },
      {
        //26
        title: "Kyoto 京都駅",
        description: "Kyoto Prefecture is part of the Kansai Region, extending to the Sea of Japan coast in the north.The prefectural capital is Kyoto City, which used to serve as the national capital for more than one thousand years, and today offers more historical and traditional attractions than any other Japanese city.A famous attraction of northern Kyoto is Amanohashidate, offering one of Japan's three most scenic views. ",
        image: [" https://a3.cdn.japantravel.com/photo/68104-226822/1440x960!/kyoto-kyoto-color-guide-226822.jpg", "https://gaijinpot.scdn3.secure.raxcdn.com/app/uploads/sites/6/2021/02/Kyoto-Japan-old-town-streets-in-the-Higashiyama-district@3x-1024x683.jpg ", "https://www.outthere.travel/wp-content/uploads/2016/09/Kyoto-Japan_Feat.jpg ", "https://www.nomadasaurus.com/wp-content/uploads/2020/01/Things-to-do-in-Kyoto-Japan.jpg "],
        long: "35.0116",
        lat: "135.7681",
      },
      {
        //27
        title: "Nara 奈良県",
        description: "Nara, a landlocked prefecture in the Kansai Region, is the cradle of the Japanese civilization.Many of the early emperors built their palaces in Nara Prefecture, formerly known as Yamato.In 710, Nara was selected as the location of Japan's first permanent capital, Heijo (today's Nara City).Previously, the capital was moved with the ascension of each new emperor. ",
        image: ["https://gaijinpot.scdn3.secure.raxcdn.com/app/uploads/sites/6/2016/04/iStock-499127037.jpg ", "https://peakvisor.com/photo/Japan-Nara-Prefecture.jpg ", "https://i.pinimg.com/736x/01/bc/47/01bc47fc6c3508a177983464c6b8e734.jpg ", "https://soranews24.com/wp-content/uploads/sites/3/2019/08/nara-deer-park-japan-kyoto-japanese-shika-gathering-museum-summer-annual-visit-tourists-tourism-travel-best-ranking-13.jpg"],
        long: "34.6851",
        lat: "135.8048",
      },
      {
        //28
        title: "Osaka 大坂符",
        description: "Osaka Prefecture  is Japan's second smallest prefecture after Kagawa. Prefectural capital is Osaka City, the largest city in the Kansai Region. Osaka Prefecture is the site of Kansai Airport, Japan's second largest international airport. ",
        image: ["https://photos.smugmug.com/Osaka/Osaka-Categories/i-J9MFjBv/0/XL/Osaka_Districts-XL.jpg ", " https://static.nationalgeographic.co.uk/files/styles/image_3200/public/ngtp_web_citylife_osaka_dontonbori_17_hr.jpg?w=1600&h=900", "https://www.japantimes.co.jp/wp-content/uploads/2017/05/n-danjiri-a-20170530.jpg", "https://www.nippon.com/en/ncommon/contents/japan-topics/135426/135426.jpeg "],
        long: "34.6937",
        lat: "135.5023",
      },
      {
        //29
        title: "Wakayama 和歌山県",
        description: " Wakayama offers the natural and spiritual sides of Japan with the ancient temple complex of Koyasan, the Kumano Kodo pilgrimage route, and a picturesque coastline.Wakayama is home to some of Japan's most sacred sites and beautiful beaches, attracting enlightenment-seeking pilgrims and beach-bound sun worshippers in equal measure. From the World Heritage listed Kumano Kodo Pilgrimage Route and the temple complex of Koyasan to the sparkling white sands of Shirarahama Beach. Wakayama City is home to an impressive castle and a delicious local ramen with its own style.",
        image: ["https://gaijinpot.scdn3.secure.raxcdn.com/app/uploads/sites/6/2020/03/Wakayama-Yunomine-Onsen-2-1024x683.jpg ", "https://ychef.files.bbci.co.uk/960_540/p06xgwld.jpg ", "https://www.bbc.com/storyworks/travel/specials/wakayama-prefecture/includes/images/home/gallery/9.jpg ", "https://live.staticflickr.com/4190/33682412563_d7d386a889_b.jpg "],
        long: "34.2304",
        lat: "135.1707",
      },
      {
        //30
        title: "Hyogo 兵庫県",
        description: "Hyogo Prefecture is located in the Kansai Region, stretching from the Seto Inland Sea to the Sea of Japan.Its largest city and prefectural capital is Kobe, its most famous tourist attraction is Himeji Castle, and its best known hot spring resorts are Arima and Kinosaki. ",
        image: ["https://jref.com/attachments/toyooka03-jpg.27694/ ", "https://media.tacdn.com/media/attractions-content--1x-1/0b/39/9f/ad.jpg ", "https://a.cdn-hotels.com/gdcs/production191/d704/71fa7d4d-58dd-4f61-8470-7beaee16da38.jpg?impolicy=fcrop&w=800&h=533&q=medium ", "https://peakvisor.com/photo/Akashi-Castle-Park-Hyogo-Japan.jpg "],
        long: "34.8580",
        lat: "134.5454",
      },
      {
        //31
        title: "Tottori 鳥取県",
        description: "Tottori Prefectureis located along the Sea of Japan coast in the Chugoku Region.The prefectual capital is Tottori City.Tottori's best known tourist attraction is its sand dunes (Tottori Sakyu). ",
        image: [" https://upload.wikimedia.org/wikipedia/commons/e/e1/Tottori-Sakyu_Tottori_Japan.JPG", "https://www.japan-guide.com/community/img/816663_3185.jpg ", "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/17/de/95/06/in-tottori-prefecture.jpg?w=600&h=400&s=1 ", "https://st4.depositphotos.com/1035350/25334/i/600/depositphotos_253348312-stock-photo-tottori-japan-sand-dunes-on.jpg "],
        long: "35.5011",
        lat: "134.2351",
      },

      {
        //32
        title: "Okayama 岡山県",
        description: "Okayama Prefecture is located along the Seto Inland Sea in the Chugoku Region.The prefectural capital is Okayama City.Just 15 minutes west of Okayama City, Kurashiki attracts tourists with its nicely preserved old canal area. ",
        image: ["https://a.travel-assets.com/findyours-php/viewfinder/images/res70/458000/458350-Okayama-And-Vicinity.jpg ", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfMijbJCdbaUKB2R-khRumsV7RxwLKBPHRVA&usqp=CAU ", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReV4GQ7miSWdPI1sTP4ea9i5zJKnso9UtBVhlmXfjaYB6WTUk2otEnBsfA1pa0278n-bk&usqp=CAU ", "https://media.istockphoto.com/id/1310894246/photo/on-a-spring-morning-the-quiet-kurashiki-bikan-historical-quarter.jpg?s=612x612&w=0&k=20&c=B2EXOzvmK39ErbR1XqJgbpen10lN78fHgFgAY-PQZeE= "],
        long: "34.6555",
        lat: "133.9198",
      },
      {
        //33
        title: "Shimane 島根県",
        description: "Shimane Prefecture is located along the Sea of Japan coast in the Chugoku Region.The prefectural capital is Matsue.Touristic highlights include Matsue and its castle; Izumo Taisha, Japan's oldest shrine; Iwami Ginzan, a historic silver mine; and the Adachi Art Museum with its wonderful garden. ",
        image: ["https://www.japan-guide.com/thumb/XYZlistXYZe1237_1680.jpg ", "https://a2.cdn.japantravel.com/photo/55031-192132/1440x960!/shimane-top-10-192132.jpg ", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwG5fiCH8uILpX6P8hrL-hB5q7LRHhfa68hw&usqp=CAU ", "https://mediaim.expedia.com/destination/1/7aae86b7b0e0cc0043991ae57399541f.jpg?impolicy=fcrop&w=400&h=225&q=mediumLow "],
        long: "35.1244",
        lat: "132.6293",
      },
      {
        //34
        title: "Hiroshima 広島県",
        description: "Hiroshima Prefecture is located along the Seto Inland Sea in the Chugoku Region.The prefectural capital is Hiroshima City, the region's largest city. Miyajima with its famous floating torii gate is one of the prefecture's major tourist attractions. ",
        image: ["https://www.japan-guide.com/thumb/XYZlistXYZe1238_1680.jpg ", "https://media.tacdn.com/media/attractions-content--1x-1/0b/39/82/79.jpg ", "https://media.istockphoto.com/id/847645034/ja/%E3%82%B9%E3%83%88%E3%83%83%E3%82%AF%E3%83%95%E3%82%A9%E3%83%88/%E5%AE%AE%E5%B3%B6%E3%81%A7%E3%81%8B%E3%82%8F%E3%81%84%E3%81%84%E9%B9%BF.jpg?s=612x612&w=0&k=20&c=Gc48A23qWV_juaA2L7Ma7VU_NIQS96zVhFGySE3tBjU= ", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuWtvAflnpdv7gftRi0DlZZxJOW9w_ApP0Vg&usqp=CAU "],
        long: "34.3853",
        lat: "132.4553",
      },
      {
        //35
        title: "Yamaguchi 山口県",
        description: "Yamaguchi Prefecture is the westernmost prefecture on Honshu Island and is part of the Chugoku Region.The prefectural capital is Yamaguchi City.Yamaguchi, then known as Choshu, played a leading role in overthrowing the shogunate and bringing Japan's feudal era to an end. ",
        image: ["https://a0.cdn.japantravel.com/photo/40744-178648/840x560!/highlights-of-yamaguchi-178648.jpg ", "https://upload.wikimedia.org/wikipedia/commons/2/29/%E5%B2%A9%E5%9B%BD%E5%9F%8E%E3%81%8B%E3%82%89%E8%A6%8B%E3%81%9F%E9%8C%A6%E5%B8%AF%E6%A9%8B.jpg ", " https://gaijinpot.scdn3.secure.raxcdn.com/app/uploads/sites/6/2020/03/Kintaikyo-Bridge--1024x683.jpeg", "https://cdn.omni-links.com/eurex/2e212246-e2ef-42ff-9165-dcd87fbe81cd.jpg "],
        long: "34.2797",
        lat: " 131.5213",
      },
      {
        //36
        title: "Kagawa 香川県",
        description: "Located on the island of Shikoku, Kagawa Prefecture (香川県, Kagawa-ken) is the smallest prefecture of Japan. Kagawa is well known for its udon noodles, which are named after the prefecture's old name Sanuki. The prefectural capital is Takamatsu.",
        image: ["https://blog.japanwondertravel.com/wp-content/uploads/2020/08/170742100267c65e522b32c0e442ed50-1200x800.jpg", "https://www.worldtravelguide.net/wp-content/uploads/2021/02/shu-Japan-Kagawa-Ritsurin_1749353267-EDITORIAL-1440x823-1.jpg", "https://www.japantimes.co.jp/wp-content/uploads/2016/04/n-thai-a-20160415.png", "https://mediaim.expedia.com/destination/1/aa7eda8ee91c727486e81f808d89c96a.jpg"],
        long: "34.2226",
        lat: "134.0199",
      },
      {
        //37
        title: "Tokushima 徳島県",
        description: "Tokushima Prefecture is located on the island of Shikoku.The prefectural capital is Tokushima City.The prefecture is best known for the Awa Odori, a dance festival held in August, the whirlpools of Naruto and the remote Iya Valley. ",
        image: ["https://www.japan-guide.com/thumb/XYZlistXYZe1234_1680.jpg ", "https://www.vacationstravel.com/wp-content/uploads/2018/01/105_tokushima_Clouds-settle-on-Oboke-River.jpg ", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtTs4_bArjX_X9PsCjdGQ6mZZStashC-bWNQ&usqp=CAU ", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-G0Qve1Fa1vHnwPVb52Z-mCyYbsEyrRzHmg&usqp=CAU "],
        long: "33.9420",
        lat: "134.3237",
      },
      {
        //38
        title: "Kochi 高知県",
        description: "Kochi Prefecture is located on the island of Shikoku.The prefectural capital is Kochi City.The prefecture's former name is Tosa. Tosa and its local hero Sakamoto Ryoma played an important historical role towards the end of the Edo Period. ",
        image: ["https://hiddengem-kochi.com/img/top_lead.jpg ", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNhVLHphG3YLoU19j9ORU7oBBU8v6gt-WlHg&usqp=CAU ", "https://gaijinpot.scdn3.secure.raxcdn.com/app/uploads/sites/4/2016/10/Glory-Hallelujah-views-.jpg ", "https://cdn.cheapoguides.com/wp-content/uploads/sites/3/2018/02/32807850714_52de3a4b58_o-1.jpg "],
        long: "33.5589",
        lat: "133.5312",
      },
      {
        //39
        title: "Ehime 愛媛県",
        description: "Ehime Prefecture is located on the island of Shikoku.The prefectural capital is Matsuyama, which is best known for its castle and Dogo Onsen, one of Japan's oldest hot springs. ",
        image: ["https://www.japan-guide.com/thumb/XYZlistXYZe1235_1680.jpg ", "https://gaijinpot.scdn3.secure.raxcdn.com/app/uploads/sites/6/2016/01/Ehime-Prefecture.jpg ", "https://content.fun-japan.jp/renewal-prod/cms/articles/content/matsuyama01Rjpg_2019-08-13%2016:22:26.jpg ", "https://dormy-inn-matsuyama-ehime.booked.net/data/Photos/Big/5401/540144/540144609/Dormy-Inn-Matsuyama-Natural-Hot-Spring-Exterior.JPEG "],
        long: "33.6025",
        lat: "132.7858",
      },
      {
        //40
        title: "Fukuoka 福岡県",
        description: "Fukuoka Prefecture is located on the island of Kyushu.The prefectural capital is Fukuoka City, Kyushu's largest city. One of Fukuoka's most famous tourist attractions is Dazaifu Tenmangu in Dazaifu. ",
        image: ["https://www.jetstar.com/_/media/inspiration-hub/article-images/19dec/japan-fukuoka-need-to-know-facts/image_3_japan_fukuoka_wisteria.jpg?rev=8c9a7624357446d6bd122439199d297d&w=690&rc=1&cw=690&ch=424&cx=18&cy=0&hash=DE9C27EC17D6B3E645F3FD628628483A02124AA8 ", "https://japancrops.com/upload/img/prefectures/40/f99d6a3f5ace8f022a306c62c0f6ad01.jpg ", "https://cdn.wakuwaku.today/uploads/store/IMG_0931-b65be9679d17da7b906b5dc380eeedfa.jpg ", "https://gaijinpot.scdn3.secure.raxcdn.com/app/uploads/sites/6/2016/02/Fukuoka-Wisteria-Umbrella-1024x682.jpg "],
        long: "33.5902",
        lat: "130.4017",
      },
      {
        //41
        title: "Oita 大分県",
        description: "Oita Prefectureis located on the eastern coast of Kyushu.The prefectural capital is Oita City.Just north of Oita City is Beppu, one of Japan's most famous hot spring resorts.",
        image: ["https://gaijinpot.scdn3.secure.raxcdn.com/app/uploads/sites/6/2016/01/Oita.jpg ", "https://s3.voyapon.com/wp-content/uploads/2020/12/21163418/20201119-DSC_9106.jpg ", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzSKGX_nonanNsW-ETnF0RMGUSn0vTkQaXeA&usqp=CAU ", "https://lp-cms-production.imgix.net/features/2018/08/twopillars-d27573e18ec7.jpg?auto=format&q=40&w=870 "],
        long: "33.2396",
        lat: "131.6095",
      },
      {
        //42
        title: "Kumamoto 熊本県",
        description: "Kumamoto Prefecture is located along the west coast of Kyushu.Its prefectural capital is Kumamoto City.Kumamoto is known for Mount Aso and hot spring resorts such as Kurokawa Onsen. ",
        image: ["https://www.japan-guide.com/thumb/XYZlistXYZe1244_1680.jpg ", "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/15/48/5a/06/aso-is-know-cycling-activity.jpg?w=700&h=-1&s=1 ", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoBCxiZH1o7OSVd3wFpQ4qvmvvVZf7odZpZw&usqp=CAU ", "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/03/2a/a1/80/caption.jpg?w=700&h=-1&s=1 "],
        long: "34.8032",
        lat: "130.7079",
      },
      {
        //43
        title: "Miyazaki 宮崎県",
        description: "Miyazaki Prefecture (宮崎県, Miyazaki-ken) is located along the southeastern coast of Kyushu. It is known for beautiful mountainous and coastal scenery and mild climate. The prefectural capital is Miyazaki City.",
        image: ["https://res.cloudinary.com/hnar34gz7/image/upload/w_1280,h_800,c_fill,f_auto,fl_lossy,q_auto/v1/media_ktpo/filer_public/2d/e6/2de6d44d-d1b8-45b1-86ef-78c6d1928870/miyazaki_takachiho_gorge_ekr8u0", "https://www.japan-guide.com/thumb/XYZlistXYZe1245_1680.jpg", "https://guidable.co/wp-content/uploads/2021/10/Miyazaki-prefecture.jpg", "https://japanicle.com/wp-content/uploads/2022/08/shutterstock_766829956s.jpg"],
        long: "31.9077",
        lat: "131.4202",
      },
      {
        //44
        title: "Kagoshima 鹿児島県",
        description: "Kagoshima Prefecture consists of the southernmost part of Kyushu and the northern half of the Nansei Shoto, the island group that stretches from Kyushu to Taiwan.The prefecture's former name is Satsuma. Satsuma played a crucial role in realizing the Meiji Restoration and during the Meiji Period. ",
        image: ["https://www.japan-guide.com/thumb/XYZlistXYZe1246_1680.jpg ", "https://gaijinpot.scdn3.secure.raxcdn.com/app/uploads/sites/6/2016/03/Kagoshima-Pref-2.jpg ", " https://media.tacdn.com/media/attractions-content--1x-1/0b/39/b5/5f.jpg", "https://www.goworldtravel.com/wp-content/uploads/2021/03/Kagoshima-Japan-KPVB.jpg "],
        long: "31.5969",
        lat: "130.5571",
      },
      {
        //45
        title: "Saga 佐賀県",
        description: "Saga Prefecture is a small prefecture on the island of Kyushu.The prefectural capital is Saga City.The prefecture's best known tourist attraction is its pottery, especially the pottery from the town of Arita. ",
        image: ["https://www.japan-guide.com/thumb/XYZlistXYZe1241_1680.jpg ", "https://a0.cdn.japantravel.com/photo/291-165883/1440x960!/saga-saga-prefecture-165883.jpg ", "https://previews.123rf.com/images/bee32/bee321808/bee32180800577/106039402-saga-japan-july-19-2018-yutoku-inari-shrine-in-kashima-city-saga-prefecture-japan-.jpg ", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaO6ZtUQDoVlvLR_yMFDEdCPik9E2cqoTXtg&usqp=CAU "],
        long: "33.3078",
        lat: "130.2271",
      },
      {
        //46
        title: "Nagasaki 長崎県",
        description: "Nagasaki Prefecture consists of the northwestern tip of Kyushu and hundreds of smaller islands.The prefectural capital is Nagasaki City.Another popular tourist destination is the Shimabara Peninsula with Mount Unzen at its center. ",
        image: ["https://www.japan-guide.com/thumb/XYZlistXYZe1240_1680b.jpg ", "https://upload.wikimedia.org/wikipedia/commons/a/a4/Albuquerque_Bridge-Sasebo_River%2C_Sasebo.jpg ", "https://a.travel-assets.com/findyours-php/viewfinder/images/res70/458000/458108-Nagasaki-Prefecture.jpg ", "https://media.tacdn.com/media/attractions-content--1x-1/0b/39/a1/38.jpg "],
        long: "33.2489",
        lat: "139.6931",
      },
      {
        //47
        title: "Okinawa 沖縄県",
        description: "Okinawa is Japan's southernmost prefecture, consisting of a few dozen, small islands in the southern half of the Nansei Shoto, the island chain which stretches over about one thousand kilometers from Kyushu to Taiwan. ",
        image: ["https://www.jetstar.com/_/media/inspiration-hub/article-images/19dec/japan-okinawa-7-myths/image_2_japan_okinawa_islands.jpg?rev=8441bbf4cc1e4bceb967d1e758ba4ab7&w=690&rc=1&cw=690&ch=424&cx=18&cy=0&hash=5B637FD66E1B8691377B2FDC5A3D4E44788E70B5 ", "https://static.nationalgeographic.co.uk/files/styles/image_3200/public/woman-festival-okinawa-japan.jpg?w=1600&h=900 ", "https://thumbs.dreamstime.com/b/shuri-castle-okinawa-japan-historic-51763142.jpg ", "https://www.japantimes.co.jp/wp-content/uploads/2020/07/np_file_23991.jpeg "],
        long: "26.3344",
        lat: "127.8056",
      },
    ], {});

  },

  async down(queryInterface, Sequelize) {

    await queryInterface.bulkDelete('prefectures', null, {});

  }
};
