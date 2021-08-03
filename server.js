const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 8060;

app.use(express.json());
app.use(bodyParser.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));

// --------
// DATABASE
// --------
var database = {
  games: [
    {
      id: 1,
      gamePhoto:
        "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_PathofExile_GrindingGearGames_S2_1200x1600-66910c111571c37c7e2d4032ff0a3e4c?h=854&resize=1&w=640",
      gameName: "Path of Exile",
      developer: "Grinding Gear Games",
      gamePrice: "Free",
      added: false,
      inWishlist: false,
      isDownloaded: false,
      filterBy: "top",
      gamepage: {
        foto: "https://www.pdvg.it/wp-content/uploads/2021/07/KeyArt-1.jpg",
        descr:
          "You are an Exile, struggling to survive on the dark continent of Wraeclast, as you fight to earn power to exact your revenge against those who wronged you. Created by hardcore gamers, Path of Exile is an online Action RPG set in a dark fantasy world.",
      },
      news: {
        foto: "https://www.pdvg.it/wp-content/uploads/2021/07/KeyArt-1.jpg",
        text: "New league Expedition is in the game! Join now!",
      },
    },
    {
      id: 2,
      gamePhoto:
        "https://cdn1.epicgames.com/salesEvent/salesEvent/17BR_S17_Launcher_EGS_Thumb_1200x1600_1201x1600-711dd5f589b12dc04d79312bbb4ce4f3?h=854&resize=1&w=640",
      gameName: "Fortnite",
      developer: "Epic Games Store",
      gamePrice: "Free",
      added: false,
      inWishlist: false,
      isDownloaded: false,
      filterBy: "free",
      gamepage: {
        foto: "https://cdn2.unrealengine.com/metaimage1-1920x1080-abb60090deaf.png",
        descr:
          "Fortnite is a massive online shooter game developed by Epic Games in 2017. It comes in 3 Game Modes : Save the World, Battle Royale and Creative.",
      },
      news: {
        foto: "https://cdn2.unrealengine.com/17br-armoredbatman-1920x1080-1920x1080-204612458d51.jpg?h=720&resize=1&w=1280",
        text: "Rebuilt and ready for action. When things get tough, get tougher.",
      },
    },
    {
      id: 3,
      gamePhoto:
        "https://static-cdn.jtvnw.net/ttv-boxart/Rocket%20League-285x380.jpg",
      gameName: "Rocket League",
      developer: "Psyonix LLC",
      gamePrice: "Free",
      added: false,
      inWishlist: false,
      isDownloaded: false,
      filterBy: "top",
      gamepage: {
        foto: "https://cdn2.unrealengine.com/egs-rocketleague-psyonixllc-s3-2560x1440-97052de303c4.jpg",
        descr:
          "Rocket League is a video game that involves the combination of car racing and soccer, created and developed by Psyonix Studios. In the game, two teams of players are pitted against each other in a futuristic arena to duke it out in five-minute matches.",
      },
    },
    {
      id: 4,
      gamePhoto:
        "https://upload.wikimedia.org/wikipedia/ru/2/2c/Assassin%E2%80%99s_Creed_Odyssey.jpg",
      gameName: "Assassin's Creed Odyssey",
      developer: "Ubisoft",
      gamePrice: "915",
      added: false,
      inWishlist: false,
      isDownloaded: false,
      filterBy: "popular",
      gamepage: {
        foto: "https://i.playground.ru/p/TebpbuFXFAavf9IstSapvA.jpeg",
        descr: "Choose your fate in Assassin's Creed® Odyssey.",
      },
    },
    {
      id: 5,
      gamePhoto:
        "https://cdn1.epicgames.com/400347196e674de89c23cc2a7f2121db/offer/AC%20KINGDOM%20PREORDER_STANDARD%20EDITION_EPIC_Key_Art_Portrait_640x854-640x854-288120c5573756cb988b6c1968cebd86.png?h=854&resize=1&w=640",
      gameName: "Assassin's Creed: Valhalla",
      developer: "Ubisoft",
      gamePrice: "915",
      added: false,
      inWishlist: false,
      isDownloaded: false,
      filterBy: "popular",
      gamepage: {
        foto: "https://geek.informator.ua/wp-content/uploads/2020/05/assassins-creed-valhalla-3.jpg",
        descr:
          "Assassin's Creed: Valhalla is the twelfth main installment in the Assassin's Creed series developed by Ubisoft. In the game, the player takes control of Eivor, a Viking who fought in the Norse invasion of England.",
      },
    },
    {
      id: 6,
      gamePhoto:
        "https://images.g2a.com/newlayout/323x433/1x1x0/cd53d978a451/5dce70057e696c7f8e5656f2",
      gameName: "Control",
      developer: "Remedy Entertainment Plc | 505 Games",
      gamePrice: "639",
      added: false,
      inWishlist: false,
      isDownloaded: false,
      filterBy: "popular",
      gamepage: {
        foto: "https://www.digiseller.ru/preview/460288/p1_3030441_29f4943e.jpg",
        descr:
          "Control is a third-person action-adventure video game created by Finnish game studio Remedy Entertainment. The game revolves around the Federal Bureau of Control (FBC), a secret U.S. government agency tasked with containing and studying paranatural phenomena.",
      },
    },
    {
      id: 7,
      gamePhoto:
        "https://cdn1.epicgames.com/jackal/offer/EGS_LIVEFORTHEHUNT_PhoenixLabs_S2-1200x1600-81f311d2bd9d4b645f8d5440ae96834b.jpg?h=854&resize=1&w=640",
      gameName: "Dauntless",
      developer: "Phoenix Labs",
      gamePrice: "Free",
      added: false,
      inWishlist: false,
      isDownloaded: false,
      filterBy: "new",
      gamepage: {
        foto: "https://wallpapercave.com/wp/wp5936307.jpg",
        descr:
          "Dauntless is a fresh take on the Action-RPG genre, developed by the industry veterans from Riot Games, BioWare and other acclaimed studios. After a cataclysmic event mankind survives in a harsh, yet majestic world of floating islands.",
      },
    },
    {
      id: 8,
      gamePhoto:
        "https://cdn1.epicgames.com/1368a7f14c3344bbaededbae528fafed/offer/EGS_DeadCells_MotionTwin_S2-1200x1600-34d9d5ebca89e17e0a26ddb2cb158b75.jpg?h=854&resize=1&w=640",
      gameName: "Dead Cells",
      developer: "Motion Twin",
      gamePrice: "179",
      added: false,
      inWishlist: false,
      isDownloaded: false,
      filterBy: "no",
      gamepage: {
        foto: "https://images4.alphacoders.com/833/833257.jpg",
        descr:
          "Dead Cells is a roguelike, Castlevania-inspired action-platformer, allowing you to explore a sprawling, ever-changing castle… assuming you’re able to fight your way past its keepers. To beat the game you’ll have to master 2D souls-like like combat with the ever present threat of permadeath looming. No checkpoints. Kill, die, learn, repeat.",
      },
      temporarilyFree: [
        {
          start: {
            month: "July",
            day: 8,
            time: "06:00 PM",
          },
          end: {
            month: "July",
            day: 15,
            time: "06:00 PM",
          },
        },
      ],
    },
    {
      id: 9,
      gamePhoto:
        "https://cdn1.epicgames.com/ca93b6d41a4e41af864942d8f0a2a826/offer/uno-ult-store-portrait-1200x1600-1200x1600-068853fa8ff2-1200x1600-96a1e051d1b1ed8a9eb3c1625b08f624.jpg?h=854&resize=1&w=640",
      gameName: "New Uno - Ultimate Edition",
      developer: "Ubisoft",
      gamePrice: "179",
      added: false,
      inWishlist: false,
      isDownloaded: false,
      filterBy: "no",
      gamepage: {
        foto: "https://cdn2.unrealengine.com/Diesel%2Fproductv2%2Funo%2Fhome%2FGameName_Edition_Capsule_1920X1080-1920x1080-267fd1545e307856a04e27573313d68ba2001dc4.jpg",
        descr:
          "Uno is a video game that takes similarities to the card game of the same name, where at least 4 players receives seven cards from 4 different colors: Red, Green, Yellow and Blue. Players must play cars from the matching color or number/symbol and the match only ends if a player zero the card stock.",
      },
      temporarilyFree: [
        {
          start: {
            month: "July",
            day: 8,
            time: "06:00 PM",
          },
          end: {
            month: "July",
            day: 15,
            time: "06:00 PM",
          },
        },
      ],
    },
    {
      id: 10,
      gamePhoto:
        "https://cdn1.epicgames.com/b30b6d1b4dfd4dcc93b5490be5e094e5/offer/RDO_Standalone_EGS_PortraitProductImage_1200x1600_Deliverable-1200x1600-b59e0f9eaa6ef53e8e4e62515aabadc2.jpg?h=854&resize=1&w=640",
      gameName: "Red Dead Redemption 2",
      developer: "Rockstar Games",
      gamePrice: "899",
      added: false,
      inWishlist: false,
      isDownloaded: false,
      filterBy: "popular",
      gamepage: {
        foto: "https://lvgames.info/wp-content/uploads/2020/04/ewsofkpwkaigmrn.jpg",
        descr:
          "Red Dead Redemption 2 is a Western-themed action-adventure game. Played from a first or third-person perspective, the game is set in an open-world environment featuring a fictionalized version of the Western, Midwestern, and Southern United States in 1899, during the latter half of the Wild West era and the turn of the twentieth century.",
      },
    },
    {
      id: 11,
      gamePhoto:
        "https://cdn1.epicgames.com/28d06644e2f84b398c1b7fb96a2b6bd5/offer/GWF_Tall-1200x1600-406d07b465790161632b25aaa1613dfe.jpg?h=854&resize=1&w=640",
      gameName: "Gods Will Fall",
      developer: "Clever Beans | Deep Silver",
      gamePrice: "819",
      added: false,
      inWishlist: false,
      isDownloaded: false,
      filterBy: "no",
      gamepage: {
        foto: "https://en.free-wallpapers.su/data/media/9297/big/gm9134.jpg",
        descr:
          "The gods’ torturous rule over humanity has lasted for millennia. Bent on cruelty and suffering, they demand to be served with blind worship through an oath of fealty pledged from every man, woman and child. To those who don't submit to the gods’ will; a slow and merciless death awaits.",
      },
    },
    {
      id: 12,
      gamePhoto:
        "https://cdn1.epicgames.com/ed55aa5edc5941de92fd7f64de415793/offer/EGS_HITMAN3_IOInteractiveAS_S2-1200x1600-b285fb6eb586113c9479ff33ed646b69.jpg?h=854&resize=1&w=640",
      gameName: "HITMAN 3",
      developer: "IO Interactive",
      gamePrice: "849",
      added: false,
      inWishlist: false,
      isDownloaded: false,
      filterBy: "no",
      gamepage: {
        foto: "https://i0.wp.com/itc.ua/wp-content/uploads/2021/01/hitman3.jpg",
        descr:
          "The game will serve as the conclusion to the World of Assassination trilogy. It will launch with 6 new locations to explore, and owners of HITMAN™ and HITMAN™ 2 will be able to 'import' locations introduced in those games into HITMAN™ III.",
      },
    },
    {
      id: 13,
      gamePhoto:
        "https://cdn1.epicgames.com/9c86694776c04893bec691f13f4b60fc/offer/EGS_WerewolfTheApocalypseEarthblood_CyanideStudio_S2-1200x1600-2e3baa62e063efbbb07dfdefa5def268.jpg?h=854&resize=1&w=640",
      gameName: "Werewolf: The Apocalypse",
      developer: "Cyanide Studio | Nacon",
      gamePrice: "1149",
      added: false,
      inWishlist: false,
      isDownloaded: false,
      filterBy: "no",
      gamepage: {
        foto: "https://www.futuregamereleases.com/wp-content/uploads/2021/01/Werewolf-The-Apocalypse-Earthblood-PS5-Wallpapers-03.jpg",
        descr:
          "Werewolf: The Apocalypse – Earthblood is a third-person, single-player action role-playing game in which the player takes the role of an eco-terrorist werewolf. The player explores various areas in the American Northwest, in the form of large hub worlds.",
      },
    },
    {
      id: 14,
      gamePhoto:
        "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_Arcadegeddon_IllFonic_S2_1200x1600-b7f9b3cfd4ad95fcffe028e8eadc9d4c?h=854&resize=1&w=640",
      gameName: "Arcadegeddon",
      developer: "IllFonic",
      gamePrice: "279",
      added: false,
      inWishlist: false,
      isDownloaded: false,
      filterBy: "new",
      gamepage: {
        foto: "https://cdn2.unrealengine.com/egs-arcadegeddon-illfonic-g2-00-2560x1440-e5d86680d552.jpg",
        descr:
          "Rise up and play with up to three friends in this ever-evolving cooperative multiplayer shooter. Explore multiple biomes, mini games, find hidden chests, and defeat numerous enemies and bosses.",
      },
    },
    {
      id: 15,
      gamePhoto:
        "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_SwordsofLegendsOnline_WangyuanShengtangEntertainmentTechnologyCO_S2_1200x1600-b123c02bf392a56c196872fffdeda780?h=854&resize=1&w=640",
      gameName: "Swords of Legends Online",
      developer:
        "Wangyuan Shengtang Entertainment Technology CO. | Gameforge 4D GmbH",
      gamePrice: "1149",
      added: false,
      inWishlist: false,
      isDownloaded: false,
      filterBy: "new",
      gamepage: {
        foto: "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_SwordsofLegendsOnline_WangyuanShengtangEntertainmentTechnologyCO_S1_2560x1440-cad817be31c2a2c532ad6a574e8e7d19?h=270&resize=1&w=480",
        descr:
          "MMORPG set in a breathtaking fantasy world with sophisticated combat mechanics and a unique storyline based on Chinese mythology. Explore the world with 6 different classes, epic PvP encounters, take on challenging dungeons and reach the fascinating endgame.",
      },
    },
    {
      id: 16,
      gamePhoto:
        "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_Warface_AllodsTeam_S2_1200x1600-90a094bdcb6824eefe84c60ef0c4a612?h=854&resize=1&w=640",
      gameName: "Warface",
      developer: "Allods Team | MY.GAMES",
      gamePrice: "Free",
      added: false,
      inWishlist: false,
      isDownloaded: false,
      filterBy: "new",
      gamepage: {
        foto: "https://cdn2.unrealengine.com/egs-warface-allodsteam-s1-2560x1440-512a858a90d1.jpg",
        descr:
          "Warface is a contemporary MMO first person shooter with millions of fans around the world. It offers intense PvP modes, compelling PvE missions and raids that you can challenge with five diverse classes as well as colossal customizable arsenal.",
      },
    },
    {
      id: 17,
      gamePhoto:
        "https://cdn1.epicgames.com/salesEvent/salesEvent/portrait_1200x1600-8949ca06d4a2107bc25ec4172e353a8d?h=854&resize=1&w=640",
      gameName: "Warframe",
      developer: "Digital Extremes | Digital Extremes",
      gamePrice: "Free",
      added: false,
      inWishlist: false,
      isDownloaded: false,
      filterBy: "new",
      gamepage: {
        foto: "https://cdn02.nintendo-europe.com/media/images/10_share_images/games_15/nintendo_switch_download_software_1/H2x1_NSwitchDS_Warframe.jpg",
        descr:
          "Warring factions have brought the Origin System to the brink of destruction. Join the Tenno and defend an ever-expanding universe. Master your Warframe, build your Arsenal and become an unstoppable force in this genre-defining looter-shooter.",
      },
    },
    {
      id: 18,
      gamePhoto:
        "https://cdn1.epicgames.com/0584d2013f0149a791e7b9bad0eec102/offer/GTAV_EGS_Artwork_1200x1600_Portrait Store Banner-1200x1600-382243057711adf80322ed2aeea42191.jpg?h=854&resize=1&w=640",
      gameName: "Grand Theft Auto V: Premium Edition",
      developer: "Rockstar Games",
      gamePrice: "629",
      added: false,
      inWishlist: false,
      isDownloaded: false,
      filterBy: "top",
      gamepage: {
        foto: "https://cdn2.unrealengine.com/Diesel%2Fproductv2%2Fgrand-theft-auto-v%2Fhome%2FGTAV_EGS_Artwork_1920x1080_Hero-Carousel_V06-1920x1080-1503e4b1320d5652dd4f57466c8bcb79424b3fc0.jpg",
        descr:
          "The Grand Theft Auto V: Premium Edition includes the complete GTAV story, Grand Theft Auto Online and all existing gameplay upgrades and content. You’ll also get the Criminal Enterprise Starter Pack, the fastest way to jumpstart your criminal empire in GTA Online.",
      },
    },
    {
      id: 19,
      gamePhoto:
        "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_OldWorld_MohawkGames_S2_1200x1600-cf57197806c4b3dca34059594ef40d91?h=854&resize=1&w=640",
      gameName: "Old World",
      developer: "Mohawk Games",
      gamePrice: "569",
      added: false,
      inWishlist: false,
      isDownloaded: false,
      filterBy: "top",
      gamepage: {
        foto: "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_OldWorld_MohawkGames_S1_2560x1440-ad3f83d78ffdcc569b89dfd3e9b14297?h=270&resize=1&w=480",
        descr:
          "Conquer the Old World in this historical, epic strategy game from Soren Johnson, Lead Designer of Civilization IV and Offworld Trading Company. Every year is a turn, and each leader is a mere mortal, so your lasting legacy will be the dynasty you leave behind.",
      },
    },
    {
      id: 20,
      gamePhoto:
        "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_NBA2K21_VisualConcepts_S2_1200x1600-2fed3198782328f4f59194ebd5e54680?h=854&resize=1&w=640",
      gameName: "NBA 2K21",
      developer: "Visual Concepts | 2K",
      gamePrice: "999",
      added: false,
      inWishlist: false,
      isDownloaded: false,
      filterBy: "top",
      gamepage: {
        foto: "https://cdn2.unrealengine.com/2ksmkt-nba2k21-epic-set-up-assets-std-cg-blog-share-image-1920x1080-1920x1080-d46c9713e326.jpg",
        descr:
          "NBA 2K21 is the latest release in the world-renowned, best-selling NBA 2K series. With exciting improvements upon its best-in-class gameplay, competitive and community online features, and deep, varied game modes, NBA 2K21 offers one-of-a-kind immersion into all facets of NBA basketball and culture - where Everything is Game.",
      },
    },
    {
      id: 21,
      gamePhoto:
        "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_SpacePunks_FlyingWildHog_S2_1200x1600-5bbc069923d3cd8e671f54de01451030?h=854&resize=1&w=640",
      gameName: "Space Punks",
      developer: "Flying Wild Hog | Jagex",
      gamePrice: "Soon",
      added: false,
      inWishlist: false,
      isDownloaded: false,
      filterBy: "soon",
      gamepage: {
        foto: "https://news-cdn.softpedia.com/images/news2/space-punks-is-a-top-down-co-op-looter-shooter-with-borderlands-like-visuals-533421-2.jpg",
        descr:
          "Space Punks is a wild rollercoaster you'll not want to end. Fly solo or gang up with up to three misfits to take on challenging missions in a bombastic campaign. Harness plunder from missions to upgrade your arsenal and become the ultimate galactic badass.",
      },
    },
    {
      id: 22,
      gamePhoto:
        "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_WRC10FIAWorldRallyChampionship_KTRacing_S2_1200x1600-f1f76e27c255d020f2994932289b3a69?h=854&resize=1&w=640",
      gameName: "WRC 10 FIA World Rally Championship",
      developer: "KT Racing | Nacon",
      gamePrice: "Soon",
      added: false,
      inWishlist: false,
      isDownloaded: false,
      filterBy: "soon",
      gamepage: {
        foto: "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_WRC10FIAWorldRallyChampionship_KTRacing_S1_2560x1440-dc491a3d734c4137a223f2c85f422ba7?h=270&resize=1&w=480",
        descr:
          "Hailed by the community, the standard-setting off-road racing simulation has been reinvented! Reach the 2021 season podium, and to celebrate the 50th anniversary of the WRC, relive the highlights at the wheel of legendary cars. Rise to the challenge!",
      },
    },
    {
      id: 23,
      gamePhoto:
        "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_FORECLOSED_AntabStudio_S2_1200x1600-3497dd80dc1735d2618bb06aa39898b8?h=854&resize=1&w=640",
      gameName: "FORECLOSED",
      developer: "Antab Studio | Merge Games",
      gamePrice: "Soon",
      added: false,
      inWishlist: false,
      isDownloaded: false,
      filterBy: "soon",
      gamepage: {
        foto: "https://image.api.playstation.com/vulcan/ap/rnd/202102/0413/7fMrqMRpa7i7pcSg2Qtkqgyh.jpg",
        descr:
          "FORECLOSED is a narrative-driven action-adventure set in a Cyberpunk world filled with action, suspense and experimental augmentations. Follow the story of Evan Kapnos in this comic book styled game as he unravels the conspiracy behind his identity foreclosure.",
      },
    },
    {
      id: 24,
      gamePhoto:
        "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_UnboundWorldsApart_AlienPixelStudios_S2_1200x1600-b4fd283611b08ef8e958da956191727e?h=854&resize=1&w=640",
      gameName: "Unbound: Worlds Apart",
      developer: "Alien Pixel Studios | Alien Pixel Studios",
      gamePrice: "Soon",
      added: false,
      inWishlist: false,
      isDownloaded: false,
      filterBy: "soon",
      gamepage: {
        foto: "https://cdn2.unrealengine.com/egs-unboundworldsapart-alienpixelstudios-s1-2560x1440-e1fada62b20d.jpg",
        descr:
          "Summon portals to overcome vicious beasts, devious puzzles and fiendish platforming challenges. Master the unique powers of each portal to stop the collapse of reality, while exploring lush, hand-drawn worlds and unraveling a deep narrative full of mysteries.",
      },
    },
    {
      id: 25,
      gamePhoto:
        "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_TheAnacrusis_StrayBombay_S2_1200x1600-bc5415bbf463a81cee61980f10b4d91c?h=854&resize=1&w=640",
      gameName: "The Anacrusis",
      developer: "Stray Bombay Company | Stray Bombay Company",
      gamePrice: "Soon",
      added: false,
      inWishlist: false,
      isDownloaded: false,
      filterBy: "soon",
      gamepage: {
        foto: "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_TheAnacrusis_StrayBombay_S1_2560x1440-c427a338676fb344c16c3865ed2deb84?h=270&resize=1&w=480",
        descr:
          "The Anacrusis is a four-player, co-op first-person shooter set aboard a starship stranded at the edge of explored space. Team up with your friends in an infinitely-replayable fight against alien hordes and unlock perks, weapons, and new ways to play!",
      },
    },
    {
      id: 26,
      gamePhoto:
        "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_Obduction_CyanInc_S2_1200x1600-7a12b5dfb5998545f1b285e1647be99b?h=854&resize=1&w=640",
      gameName: "Obduction",
      developer: "Cyan, Inc. | Cyan, Inc.",
      gamePrice: "Soon",
      added: false,
      inWishlist: false,
      isDownloaded: false,
      filterBy: "no",
      gamepage: {
        foto: "https://cdn2.unrealengine.com/egs-obduction-cyaninc-s1-2560x1440-1c67b2b44d5f.jpg",
        descr:
          "A sci-fi adventure from Cyan, the creators of Myst. Abducted far across the universe, you find yourself on a broken alien landscape with odd pieces of Earth. Explore, uncover, solve, and find a way to make it home.",
      },
      temporarilyFree: [
        {
          start: {
            month: "August",
            day: 1,
            time: "18:00",
          },
          end: {
            month: "August",
            day: 14,
            time: "18:00",
          },
        },
      ],
    },
    {
      id: 27,
      gamePhoto:
        "https://cdn1.epicgames.com/epic/offer/EGS_MohawkGames_OffworldTradingCompany_S4-510x680-5c715e53a4447c2dc5429fc0c76d74f6.jpg?h=854&resize=1&w=640",
      gameName: "Offworld Trading Company",
      developer: "Mohawk Games | Stardock Entertainment",
      gamePrice: "379",
      added: false,
      inWishlist: false,
      isDownloaded: false,
      filterBy: "no",
      gamepage: {
        foto: "https://cdn1.epicgames.com/e8882546f28e4832af823c646aed232e/offer/otc-marketcorrectionsdlc-landscape-img-2560x1440-39f48eebb446bc317a9072e51ac80943.jpg",
        descr:
          "Mars has been colonized, and Earth's corporate titans fight to dominate this new market. Competition is fierce in this fast-paced economic RTS from Civilization IV Lead Designer, Soren Johnson.",
      },
      temporarilyFree: [
        {
          start: {
            month: "August",
            day: 1,
            time: "18:00",
          },
          end: {
            month: "August",
            day: 14,
            time: "18:00",
          },
        },
      ],
    },
  ],
  isWishlistEmpty: true,
  language: "en",
  view: "card",
  status: "main",
};

const rewriteGames = (updatedGames) => {
  database.games = updatedGames;
  const games = database.games;
  return games;
};

// -------------
// GET ALL GAMES
// -------------

app.get("/games", (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
  let games = database.games;
  let isWishlistEmpty = database.isWishlistEmpty;
  res.status(200).send({
    games,
    isWishlistEmpty,
  });
  console.log("sent");
});

// ------------------
// STORE API CALLS
// ------------------

app.get("/store/status", (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
  let status = database.status;
  res.status(200).send({
    status,
  });
});

app.post("/store/status", (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
  const newStatus = req.body.status;
  const status = (database.status = newStatus);
  res.status(200).send({
    status,
  });
});

// -----------------
// LIBRARY API CALLS
// -----------------

app.post("/game/addtolibrary", (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
  const { gameId } = req.body;
  let updatedGames = database.games.map((game) => {
    if (game["id"] == gameId) {
      return { ...game, added: true };
    }
    return game;
  });
  console.log(updatedGames);
  // games = updatedGames;
  let games = rewriteGames(updatedGames);
  res.status(200).send({
    games,
  });
});

app.post("/game/removefromlibrary", (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
  const { gameId } = req.body;
  let updatedGames = database.games.map((game) => {
    if (game["id"] == gameId) {
      return { ...game, added: false };
    }
    return game;
  });
  console.log(updatedGames);
  let games = rewriteGames(updatedGames);
  res.status(200).send({
    games,
  });
});

app.post("/game/download", (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
  const { gameId } = req.body;
  let updatedGames = database.games.map((game) => {
    if (game["id"] == gameId) {
      return { ...game, isDownloaded: true };
    }
    return game;
  });
  console.log(updatedGames);
  let games = rewriteGames(updatedGames);
  res.status(200).send({
    games,
  });
});

app.post("/game/delete", (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
  const { gameId } = req.body;
  let updatedGames = database.games.map((game) => {
    if (game["id"] == gameId) {
      return { ...game, isDownloaded: false };
    }
    return game;
  });
  console.log(updatedGames);
  let games = rewriteGames(updatedGames);
  res.status(200).send({
    games,
  });
});

app.get("/library/view", (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
  let view = database.view;
  console.log(view);
  res.status(200).send({
    view,
  });
});

app.put("/library/view", (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
  const view = req.body.text;
  database.view = view;
  console.log(view);
  res.status(200).send({
    view,
  });
});

// ------------------
// WISHLIST API CALLS
// ------------------

app.post("/game/addtowishlist", (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
  const { gameId } = req.body;
  let updatedGames = database.games.map((game) => {
    if (game["id"] == gameId) {
      return { ...game, inWishlist: true };
    }
    return game;
  });
  let isWishlistEmpty = (database.isWishlistEmpty = false);
  console.log(database.isWishlistEmpty);
  let games = rewriteGames(updatedGames);
  res.status(200).send({
    games,
    isWishlistEmpty,
  });
});

app.post("/game/removefromwishlist", (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
  const { gameId } = req.body;
  console.log(gameId);
  let updatedGames = database.games.map((game) => {
    if (game["id"] == gameId) {
      return { ...game, inWishlist: false };
    }
    return game;
  });
  if (database.games.filter((add) => add.inWishlist).length == 1) {
    var isWishlistEmpty = (database.isWishlistEmpty = true);
  } else {
    var isWishlistEmpty = (database.isWishlistEmpty = false);
  }
  console.log(updatedGames);
  let games = rewriteGames(updatedGames);
  res.status(200).send({
    games,
    isWishlistEmpty,
  });
});

// ------------------
// LANGUAGE API CALLS
// ------------------

app.get("/language", (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
  let lng = database.language;
  console.log(lng);
  res.status(200).send({
    lng,
  });
});

app.post("/language", (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
  const { language } = req.body;
  let lng = (database.language = language);
  console.log(lng);
  res.status(200).send({
    lng,
  });
});

if (process.env.NODE_ENV === "production") {
  app.use(express.static("./build"));
}

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
