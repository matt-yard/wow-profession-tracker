import axios from 'axios';

//function to fetch skill tiers
const fetchSkillTiers = async (professionId) => {
  const { data } = await axios.get(`/professions/${professionId}/skilltiers`);
  return data;
};

//function to get all recipes with a given profession id and skill tier id
const fetchRecipes = async (profId, skillTierId) => {
  const { data } = await axios.get(
    `/professions/${profId}/skilltiers/${skillTierId}`
  );
  return data;
};

//function to fetch an individual recipe materials
const fetchMaterials = async (recipeId) => {
  const { data } = await axios.get(`/recipes/${recipeId}`);
  return data;
};

//function to fetch AH for given realm id
const fetchAuctionPrices = async (realmId) => {
  const { data } = await axios.get(`/auctions/${realmId}`);
  return data;
};

//function to search AH response for a given item id to get the price
const searchPrices = () => {};

//main function
// loops over each recipe
// searches AH for current price of crafted item
// searches AH for price of materials
//bundles into an object looking like:
const exampleObj = {
  craftedItem: 'Elixir of Something',
  sellPrice: 100,
  materials: [
    {
      name: 'Herb',
      quantity: 5,
      pricePer: 10,
    },
    {
      name: 'Vial',
      quantity: 1,
      pricePer: 1,
    },
  ],
  cogs: 51,
  profit: 49,
  margin: 0.49,
};
