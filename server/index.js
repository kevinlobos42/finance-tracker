const express = require('express')
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser')
require('dotenv').config();

const port = 4000;

app.use(bodyParser.json())
app.use(cors())

app.get('/', (req, res) => {
    res.send('Hello World')
})

app.listen(port, () => {
    console.log(`listening on port ${port}...`)
})
