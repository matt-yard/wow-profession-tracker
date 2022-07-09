const router = require('express').Router();
const client = require('../oauth/client.js');
const axios = require('axios');

module.exports = router;
//mounted on /api
router.get('/professions', async (req, res, next) => {
  try {
    const {
      token: { access_token },
    } = await client.getToken();
    const headers = { Authorization: `Bearer ${access_token}` };
    const { data } = await axios.get(
      `https://us.api.blizzard.com/data/wow/profession/index?namespace=static-us&locale=en_US&access_token=${access_token}`
    );
    res.send(data);
  } catch (error) {
    next(error);
  }
});

router.get('/professions/:id/icon', async (req, res, next) => {
  try {
    const {
      token: { access_token },
    } = await client.getToken();
    const { id } = req.params;
    const { data } = await axios.get(
      `https://us.api.blizzard.com/data/wow/media/profession/${id}?namespace=static-us&locale=en_US&access_token=${access_token}`
    );
    res.send(data);
  } catch (error) {
    next(error);
  }
});

router.get('/professions/:id/skilltiers', async (req, res, next) => {
  try {
    const {
      token: { access_token },
    } = await client.getToken();
    const { data } = await axios.get(
      `https://us.api.blizzard.com/data/wow/profession/${req.params.id}?namespace=static-us&locale=en_US&access_token=${access_token}`
    );
    let skillTiers = data.skill_tiers.map((tier) => {
      return { name: tier.name, id: tier.id };
    });

    res.send(skillTiers);
  } catch (error) {
    next(error);
  }
});

router.get('/professions/:id/skilltiers/:skillId', async (req, res, next) => {
  try {
    const {
      token: { access_token },
    } = await client.getToken();
    const { data } = await axios.get(
      `https://us.api.blizzard.com/data/wow/profession/${req.params.id}/skill-tier/${req.params.skillId}?namespace=static-us&locale=en_US&access_token=${access_token}`
    );

    let allRecipes = [];

    for (const category of data.categories) {
      const recipeObj = { category: category.name, recipes: [] };
      for (const recipe of category.recipes) {
        recipeObj.recipes.push({ name: recipe.name, id: recipe.id });
      }
      allRecipes.push(recipeObj);
    }
    res.send(allRecipes);
  } catch (error) {
    next(error);
  }
});

router.get('/recipes/:id', async (req, res, next) => {
  try {
    const {
      token: { access_token },
    } = await client.getToken();
    const { data } = await axios.get(
      `https://us.api.blizzard.com/data/wow/recipe/${req.params.id}?namespace=static-us&locale=en_US&access_token=${access_token}`
    );
    const recipeObj = {
      name: data.name,
      recipeId: data.id,
      itemId: data.crafted_item.id,
      reagents: [],
      craftedQuantity: data.crafted_quantity.value,
    };

    for (const reagent of data.reagents) {
      recipeObj.reagents.push({
        name: reagent.reagent.name,
        id: reagent.reagent.id,
        quantity: reagent.quantity,
      });
    }
    res.send(recipeObj);
  } catch (error) {
    next(error);
  }
});

router.get('/realms', async (req, res, next) => {
  try {
    const {
      token: { access_token },
    } = await client.getToken();
    const { data } = await axios.get(
      `https://us.api.blizzard.com/data/wow/search/connected-realm?namespace=dynamic-us&status.type=UP&realms.timezone=America%2FNew_York&orderby=id&_page=1&access_token=${access_token}`
    );

    const realms = [];
    for (const result of data.results) {
      for (const realm of result.data.realms) {
        realms.push({ name: realm.name.en_US, id: result.data.id });
      }
    }

    res.send(realms);
  } catch (error) {
    next(error);
  }
});

router.get('/auctions/:realmId', async (req, res, next) => {
  try {
    const {
      token: { access_token },
    } = await client.getToken();

    const { data } = await axios.get(
      `https://us.api.blizzard.com/data/wow/connected-realm/${req.params.realmId}/auctions?namespace=dynamic-us&locale=en_US&access_token=${access_token}`
    );
    res.send(data.auctions);
  } catch (error) {
    next(error);
  }
});

router.use((req, res, next) => {
  const error = new Error('Not Found');
  error.status = 404;
  next(error);
});
