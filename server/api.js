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

router.use((req, res, next) => {
  const error = new Error('Not Found');
  error.status = 404;
  next(error);
});
