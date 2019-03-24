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

if (typeof String.prototype.parseFunction != 'function') {
    String.prototype.parseFunction = function () {
        var funcReg = /function *\(([^()]*)\)[ \n\t]*{(.*)}/gmi;
        var match = funcReg.exec(this.replace(/\n/g, ' '));

        if(match) {
            return new Function(match[1].split(','), match[2]);
        }

        return null;
    };
}

const s = `
function(s) { 
    if (s > 10) { 
        console.log('a'); 
    } else { 
        console.log('b'); 
    } 
}
`;
let sss = s.replace(/[^\x20-\x7E]/gmi, "")

console.log(sss);

var func = sss.parseFunction();

func(3)
func(32)
