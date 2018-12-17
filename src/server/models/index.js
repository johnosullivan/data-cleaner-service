'use strict';

require('dotenv').config()

const Sequelize = require('sequelize');
const fs = require('fs');
const path = require('path');
const sequelizeConfiguration = require('./../configurations/sequelize');
const BASENAME = path.basename(__filename);

let db = {};
let sequelize;

const configuration = sequelizeConfiguration[process.env.NODE_ENV];

sequelize = new Sequelize(
    configuration.database,
    configuration.username,
    configuration.password,
    configuration
);

fs.readdirSync(__dirname).filter(file => {
    return (file.indexOf('.') !== 0) && (file !== BASENAME) && (file.slice(-3) === '.js');
}).forEach(file => {
    var model = sequelize['import'](path.join(__dirname, file));
    db[model.name] = model;
});

Object.keys(db).forEach(modelName => {
    if (db[modelName].associate) {
        db[modelName].associate(db);
    }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;