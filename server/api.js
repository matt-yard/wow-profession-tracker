const router = require("express").Router()
const client = require("../oauth/client.js");
const axios = require("axios")

module.exports = router
//mounted on /api
router.get("/professions", async (req, res, next) => {
  try {
    const {token: {access_token}} = await client.getToken()
    const headers = {Authorization: `Bearer ${access_token}`}
    const {data} = await axios.get(`https://us.api.blizzard.com/data/wow/profession/index?namespace=static-us&locale=en_US&access_token=${access_token}`)
    res.send(data)
  } catch (error) {
    next(error)
  }
})



router.use((req, res, next) => {
  const error = new Error("Not Found");
  error.status = 404;
  next(error);
});
