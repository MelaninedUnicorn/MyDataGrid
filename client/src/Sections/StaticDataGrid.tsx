import DataGrid from '../Components/DataGrid/DataGrid';
import React from 'react';

/**
 * This is an example of how the data grid component can be used statically
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
    }
  ];
  return <DataGrid title={'List of some public APIs'} data={data} />;
}

export default StaticDataGrid;
