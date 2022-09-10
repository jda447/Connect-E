const { Sequelize } = require('sequelize');
const express = require('express');
require('dotenv').config();

const app = express();

app.use((req, res) => {
    res.json({ message: 'Your request was successful!' }); 
});

const sequelize = new Sequelize('database', 'username', 'password', {
    postgres: {
      options: {
        host: 'localhost',
        dialect: 'postgres',
        port: 5432,
        database: process.env.DB_DATABASE,
        username: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,
        logging: (...msg) => console.log(msg)
      }
    }
});

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});

try {
  sequelize.authenticate();
  console.log('Connection to GroupomaniaDB has been established successfully.');
} catch (error) {
  console.error('Unable to connect to the database:', error);
}

module.exports = app;