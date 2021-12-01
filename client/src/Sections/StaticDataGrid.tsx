import DataGrid from '../Components/DataGrid/DataGrid';
import React from 'react';

/**
 * This is an example of how the data
 * grid component can be used statically with just an array of objects
 */
function StaticDataGrid() {
  const data = [
    {
      API: 'AdoptAPet',
      Description: 'Resource to help get pets adopted',
      Auth: 'apiKey',
      HTTPS: true,
      Cors: 'yes',
      Link: 'https://www.adoptapet.com/public/apis/pet_list.html',
      Category: 'Animals'
    },
    {
      API: 'Axolotl',
      Description: 'Collection of axolotl pictures and facts',
      Auth: '',
      HTTPS: true,
      Cors: 'yes',
      Link: 'https://theaxolotlapi.netlify.app/',
      Category: 'Animals'
    },
    {
      API: 'Cat Facts',
      Description: 'Daily cat facts',
      Auth: '',
      HTTPS: true,
      Cors: 'no',
      Link: 'https://alexwohlbruck.github.io/cat-facts/',
      Category: 'Animals'
    },
    {
      API: 'Cataas',
      Description: 'Cat as a service (cats pictures and gifs)',
      Auth: '',
      HTTPS: true,
      Cors: 'no',
      Link: 'https://cataas.com/',
      Category: 'Animals'
    },
    {
      API: 'catAPI',
      Description: 'Random pictures of cats',
      Auth: '',
      HTTPS: true,
      Cors: 'yes',
      Link: 'https://thatcopy.pw/catapi',
      Category: 'Animals'
    },
    {
      API: 'Cats',
      Description: 'Pictures of cats from Tumblr',
      Auth: 'apiKey',
      HTTPS: true,
      Cors: 'no',
      Link: 'https://docs.thecatapi.com/',
      Category: 'Animals'
    },
    {
      API: 'Dog Facts',
      Description: 'Random dog facts',
      Auth: '',
      HTTPS: true,
      Cors: 'yes',
      Link: 'https://dukengn.github.io/Dog-facts-API/',
      Category: 'Animals'
    },
    {
      API: 'Dog Facts',
      Description: 'Random facts of Dogs',
      Auth: '',
      HTTPS: true,
      Cors: 'yes',
      Link: 'https://kinduff.github.io/dog-api/',
      Category: 'Animals'
    },
    {
      API: 'Dogs',
      Description: 'Based on the Stanford Dogs Dataset',
      Auth: '',
      HTTPS: true,
      Cors: 'yes',
      Link: 'https://dog.ceo/dog-api/',
      Category: 'Animals'
    },
    {
      API: 'eBird',
      Description: 'Retrieve recent or notable birding observations within a region',
      Auth: 'apiKey',
      HTTPS: true,
      Cors: 'unknown',
      Link: 'https://documenter.getpostman.com/view/664302/S1ENwy59',
      Category: 'Animals'
    },
    {
      API: 'FishWatch',
      Description: 'Information and pictures about individual fish species',
      Auth: '',
      HTTPS: true,
      Cors: 'unknown',
      Link: 'https://www.fishwatch.gov/developers',
      Category: 'Animals'
    },
    {
      API: 'HTTPCat',
      Description: 'Cat for every HTTP Status',
      Auth: '',
      HTTPS: true,
      Cors: 'yes',
      Link: 'https://http.cat/',
      Category: 'Animals'
    },
    {
      API: 'IUCN',
      Description: 'IUCN Red List of Threatened Species',
      Auth: 'apiKey',
      HTTPS: false,
      Cors: 'no',
      Link: 'http://apiv3.iucnredlist.org/api/v3/docs',
      Category: 'Animals'
    },
    {
      API: 'MeowFacts',
      Description: 'Get random cat facts',
      Auth: '',
      HTTPS: true,
      Cors: 'unknown',
      Link: 'https://github.com/wh-iterabb-it/meowfacts',
      Category: 'Animals'
    },
    {
      API: 'Movebank',
      Description: 'Movement and Migration data of animals',
      Auth: '',
      HTTPS: true,
      Cors: 'yes',
      Link: 'https://github.com/movebank/movebank-api-doc',
      Category: 'Animals'
    },
    {
      API: 'Petfinder',
      Description:
        'Petfinder is dedicated to helping pets find homes, another resource to get pets adopted',
      Auth: 'apiKey',
      HTTPS: true,
      Cors: 'yes',
      Link: 'https://www.petfinder.com/developers/',
      Category: 'Animals'
    },
    {
      API: 'PlaceBear',
      Description: 'Placeholder bear pictures',
      Auth: '',
      HTTPS: true,
      Cors: 'yes',
      Link: 'https://placebear.com/',
      Category: 'Animals'
    },
    {
      API: 'PlaceDog',
      Description: 'Placeholder Dog pictures',
      Auth: '',
      HTTPS: true,
      Cors: 'yes',
      Link: 'https://place.dog',
      Category: 'Animals'
    },
    {
      API: 'RandomCat',
      Description: 'Random pictures of cats',
      Auth: '',
      HTTPS: true,
      Cors: 'yes',
      Link: 'https://aws.random.cat',
      Category: 'Animals'
    },
    {
      API: 'RandomDog',
      Description: 'Random pictures of dogs',
      Auth: '',
      HTTPS: true,
      Cors: 'yes',
      Link: 'https://random.dog/woof.json',
      Category: 'Animals'
    },
    {
      API: 'RandomDuck',
      Description: 'Random pictures of ducks',
      Auth: '',
      HTTPS: true,
      Cors: 'no',
      Link: 'https://random-d.uk/api',
      Category: 'Animals'
    },
    {
      API: 'RandomFox',
      Description: 'Random pictures of foxes',
      Auth: '',
      HTTPS: true,
      Cors: 'no',
      Link: 'https://randomfox.ca/floof/',
      Category: 'Animals'
    },
    {
      API: 'RescueGroups',
      Description: 'Adoption',
      Auth: '',
      HTTPS: true,
      Cors: 'unknown',
      Link: 'https://userguide.rescuegroups.org/display/APIDG/API+Developers+Guide+Home',
      Category: 'Animals'
    },
    {
      API: 'Shibe.Online',
      Description: 'Random pictures of Shiba Inu, cats or birds',
      Auth: '',
      HTTPS: true,
      Cors: 'yes',
      Link: 'http://shibe.online/',
      Category: 'Animals'
    },
    {
      API: 'The Dog',
      Description:
        'A public service all about Dogs, free to use when making your fancy new App, Website or Service',
      Auth: 'apiKey',
      HTTPS: true,
      Cors: 'no',
      Link: 'https://thedogapi.com/',
      Category: 'Animals'
    },
    {
      API: 'AniAPI',
      Description: 'Anime discovery, streaming \u0026 syncing with trackers',
      Auth: 'OAuth',
      HTTPS: true,
      Cors: 'yes',
      Link: 'https://aniapi.com/docs/',
      Category: 'Anime'
    },
    {
      API: 'AniDB',
      Description: 'Anime Database',
      Auth: 'apiKey',
      HTTPS: false,
      Cors: 'unknown',
      Link: 'https://wiki.anidb.net/HTTP_API_Definition',
      Category: 'Anime'
    },
    {
      API: 'AniList',
      Description: 'Anime discovery \u0026 tracking',
      Auth: 'OAuth',
      HTTPS: true,
      Cors: 'unknown',
      Link: 'https://github.com/AniList/ApiV2-GraphQL-Docs',
      Category: 'Anime'
    },
    {
      API: 'AnimeChan',
      Description: 'Anime quotes (over 10k+)',
      Auth: '',
      HTTPS: true,
      Cors: 'no',
      Link: 'https://github.com/RocktimSaikia/anime-chan',
      Category: 'Anime'
    },
    {
      API: 'AnimeFacts',
      Description: 'Anime Facts (over 100+)',
      Auth: '',
      HTTPS: true,
      Cors: 'yes',
      Link: 'https://chandan-02.github.io/anime-facts-rest-api/',
      Category: 'Anime'
    },
    {
      API: 'AnimeNewsNetwork',
      Description: 'Anime industry news',
      Auth: '',
      HTTPS: true,
      Cors: 'yes',
      Link: 'https://www.animenewsnetwork.com/encyclopedia/api.php',
      Category: 'Anime'
    },
    {
      API: 'Danbooru Anime',
      Description: 'Thousands of anime artist database to find good anime art',
      Auth: 'apiKey',
      HTTPS: true,
      Cors: 'yes',
      Link: 'https://danbooru.donmai.us/wiki_pages/help:api',
      Category: 'Anime'
    },
    {
      API: 'Jikan',
      Description: 'Unofficial MyAnimeList API',
      Auth: '',
      HTTPS: true,
      Cors: 'yes',
      Link: 'https://jikan.moe',
      Category: 'Anime'
    },
    {
      API: 'Kitsu',
      Description: 'Anime discovery platform',
      Auth: 'OAuth',
      HTTPS: true,
      Cors: 'yes',
      Link: 'https://kitsu.docs.apiary.io/',
      Category: 'Anime'
    },
    {
      API: 'MangaDex',
      Description: 'Manga Database and Community',
      Auth: 'apiKey',
      HTTPS: true,
      Cors: 'unknown',
      Link: 'https://api.mangadex.org/docs.html',
      Category: 'Anime'
    },
    {
      API: 'Mangapi',
      Description: 'Translate manga pages from one language to another',
      Auth: 'apiKey',
      HTTPS: true,
      Cors: 'unknown',
      Link: 'https://rapidapi.com/pierre.carcellermeunier/api/mangapi3/',
      Category: 'Anime'
    },
    {
      API: 'MyAnimeList',
      Description: 'Anime and Manga Database and Community',
      Auth: 'OAuth',
      HTTPS: true,
      Cors: 'unknown',
      Link: 'https://myanimelist.net/clubs.php?cid=13727',
      Category: 'Anime'
    },
    {
      API: 'NekosBest',
      Description: 'Neko Images \u0026 Anime roleplaying GIFs',
      Auth: '',
      HTTPS: true,
      Cors: 'yes',
      Link: 'https://docs.nekos.best',
      Category: 'Anime'
    },
    {
      API: 'Shikimori',
      Description: 'Anime discovery, tracking, forum, rates',
      Auth: 'OAuth',
      HTTPS: true,
      Cors: 'unknown',
      Link: 'https://shikimori.one/api/doc',
      Category: 'Anime'
    },
    {
      API: 'Studio Ghibli',
      Description: 'Resources from Studio Ghibli films',
      Auth: '',
      HTTPS: true,
      Cors: 'yes',
      Link: 'https://ghibliapi.herokuapp.com',
      Category: 'Anime'
    },
    {
      API: 'Trace Moe',
      Description: 'A useful tool to get the exact scene of an anime from a screenshot',
      Auth: '',
      HTTPS: true,
      Cors: 'unknown',
      Link: 'https://soruly.github.io/trace.moe-api/#/',
      Category: 'Anime'
    },
    {
      API: 'Waifu.pics',
      Description: 'Image sharing platform for anime images',
      Auth: '',
      HTTPS: true,
      Cors: 'no',
      Link: 'https://waifu.pics/docs',
      Category: 'Anime'
    },
    {
      API: 'AbuseIPDB',
      Description: 'IP/domain/URL reputation',
      Auth: 'apiKey',
      HTTPS: true,
      Cors: 'unknown',
      Link: 'https://docs.abuseipdb.com/',
      Category: 'Anti-Malware'
    },
    {
      API: 'AlienVault Open Threat Exchange (OTX)',
      Description: 'IP/domain/URL reputation',
      Auth: 'apiKey',
      HTTPS: true,
      Cors: 'unknown',
      Link: 'https://otx.alienvault.com/api',
      Category: 'Anti-Malware'
    },
    {
      API: 'CAPEsandbox',
      Description: 'Malware execution and analysis',
      Auth: 'apiKey',
      HTTPS: true,
      Cors: 'unknown',
      Link: 'https://capev2.readthedocs.io/en/latest/usage/api.html',
      Category: 'Anti-Malware'
    },
    {
      API: 'Google Safe Browsing',
      Description: 'Google Link/Domain Flagging',
      Auth: 'apiKey',
      HTTPS: true,
      Cors: 'unknown',
      Link: 'https://developers.google.com/safe-browsing/',
      Category: 'Anti-Malware'
    },
    {
      API: 'MalDatabase',
      Description: 'Provide malware datasets and threat intelligence feeds',
      Auth: 'apiKey',
      HTTPS: true,
      Cors: 'unknown',
      Link: 'https://maldatabase.com/api-doc.html',
      Category: 'Anti-Malware'
    },
    {
      API: 'MalShare',
      Description: 'Malware Archive / file sourcing',
      Auth: 'apiKey',
      HTTPS: true,
      Cors: 'no',
      Link: 'https://malshare.com/doc.php',
      Category: 'Anti-Malware'
    },
    {
      API: 'MalwareBazaar',
      Description: 'Collect and share malware samples',
      Auth: 'apiKey',
      HTTPS: true,
      Cors: 'unknown',
      Link: 'https://bazaar.abuse.ch/api/',
      Category: 'Anti-Malware'
    },
    {
      API: 'Metacert',
      Description: 'Metacert Link Flagging',
      Auth: 'apiKey',
      HTTPS: true,
      Cors: 'unknown',
      Link: 'https://metacert.com/',
      Category: 'Anti-Malware'
    },
    {
      API: 'Phisherman',
      Description: 'IP/domain/URL reputation',
      Auth: 'apiKey',
      HTTPS: true,
      Cors: 'unknown',
      Link: 'https://phisherman.gg/',
      Category: 'Anti-Malware'
    },
    {
      API: 'Scanii',
      Description:
        'Simple REST API that can scan submitted documents/files for the presence of threats',
      Auth: 'apiKey',
      HTTPS: true,
      Cors: 'yes',
      Link: 'https://docs.scanii.com/',
      Category: 'Anti-Malware'
    },
    {
      API: 'URLhaus',
      Description: 'Bulk queries and Download Malware Samples',
      Auth: '',
      HTTPS: true,
      Cors: 'unknown',
      Link: 'https://urlhaus-api.abuse.ch/',
      Category: 'Anti-Malware'
    },
    {
      API: 'URLScan.io',
      Description: 'Scan and Analyse URLs',
      Auth: 'apiKey',
      HTTPS: true,
      Cors: 'unknown',
      Link: 'https://urlscan.io/about-api/',
      Category: 'Anti-Malware'
    },
    {
      API: 'VirusTotal',
      Description: 'VirusTotal File/URL Analysis',
      Auth: 'apiKey',
      HTTPS: true,
      Cors: 'unknown',
      Link: 'https://www.virustotal.com/en/documentation/public-api/',
      Category: 'Anti-Malware'
    },
    {
      API: 'Web of Trust',
      Description: 'IP/domain/URL reputation',
      Auth: 'apiKey',
      HTTPS: true,
      Cors: 'unknown',
      Link: 'https://support.mywot.com/hc/en-us/sections/360004477734-API-'
    },
    {
      API: 'Velib metropolis, Paris, France',
      Description: 'Velib Open Data API',
      Auth: '',
      HTTPS: true,
      Cors: 'no',
      Link: 'https://www.velib-metropole.fr/donnees-open-data-gbfs-du-service-velib-metropole',
      Category: 'Transportation'
    },
    {
      API: '1pt',
      Description: 'A simple URL shortener',
      Auth: '',
      HTTPS: true,
      Cors: 'yes',
      Link: 'https://github.com/1pt-co/api/blob/main/README.md',
      Category: 'URL Shorteners'
    },
    {
      API: 'Bitly',
      Description: 'URL shortener and link management',
      Auth: 'OAuth',
      HTTPS: true,
      Cors: 'unknown',
      Link: 'http://dev.bitly.com/get_started.html',
      Category: 'URL Shorteners'
    },
    {
      API: 'CleanURI',
      Description: 'URL shortener service',
      Auth: '',
      HTTPS: true,
      Cors: 'yes',
      Link: 'https://cleanuri.com/docs',
      Category: 'URL Shorteners'
    },
    {
      API: 'ClickMeter',
      Description: 'Monitor, compare and optimize your marketing links',
      Auth: 'apiKey',
      HTTPS: true,
      Cors: 'unknown',
      Link: 'https://support.clickmeter.com/hc/en-us/categories/201474986',
      Category: 'URL Shorteners'
    },
    {
      API: 'Clico',
      Description: 'URL shortener service',
      Auth: 'apiKey',
      HTTPS: true,
      Cors: 'unknown',
      Link: 'https://cli.com/swagger-ui/index.html?configUrl=/v3/api-docs/swagger-config',
      Category: 'URL Shorteners'
    },
    {
      API: 'Cutt.ly',
      Description: 'URL shortener service',
      Auth: 'apiKey',
      HTTPS: true,
      Cors: 'unknown',
      Link: 'https://cutt.ly/api-documentation/cuttly-links-api',
      Category: 'URL Shorteners'
    },
    {
      API: 'Drivet URL Shortener',
      Description: 'Shorten a long URL easily and fast',
      Auth: '',
      HTTPS: true,
      Cors: 'unknown',
      Link: 'https://wiki.drivet.xyz/en/url-shortener/add-links',
      Category: 'URL Shorteners'
    },
    {
      API: 'Git.io',
      Description: 'Git.io URL shortener',
      Auth: '',
      HTTPS: true,
      Cors: 'unknown',
      Link: 'https://github.blog/2011-11-10-git-io-github-url-shortener/',
      Category: 'URL Shorteners'
    },
    {
      API: 'GoTiny',
      Description:
        'A lightweight URL shortener, focused on ease-of-use for the developer and end-user',
      Auth: '',
      HTTPS: true,
      Cors: 'yes',
      Link: 'https://github.com/robvanbakel/gotiny-api',
      Category: 'URL Shorteners'
    },
    {
      API: 'Kutt',
      Description: 'Free Modern URL Shortener',
      Auth: 'apiKey',
      HTTPS: true,
      Cors: 'yes',
      Link: 'https://docs.kutt.it/',
      Category: 'URL Shorteners'
    },
    {
      API: 'Mgnet.me',
      Description: 'Torrent URL shorten API',
      Auth: '',
      HTTPS: true,
      Cors: 'no',
      Link: 'http://mgnet.me/api.html',
      Category: 'URL Shorteners'
    },
    {
      API: 'owo',
      Description: 'A simple link obfuscator/shortener',
      Auth: '',
      HTTPS: true,
      Cors: 'unknown',
      Link: 'https://owo.vc/api',
      Category: 'URL Shorteners'
    },
    {
      API: 'Rebrandly',
      Description: 'Custom URL shortener for sharing branded links',
      Auth: 'apiKey',
      HTTPS: true,
      Cors: 'unknown',
      Link: 'https://developers.rebrandly.com/v1/docs',
      Category: 'URL Shorteners'
    },
    {
      API: 'Short Link',
      Description: 'Short URLs support so many domains',
      Auth: '',
      HTTPS: true,
      Cors: 'unknown',
      Link: 'https://github.com/FayasNoushad/Short-Link-API',
      Category: 'URL Shorteners'
    },
    {
      API: 'Shrtcode',
      Description: 'URl Shortener with multiple Domains',
      Auth: '',
      HTTPS: true,
      Cors: 'yes',
      Link: 'https://shrtco.de/docs',
      Category: 'URL Shorteners'
    },
    {
      API: 'Shrtlnk',
      Description: 'Simple and efficient short link creation',
      Auth: 'apiKey',
      HTTPS: true,
      Cors: 'yes',
      Link: 'https://shrtlnk.dev/developer',
      Category: 'URL Shorteners'
    },
    {
      API: 'TinyURL',
      Description: 'Shorten long URLs',
      Auth: 'apiKey',
      HTTPS: true,
      Cors: 'no',
      Link: 'https://tinyurl.com/app/dev',
      Category: 'URL Shorteners'
    },
    {
      API: 'Zero Width Shortener',
      Description:
        'Shortens URLs using spaces that have zero width, making them invisible to humans',
      Auth: '',
      HTTPS: true,
      Cors: 'unknown',
      Link: 'https://docs.zws.im',
      Category: 'URL Shorteners'
    },
    {
      API: 'Brazilian Vehicles and Prices',
      Description: 'Vehicles information from Fundação Instituto de Pesquisas Econômicas - Fipe',
      Auth: '',
      HTTPS: true,
      Cors: 'unknown',
      Link: 'https://deividfortuna.github.io/fipe/',
      Category: 'Vehicle'
    },
    {
      API: 'Helipaddy sites',
      Description:
        'Helicopter and passenger drone landing site directory, Helipaddy data and much more',
      Auth: 'apiKey',
      HTTPS: true,
      Cors: 'unknown',
      Link: 'https://helipaddy.com/api/',
      Category: 'Vehicle'
    },
    {
      API: 'Kelley Blue Book',
      Description: 'Vehicle info, pricing, configuration, plus much more',
      Auth: 'apiKey',
      HTTPS: true,
      Cors: 'no',
      Link: 'http://developer.kbb.com/#!/data/1-Default',
      Category: 'Vehicle'
    },
    {
      API: 'Mercedes-Benz',
      Description:
        'Telematics data, remotely access vehicle functions, car configurator, locate service dealers',
      Auth: 'apiKey',
      HTTPS: true,
      Cors: 'no',
      Link: 'https://developer.mercedes-benz.com/apis',
      Category: 'Vehicle'
    },
    {
      API: 'NHTSA',
      Description: 'NHTSA Product Information Catalog and Vehicle Listing',
      Auth: '',
      HTTPS: true,
      Cors: 'unknown',
      Link: 'https://vpic.nhtsa.dot.gov/api/',
      Category: 'Vehicle'
    },
    {
      API: 'Smartcar',
      Description:
        'Lock and unlock vehicles and get data like odometer reading and location. Works on most new cars',
      Auth: 'OAuth',
      HTTPS: true,
      Cors: 'yes',
      Link: 'https://smartcar.com/docs/',
      Category: 'Vehicle'
    },
    {
      API: 'An API of Ice And Fire',
      Description: 'Game Of Thrones API',
      Auth: '',
      HTTPS: true,
      Cors: 'unknown',
      Link: 'https://anapioficeandfire.com/',
      Category: 'Video'
    },
    {
      API: 'Breaking Bad',
      Description: 'Breaking Bad API',
      Auth: '',
      HTTPS: true,
      Cors: 'unknown',
      Link: 'https://breakingbadapi.com/documentation',
      Category: 'Video'
    },
    {
      API: 'Breaking Bad Quotes',
      Description: 'Some Breaking Bad quotes',
      Auth: '',
      HTTPS: true,
      Cors: 'unknown',
      Link: 'https://github.com/shevabam/breaking-bad-quotes',
      Category: 'Video'
    },
    {
      API: 'Catalogopolis',
      Description: 'Doctor Who API',
      Auth: '',
      HTTPS: true,
      Cors: 'unknown',
      Link: 'https://api.catalogopolis.xyz/docs/',
      Category: 'Video'
    },
    {
      API: 'Catch The Show',
      Description: 'REST API for next-episode.net',
      Auth: '',
      HTTPS: true,
      Cors: 'unknown',
      Link: 'https://catchtheshow.herokuapp.com/api/documentation',
      Category: 'Video'
    },
    {
      API: 'Czech Television',
      Description: 'TV programme of Czech TV',
      Auth: '',
      HTTPS: false,
      Cors: 'unknown',
      Link: 'http://www.ceskatelevize.cz/xml/tv-program/',
      Category: 'Video'
    },
    {
      API: 'Dailymotion',
      Description: 'Dailymotion Developer API',
      Auth: 'OAuth',
      HTTPS: true,
      Cors: 'unknown',
      Link: 'https://developer.dailymotion.com/',
      Category: 'Video'
    },
    {
      API: 'Dune',
      Description:
        'A simple API which provides you with book, character, movie and quotes JSON data',
      Auth: '',
      HTTPS: true,
      Cors: 'yes',
      Link: 'https://github.com/ywalia01/dune-api',
      Category: 'Video'
    },
    {
      API: 'Final Space',
      Description: 'Final Space API',
      Auth: '',
      HTTPS: true,
      Cors: 'yes',
      Link: 'https://finalspaceapi.com/docs/',
      Category: 'Video'
    },
    {
      API: 'Game of Thrones Quotes',
      Description: 'Some Game of Thrones quotes',
      Auth: '',
      HTTPS: true,
      Cors: 'unknown',
      Link: 'https://gameofthronesquotes.xyz/',
      Category: 'Video'
    },
    {
      API: 'Harry Potter Charactes',
      Description: 'Harry Potter Characters Data with with imagery',
      Auth: '',
      HTTPS: true,
      Cors: 'unknown',
      Link: 'https://hp-api.herokuapp.com/',
      Category: 'Video'
    },
    {
      API: 'IMDb-API',
      Description: 'API for receiving movie, serial and cast information',
      Auth: 'apiKey',
      HTTPS: true,
      Cors: 'unknown',
      Link: 'https://imdb-api.com/',
      Category: 'Video'
    },
    {
      API: 'IMDbOT',
      Description: 'Unofficial IMDb Movie / Series Information',
      Auth: '',
      HTTPS: true,
      Cors: 'yes',
      Link: 'https://github.com/SpEcHiDe/IMDbOT',
      Category: 'Video'
    },
    {
      API: 'Lucifer Quotes',
      Description: 'Returns Lucifer quotes',
      Auth: '',
      HTTPS: true,
      Cors: 'unknown',
      Link: 'https://github.com/shadowoff09/lucifer-quotes',
      Category: 'Video'
    },
    {
      API: 'MCU Countdown',
      Description: 'A Countdown to the next MCU Film',
      Auth: '',
      HTTPS: true,
      Cors: 'yes',
      Link: 'https://github.com/DiljotSG/MCU-Countdown',
      Category: 'Video'
    },
    {
      API: 'Movie Quote',
      Description: 'Random Movie and Series Quotes',
      Auth: '',
      HTTPS: true,
      Cors: 'yes',
      Link: 'https://github.com/F4R4N/movie-quote/',
      Category: 'Video'
    },
    {
      API: 'Open Movie Database',
      Description: 'Movie information',
      Auth: 'apiKey',
      HTTPS: true,
      Cors: 'unknown',
      Link: 'http://www.omdbapi.com/',
      Category: 'Video'
    },
    {
      API: 'Ron Swanson Quotes',
      Description: 'Television',
      Auth: '',
      HTTPS: true,
      Cors: 'unknown',
      Link: 'https://github.com/jamesseanwright/ron-swanson-quotes#ron-swanson-quotes-api',
      Category: 'Video'
    },
    {
      API: 'Simkl',
      Description: 'Movie, TV and Anime data',
      Auth: 'apiKey',
      HTTPS: true,
      Cors: 'unknown',
      Link: 'https://simkl.docs.apiary.io',
      Category: 'Video'
    },
    {
      API: 'STAPI',
      Description: 'Information on all things Star Trek',
      Auth: '',
      HTTPS: false,
      Cors: 'no',
      Link: 'http://stapi.co',
      Category: 'Video'
    },
    {
      API: 'Stranger Things Quotes',
      Description: 'Returns Stranger Things quotes',
      Auth: '',
      HTTPS: true,
      Cors: 'unknown',
      Link: 'https://github.com/shadowoff09/strangerthings-quotes',
      Category: 'Video'
    },
    {
      API: 'Stream',
      Description: 'Czech internet television, films, series and online videos for free',
      Auth: '',
      HTTPS: true,
      Cors: 'no',
      Link: 'https://api.stream.cz/graphiql',
      Category: 'Video'
    },
    {
      API: 'SWAPI',
      Description: "All the Star Wars data you've ever wanted",
      Auth: '',
      HTTPS: true,
      Cors: 'yes',
      Link: 'https://swapi.dev/',
      Category: 'Video'
    },
    {
      API: 'SWAPI',
      Description: 'All things Star Wars',
      Auth: '',
      HTTPS: true,
      Cors: 'yes',
      Link: 'https://www.swapi.tech',
      Category: 'Video'
    },
    {
      API: 'SWAPI GraphQL',
      Description: 'Star Wars GraphQL API',
      Auth: '',
      HTTPS: true,
      Cors: 'unknown',
      Link: 'https://graphql.org/swapi-graphql',
      Category: 'Video'
    },
    {
      API: 'The Lord of the Rings',
      Description: 'The Lord of the Rings API',
      Auth: 'apiKey',
      HTTPS: true,
      Cors: 'unknown',
      Link: 'https://the-one-api.dev/',
      Category: 'Video'
    },
    {
      API: 'The Vampire Diaries',
      Description: 'TV Show Data',
      Auth: 'apiKey',
      HTTPS: true,
      Cors: 'yes',
      Link: 'https://vampire-diaries-api.netlify.app/',
      Category: 'Video'
    },
    {
      API: 'ThronesApi',
      Description: 'Game Of Thrones Characters Data with imagery',
      Auth: '',
      HTTPS: true,
      Cors: 'unknown',
      Link: 'https://thronesapi.com/',
      Category: 'Video'
    },
    {
      API: 'TMDb',
      Description: 'Community-based movie data',
      Auth: 'apiKey',
      HTTPS: true,
      Cors: 'unknown',
      Link: 'https://www.themoviedb.org/documentation/api',
      Category: 'Video'
    },
    {
      API: 'TrailerAddict',
      Description: 'Easily embed trailers from TrailerAddict',
      Auth: 'apiKey',
      HTTPS: false,
      Cors: 'unknown',
      Link: 'https://www.traileraddict.com/trailerapi',
      Category: 'Video'
    },
    {
      API: 'Trakt',
      Description: 'Movie and TV Data',
      Auth: 'apiKey',
      HTTPS: true,
      Cors: 'yes',
      Link: 'https://trakt.tv/b/api-docs',
      Category: 'Video'
    },
    {
      API: 'TVDB',
      Description: 'Television data',
      Auth: 'apiKey',
      HTTPS: true,
      Cors: 'unknown',
      Link: 'https://api.thetvdb.com/swagger',
      Category: 'Video'
    },
    {
      API: 'TVMaze',
      Description: 'TV Show Data',
      Auth: '',
      HTTPS: false,
      Cors: 'unknown',
      Link: 'http://www.tvmaze.com/api',
      Category: 'Video'
    },
    {
      API: 'uNoGS',
      Description:
        'Unofficial Netflix Online Global Search, Search all netflix regions in one place',
      Auth: 'apiKey',
      HTTPS: true,
      Cors: 'yes',
      Link: 'https://rapidapi.com/unogs/api/unogsng',
      Category: 'Video'
    },
    {
      API: 'Utelly',
      Description: 'Movies, Series and TV shows Recommendations',
      Auth: 'apiKey',
      HTTPS: true,
      Cors: 'unknown',
      Link: 'https://rapidapi.com/utelly/api/utelly',
      Category: 'Video'
    },
    {
      API: 'Vimeo',
      Description: 'Vimeo Developer API',
      Auth: 'OAuth',
      HTTPS: true,
      Cors: 'unknown',
      Link: 'https://developer.vimeo.com/',
      Category: 'Video'
    },
    {
      API: 'Watchmode',
      Description: 'API for finding out the streaming availability of movies \u0026 shows',
      Auth: 'apiKey',
      HTTPS: true,
      Cors: 'unknown',
      Link: 'https://api.watchmode.com/',
      Category: 'Video'
    },
    {
      API: 'YouTube',
      Description: 'Add YouTube functionality to your sites and apps',
      Auth: 'OAuth',
      HTTPS: true,
      Cors: 'unknown',
      Link: 'https://developers.google.com/youtube/',
      Category: 'Video'
    },
    {
      API: '7Timer!',
      Description: 'Weather, especially for Astroweather',
      Auth: '',
      HTTPS: false,
      Cors: 'unknown',
      Link: 'http://www.7timer.info/doc.php?lang=en',
      Category: 'Weather'
    },
    {
      API: 'AccuWeather',
      Description: 'Weather and forecast data',
      Auth: 'apiKey',
      HTTPS: false,
      Cors: 'unknown',
      Link: 'https://developer.accuweather.com/apis',
      Category: 'Weather'
    },
    {
      API: 'Aemet',
      Description: 'Weather and forecast data from Spain',
      Auth: 'apiKey',
      HTTPS: true,
      Cors: 'unknown',
      Link: 'https://opendata.aemet.es/centrodedescargas/inicio',
      Category: 'Weather'
    },
    {
      API: 'apilayer weatherstack',
      Description: 'Real-Time \u0026 Historical World Weather Data API',
      Auth: 'apiKey',
      HTTPS: true,
      Cors: 'unknown',
      Link: 'https://weatherstack.com/',
      Category: 'Weather'
    },
    {
      API: 'APIXU',
      Description: 'Weather',
      Auth: 'apiKey',
      HTTPS: true,
      Cors: 'unknown',
      Link: 'https://www.apixu.com/doc/request.aspx',
      Category: 'Weather'
    },
    {
      API: 'AQICN',
      Description: 'Air Quality Index Data for over 1000 cities',
      Auth: 'apiKey',
      HTTPS: true,
      Cors: 'unknown',
      Link: 'https://aqicn.org/api/',
      Category: 'Weather'
    },
    {
      API: 'AviationWeather',
      Description: 'NOAA aviation weather forecasts and observations',
      Auth: '',
      HTTPS: true,
      Cors: 'unknown',
      Link: 'https://www.aviationweather.gov/dataserver',
      Category: 'Weather'
    },
    {
      API: 'ColorfulClouds',
      Description: 'Weather',
      Auth: 'apiKey',
      HTTPS: true,
      Cors: 'yes',
      Link: 'https://open.caiyunapp.com/ColorfulClouds_Weather_API',
      Category: 'Weather'
    },
    {
      API: 'Euskalmet',
      Description: 'Meteorological data of the Basque Country',
      Auth: 'apiKey',
      HTTPS: true,
      Cors: 'unknown',
      Link: 'https://opendata.euskadi.eus/api-euskalmet/-/api-de-euskalmet/',
      Category: 'Weather'
    },
    {
      API: 'Foreca',
      Description: 'Weather',
      Auth: 'OAuth',
      HTTPS: true,
      Cors: 'unknown',
      Link: 'https://developer.foreca.com',
      Category: 'Weather'
    },
    {
      API: 'HG Weather',
      Description: 'Provides weather forecast data for cities in Brazil',
      Auth: 'apiKey',
      HTTPS: true,
      Cors: 'yes',
      Link: 'https://hgbrasil.com/status/weather',
      Category: 'Weather'
    },
    {
      API: 'Hong Kong Obervatory',
      Description: 'Provide weather information, earthquake information, and climate data',
      Auth: '',
      HTTPS: true,
      Cors: 'unknown',
      Link: 'https://www.hko.gov.hk/en/abouthko/opendata_intro.htm',
      Category: 'Weather'
    },
    {
      API: 'MetaWeather',
      Description: 'Weather',
      Auth: '',
      HTTPS: true,
      Cors: 'no',
      Link: 'https://www.metaweather.com/api/',
      Category: 'Weather'
    },
    {
      API: 'Meteorologisk Institutt',
      Description: 'Weather and climate data',
      Auth: 'User-Agent',
      HTTPS: true,
      Cors: 'unknown',
      Link: 'https://api.met.no/weatherapi/documentation',
      Category: 'Weather'
    },
    {
      API: 'Micro Weather',
      Description: 'Real time weather forecasts and historic data',
      Auth: 'apiKey',
      HTTPS: true,
      Cors: 'unknown',
      Link: 'https://m3o.com/weather/api',
      Category: 'Weather'
    },
    {
      API: 'ODWeather',
      Description: 'Weather and weather webcams',
      Auth: '',
      HTTPS: false,
      Cors: 'unknown',
      Link: 'http://api.oceandrivers.com/static/docs.html',
      Category: 'Weather'
    },
    {
      API: 'Oikolab',
      Description:
        '70+ years of global, hourly historical and forecast weather data from NOAA and ECMWF',
      Auth: 'apiKey',
      HTTPS: true,
      Cors: 'yes',
      Link: 'https://docs.oikolab.com',
      Category: 'Weather'
    },
    {
      API: 'Open-Meteo',
      Description: 'Global weather forecast API for non-commercial use',
      Auth: '',
      HTTPS: true,
      Cors: 'yes',
      Link: 'https://open-meteo.com/',
      Category: 'Weather'
    },
    {
      API: 'openSenseMap',
      Description: 'Data from Personal Weather Stations called senseBoxes',
      Auth: '',
      HTTPS: true,
      Cors: 'yes',
      Link: 'https://api.opensensemap.org/',
      Category: 'Weather'
    },
    {
      API: 'OpenUV',
      Description: 'Real-time UV Index Forecast',
      Auth: 'apiKey',
      HTTPS: true,
      Cors: 'unknown',
      Link: 'https://www.openuv.io',
      Category: 'Weather'
    },
    {
      API: 'OpenWeatherMap',
      Description: 'Weather',
      Auth: 'apiKey',
      HTTPS: true,
      Cors: 'unknown',
      Link: 'https://openweathermap.org/api',
      Category: 'Weather'
    },
    {
      API: 'QWeather',
      Description: 'Location-based weather data',
      Auth: 'apiKey',
      HTTPS: true,
      Cors: 'yes',
      Link: 'https://dev.qweather.com/en/',
      Category: 'Weather'
    },
    {
      API: 'RainViewer',
      Description: 'Radar data collected from different websites across the Internet',
      Auth: '',
      HTTPS: true,
      Cors: 'unknown',
      Link: 'https://www.rainviewer.com/api.html',
      Category: 'Weather'
    },
    {
      API: 'SimpleWeather',
      Description: 'Simple tool for get current weather',
      Auth: 'apiKey',
      HTTPS: true,
      Cors: 'yes',
      Link: 'https://english.api.rakuten.net/mxrck/api/simple-weather/endpoints',
      Category: 'Weather'
    },
    {
      API: 'Storm Glass',
      Description: 'Global marine weather from multiple sources',
      Auth: 'apiKey',
      HTTPS: true,
      Cors: 'yes',
      Link: 'https://stormglass.io/',
      Category: 'Weather'
    },
    {
      API: 'Tomorrow',
      Description: 'Weather API Powered by Proprietary Technology',
      Auth: 'apiKey',
      HTTPS: true,
      Cors: 'unknown',
      Link: 'https://docs.tomorrow.io',
      Category: 'Weather'
    },
    {
      API: 'Troposphere',
      Description: 'Global weather and climate data',
      Auth: 'apiKey',
      HTTPS: true,
      Cors: 'yes',
      Link: 'https://www.troposphere.io/developer',
      Category: 'Weather'
    },
    {
      API: 'US Weather',
      Description: 'US National Weather Service',
      Auth: '',
      HTTPS: true,
      Cors: 'yes',
      Link: 'https://www.weather.gov/documentation/services-web-api',
      Category: 'Weather'
    },
    {
      API: 'Visual Crossing',
      Description: 'Global historical and weather forecast data',
      Auth: 'apiKey',
      HTTPS: true,
      Cors: 'yes',
      Link: 'https://www.visualcrossing.com/weather-api',
      Category: 'Weather'
    },
    {
      API: 'weather-api',
      Description: 'A RESTful free API to check the weather',
      Auth: '',
      HTTPS: true,
      Cors: 'no',
      Link: 'https://github.com/robertoduessmann/weather-api',
      Category: 'Weather'
    },
    {
      API: 'WeatherAPI',
      Description: 'Weather API with other stuff like Astronomy and Geolocation API',
      Auth: 'apiKey',
      HTTPS: true,
      Cors: 'yes',
      Link: 'https://www.weatherapi.com/',
      Category: 'Weather'
    },
    {
      API: 'Weatherbit',
      Description: 'Weather',
      Auth: 'apiKey',
      HTTPS: true,
      Cors: 'unknown',
      Link: 'https://www.weatherbit.io/api',
      Category: 'Weather'
    },
    {
      API: 'Yahoo Weather',
      Description: 'Weather API from Yahoo',
      Auth: 'OAuth',
      HTTPS: true,
      Cors: 'unknown',
      Link: 'https://developer.yahoo.com/weather/',
      Category: 'Weather'
    },
    {
      API: 'Yandex.Weather',
      Description: 'Assesses weather condition in specific locations',
      Auth: 'apiKey',
      HTTPS: true,
      Cors: 'no',
      Link: 'https://yandex.com/dev/weather/',
      Category: 'Weather'
    }
  ];
  return <DataGrid data={data} />;
}

export default StaticDataGrid;
