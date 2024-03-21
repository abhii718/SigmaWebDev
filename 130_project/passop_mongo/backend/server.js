
const express = require('express')
require('dotenv').config()
const app = express()
// console.log(process.env.MONGO_URI) // remove this after you've confirmed it is working
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello fjs World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
}) 