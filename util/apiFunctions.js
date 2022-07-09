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

export const fetchProfessions = async () => {
  if (dummyProfessions.length) {
    return dummyProfessions;
  }
  const { data } = await axios.get('/api/professions');
  let professions = await Promise.all(
    data.professions.map((item) => fetchProfessionIcon(item))
  );
  return professions;
};

const fetchProfessionIcon = async (item) => {
  const { data } = await axios.get(`/api/professions/${item.id}/icon`);
  item.iconUrl = data.assets[0].value;
  return item;
};
