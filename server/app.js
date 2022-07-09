const express = require("express")
const path = require("path")
const morgan = require("morgan")
const client = require("../oauth/client.js")

const app = express()

app.use(express.json())
app.use(morgan("dev"))

app.get("/", (req,res) => {
  res.sendFile(path.join(__dirname, "..", "public/index.html"))
})

app.use(express.static(path.join(__dirname, "..", "public")))

app.use("/api", require("./api.js"))

// error handling endware
app.use((err, req, res, next) => {
  console.error(err);
  console.error(err.stack);
  res.status(err.status || 500).send(err.message || "Internal server error.");
});

module.exports = async () => {
  await client.getToken()
  return app
}
