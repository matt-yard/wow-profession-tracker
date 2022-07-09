import axios from 'axios';

const dummyProfessions = [
  {
    key: {
      href: 'https://us.api.blizzard.com/data/wow/profession/202?namespace=static-9.2.5_43810-us',
    },
    name: 'Engineering',
    id: 202,
    iconUrl:
      'https://render.worldofwarcraft.com/us/icons/56/trade_engineering.jpg',
  },
  {
    key: {
      href: 'https://us.api.blizzard.com/data/wow/profession/393?namespace=static-9.2.5_43810-us',
    },
    name: 'Skinning',
    id: 393,
    iconUrl:
      'https://render.worldofwarcraft.com/us/icons/56/inv_misc_pelt_wolf_01.jpg',
  },
  {
    key: {
      href: 'https://us.api.blizzard.com/data/wow/profession/164?namespace=static-9.2.5_43810-us',
    },
    name: 'Blacksmithing',
    id: 164,
    iconUrl:
      'https://render.worldofwarcraft.com/us/icons/56/trade_blacksmithing.jpg',
  },
  {
    key: {
      href: 'https://us.api.blizzard.com/data/wow/profession/333?namespace=static-9.2.5_43810-us',
    },
    name: 'Enchanting',
    id: 333,
    iconUrl:
      'https://render.worldofwarcraft.com/us/icons/56/trade_engraving.jpg',
  },
  {
    key: {
      href: 'https://us.api.blizzard.com/data/wow/profession/182?namespace=static-9.2.5_43810-us',
    },
    name: 'Herbalism',
    id: 182,
    iconUrl:
      'https://render.worldofwarcraft.com/us/icons/56/trade_herbalism.jpg',
  },
  {
    key: {
      href: 'https://us.api.blizzard.com/data/wow/profession/794?namespace=static-9.2.5_43810-us',
    },
    name: 'Archaeology',
    id: 794,
    iconUrl:
      'https://render.worldofwarcraft.com/us/icons/56/trade_archaeology.jpg',
  },
  {
    key: {
      href: 'https://us.api.blizzard.com/data/wow/profession/186?namespace=static-9.2.5_43810-us',
    },
    name: 'Mining',
    id: 186,
    iconUrl: 'https://render.worldofwarcraft.com/us/icons/56/inv_pick_02.jpg',
  },
  {
    key: {
      href: 'https://us.api.blizzard.com/data/wow/profession/197?namespace=static-9.2.5_43810-us',
    },
    name: 'Tailoring',
    id: 197,
    iconUrl:
      'https://render.worldofwarcraft.com/us/icons/56/trade_tailoring.jpg',
  },
  {
    key: {
      href: 'https://us.api.blizzard.com/data/wow/profession/773?namespace=static-9.2.5_43810-us',
    },
    name: 'Inscription',
    id: 773,
    iconUrl:
      'https://render.worldofwarcraft.com/us/icons/56/inv_inscription_tradeskill01.jpg',
  },
  {
    key: {
      href: 'https://us.api.blizzard.com/data/wow/profession/185?namespace=static-9.2.5_43810-us',
    },
    name: 'Cooking',
    id: 185,
    iconUrl:
      'https://render.worldofwarcraft.com/us/icons/56/inv_misc_food_15.jpg',
  },
  {
    key: {
      href: 'https://us.api.blizzard.com/data/wow/profession/356?namespace=static-9.2.5_43810-us',
    },
    name: 'Fishing',
    id: 356,
    iconUrl: 'https://render.worldofwarcraft.com/us/icons/56/trade_fishing.jpg',
  },
  {
    key: {
      href: 'https://us.api.blizzard.com/data/wow/profession/165?namespace=static-9.2.5_43810-us',
    },
    name: 'Leatherworking',
    id: 165,
    iconUrl:
      'https://render.worldofwarcraft.com/us/icons/56/trade_leatherworking.jpg',
  },
  {
    key: {
      href: 'https://us.api.blizzard.com/data/wow/profession/171?namespace=static-9.2.5_43810-us',
    },
    name: 'Alchemy',
    id: 171,
    iconUrl: 'https://render.worldofwarcraft.com/us/icons/56/trade_alchemy.jpg',
  },
  {
    key: {
      href: 'https://us.api.blizzard.com/data/wow/profession/755?namespace=static-9.2.5_43810-us',
    },
    name: 'Jewelcrafting',
    id: 755,
    iconUrl:
      'https://render.worldofwarcraft.com/us/icons/56/inv_misc_gem_01.jpg',
  },
  {
    key: {
      href: 'https://us.api.blizzard.com/data/wow/profession/2777?namespace=static-9.2.5_43810-us',
    },
    name: 'Soul Cyphering',
    id: 2777,
    iconUrl:
      'https://render.worldofwarcraft.com/us/icons/56/sha_spell_warlock_demonsoul.jpg',
  },
  {
    key: {
      href: 'https://us.api.blizzard.com/data/wow/profession/2811?namespace=static-9.2.5_43810-us',
    },
    name: 'Stygia Crafting',
    id: 2811,
    iconUrl:
      'https://render.worldofwarcraft.com/us/icons/56/inv_blacksmithing_815_khazgorianhammer.jpg',
  },
  {
    key: {
      href: 'https://us.api.blizzard.com/data/wow/profession/2787?namespace=static-9.2.5_43810-us',
    },
    name: 'Abominable Stitching',
    id: 2787,
    iconUrl:
      'https://render.worldofwarcraft.com/us/icons/56/sanctum_features_buildabom.jpg',
  },
  {
    key: {
      href: 'https://us.api.blizzard.com/data/wow/profession/2791?namespace=static-9.2.5_43810-us',
    },
    name: 'Ascension Crafting',
    id: 2791,
    iconUrl:
      'https://render.worldofwarcraft.com/us/icons/56/inv_mace_1h_bastionquest_b_01.jpg',
  },
  {
    key: {
      href: 'https://us.api.blizzard.com/data/wow/profession/2819?namespace=static-9.2.5_43810-us',
    },
    name: 'Protoform Synthesis',
    id: 2819,
    iconUrl:
      'https://render.worldofwarcraft.com/us/icons/56/inv_progenitor_protoformsynthesis.jpg',
  },
];

const dummyRealms = [
  { name: 'Stormrage', id: 60 },
  { name: "Zul'jin", id: 61 },
  { name: 'Durotan', id: 63 },
  { name: 'Ysera', id: 63 },
  { name: 'Bloodhoof', id: 64 },
  { name: 'Duskwood', id: 64 },
  { name: 'Elune', id: 67 },
  { name: 'Laughing Skull', id: 67 },
  { name: 'Auchindoun', id: 67 },
  { name: "Cho'gall", id: 67 },
  { name: 'Gilneas', id: 67 },
  { name: 'Arthas', id: 69 },
  { name: 'Warsong', id: 71 },
  { name: 'Gorgonnash', id: 71 },
  { name: 'The Forgotten Coast', id: 71 },
  { name: 'Balnazzar', id: 71 },
  { name: 'Alterac Mountains', id: 71 },
  { name: 'Undermine', id: 71 },
  { name: 'Anvilmar', id: 71 },
  { name: 'Bleeding Hollow', id: 73 },
  { name: 'Argent Dawn', id: 75 },
  { name: 'The Scryers', id: 75 },
  { name: 'Magtheridon', id: 78 },
  { name: 'Anetheron', id: 78 },
  { name: 'Ysondre', id: 78 },
  { name: 'Altar of Storms', id: 78 },
  { name: 'Eonar', id: 96 },
  { name: 'Skullcrusher', id: 96 },
  { name: "Gul'dan", id: 96 },
  { name: 'Zuluhed', id: 96 },
  { name: 'Ursin', id: 96 },
  { name: 'Andorhal', id: 96 },
  { name: 'Black Dragonflight', id: 96 },
  { name: 'Velen', id: 96 },
  { name: 'Scilla', id: 96 },
  { name: 'Llane', id: 99 },
  { name: 'Arygos', id: 99 },
  { name: 'Earthen Ring', id: 100 },
  { name: 'Firetree', id: 127 },
  { name: "Drak'Tharon", id: 127 },
  { name: 'Rivendare', id: 127 },
  { name: 'Vashj', id: 127 },
  { name: 'Spirestone', id: 127 },
  { name: 'Malorne', id: 127 },
  { name: 'Frostwolf', id: 127 },
  { name: 'Stormscale', id: 127 },
  { name: 'Trollbane', id: 1175 },
  { name: 'Grizzly Hills', id: 1175 },
  { name: 'Malfurion', id: 1175 },
  { name: 'Lothar', id: 1175 },
  { name: "Kael'thas", id: 1175 },
  { name: 'Gnomeregan', id: 1175 },
  { name: 'Moonrunner', id: 1175 },
  { name: 'Ghostlands', id: 1175 },
  { name: 'Area 52', id: 3676 },
  { name: 'Thrall', id: 3678 },
  { name: 'Dalaran', id: 3683 },
  { name: 'Turalyon', id: 3685 },
];

const professionBlackList = {
  Archaeology: true,
  'Soul Cyphering': true,
  'Stygia Crafting': true,
  'Abominable Stitching': true,
  'Ascension Crafting': true,
  'Protoform Synthesis': true,
};

export const fetchProfessions = async () => {
  if (dummyProfessions.length) {
    return dummyProfessions.filter((prof) => {
      console.log(!professionBlackList[prof.name]);
      return !professionBlackList[prof.name];
    });
  }
  const { data } = await axios.get('/api/professions');
  let professions = await Promise.all(
    data.professions.map((item) => fetchProfessionIcon(item))
  );

  let filteredProfessions = professions.filter((prof) => {
    console.log(!professionBlackList[prof.name]);
    return !professionBlackList[prof.name];
  });
  return filteredProfessions;
};

const fetchProfessionIcon = async (item) => {
  const { data } = await axios.get(`/api/professions/${item.id}/icon`);
  item.iconUrl = data.assets[0].value;
  return item;
};

export const fetchRealms = async () => {
  if (dummyRealms.length) {
    return dummyRealms;
  }
  const { data } = await axios.get('/api/realms');
  return data;
};
