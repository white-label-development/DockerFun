// app.js
const express = require('express')

const app = express()

const port = process.env.PORT

app.get('/', (req, res) => res.send('nodemon (finally) running ok. we can change from volume, yay!'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
