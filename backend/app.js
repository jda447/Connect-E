const { Sequelize } = require('sequelize');
const express = require('express');

const app = express();

app.use((req, res) => {
    res.json({ message: 'Your request was successful!' }); 
});

const sequelize = new Sequelize('database', 'username', 'password', {
    host: 'localhost',
    dialect: 'postgres',
    port: 5432,
    database: 'GroupomaniaDB',
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