require("dotenv").config()
const getApp = require("./app.js")

const PORT = process.env.PORT || 3030;

const init = async () => {
  const app = await getApp()
  app.listen(PORT, () => console.log(`Mixing it up on port ${PORT}`))
}

init()
