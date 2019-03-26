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

let data = {
    'temp': '1,2,3,2,1,5,3,2,5,4,3,2,3,5,3,2,3,4,5,3,3'
}

clean = (rawData) => {
    return rawData.replace(/[^\x20-\x7E]/gmi, '').trim();
};

const template = [
    {
        'keyValue': 'temp',
        'mapKey': 'temperature',
        'inputType': 'string',
        'ouputType': 'string',
        'modifier' : clean(`
            function(rawValue) { 
                return rawValue;
            }
        `)
    }
];

processValue = (rawValue, inputType, ouputType) => {
    let value = 0;
    try {
        switch (ouputType) {
            case 'int':
                value = parseInt(rawValue);
                break;
            case 'string':
                value = String(rawValue);
                break;
            case 'array':
                value = rawValue.split(',');
                break;
            
            default:
                break;
        }
    } catch (e) { }
    return value;
};

processRequest = (template, rawData) => {
    console.log(template);

    let data = { };
    for (item of template) {
        const { keyValue, inputType, ouputType } = item;
        try {
            if (keyValue && inputType && ouputType) {
                let value = processValue(rawData[keyValue], inputType, ouputType);
                
                if (item.modifier) {
                    try {
                        const modifier = parseFunction(item.modifier);
                        value = modifier(...[value]);
                    } catch (e) { 
                        console.error(e);
                    }
                }

                if (item.mapKey) {
                    data[item.mapKey] = value;
                } else {
                    data[keyValue] = value;
                } 
            }
        } catch (e) {
            console.error(e);
        }
    }
    return data;
};

const x = processRequest(template,data);

console.log(x);

/*
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
} catch (e) { }*/
