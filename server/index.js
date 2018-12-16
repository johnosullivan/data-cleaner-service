require('dotenv').config()

const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const { authentication } = require('./routes'); 

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

authentication(app);

const server = app.listen(process.env.PORT, () => { });

function shutdown() { server.close(); }

module.exports = {
    server,
    shutdown
}