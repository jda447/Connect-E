const { Sequelize } = require('sequelize');
require('dotenv').config();
const express = require('express');
const app = express();

app.use(express.json());

app.use((req, res) => {
  res.json({ message: 'Your request was successful!' }); 
});

const sequelize = new Sequelize(process.env.POSTGRES_URI)
try {
  sequelize.authenticate();
  console.log('Connection to GroupomaniaDB has been established successfully.');
  return sequelize;
} catch (error) {
  console.error('Unable to connect to the database:', error);
}

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});

module.exports = app;