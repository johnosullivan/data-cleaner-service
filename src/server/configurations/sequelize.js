require('dotenv').config();

const SEQUELIZE_DIALECT = 'postgres';
const SEQUELIZE_LOGGING = false;
const SEQUELIZE_MIGRATION_STORAGE = 'sequelize';
const SEQUELIZE_MIGRATION_STORAGE_TABLE_NAME = 'migrations';
const SEQUELIZE_OPERATORS_ALIASES = false;
const SEQUELIZE_SEEDER_STORAGE = 'sequelize';
const SEQUELIZE_SEEDER_STORAGE_TABLE_NAME = 'seeders';

const sequelizeBaseConfiguration = {
  database: process.env.POSTGRES_DATABASE,
  dialect: SEQUELIZE_DIALECT,
  host: process.env.POSTGRES_HOST,
  logging: SEQUELIZE_LOGGING,
  migrationStorage: SEQUELIZE_MIGRATION_STORAGE,
  migrationStorageTableName: SEQUELIZE_MIGRATION_STORAGE_TABLE_NAME,
  operatorsAliases: SEQUELIZE_OPERATORS_ALIASES,
  port: process.env.POSTGRES_PORT,
  seederStorage: SEQUELIZE_SEEDER_STORAGE,
  seederStorageTableName: SEQUELIZE_SEEDER_STORAGE_TABLE_NAME,
  username: process.env.POSTGRES_USERNAME,
};

module.exports = {
  development: {
    ...sequelizeBaseConfiguration,
    logging: true,
    password: process.env.POSTGRES_PASSWORD
  },
  test: {
    ...sequelizeBaseConfiguration,
    host: process.env.POSTGRES_HOST_TEST,
    logging: false,
    password: process.env.POSTGRES_PASSWORD
  },
  production: {
    ...sequelizeBaseConfiguration,
    logging: false,
    password: process.env.POSTGRES_PASSWORD
  }
};