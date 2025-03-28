const express = require('express')
const app = express()
const port = 3000

const userroute = require("./src/routes/userroute");

app.use(express.json()); // Middleware to parse JSON
app.use("/api", userroute); // Prefix all routes with "/api"



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})