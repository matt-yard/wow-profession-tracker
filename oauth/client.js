const {ClientCredentials} = require("simple-oauth2")

const config = {
  client: {
    id: process.env.CLIENT_ID,
    secret: process.env.CLIENT_SECRET
  },
  auth: {
    tokenHost: "https://us.battle.net/"
  }
}

module.exports = new ClientCredentials(config)

