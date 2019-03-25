require('dotenv').config()

/*
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
}*/

parseFunction = function (funcStr) {
    const funcReg = /function *\(([^()]*)\)[ \n\t]*{(.*)}/gmi;
    const match = funcReg.exec(funcStr.replace(/\n/g, ' '));
    if(match) { return new Function(match[1].split(','), match[2]); }
    return null;
};

const data = {
    'temp': '54'
}

const template = [
    {
        
    }
];

const modifierStr = `
    function(rawValue) { 
        return rawValue;
    }
`;

const modifierCleaned = modifierStr.replace(/[^\x20-\x7E]/gmi, '')
const modifier = parseFunction(modifierCleaned);

try {
    const params = [3,4];
    const result = modifier(...params);
    console.log(result);
} catch (e) { }