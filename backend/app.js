const { Sequelize } = require('sequelize');
require('dotenv').config();
const express = require('express');
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const userRoutes = require('./routes/user');
app.use('/api/auth', userRoutes);

const path = require('path');
app.use('/images', express.static(path.join(__dirname, 'images')));

const sequelize = new Sequelize(process.env.POSTGRES_URI, {
  logging: console.log
});

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