const express = require('express');
const app = express();
const { Sequelize } = require('sequelize');
require('dotenv').config();
const path = require('path');

const userRoutes = require('./routes/user');
const postRoutes = require('./routes/posts');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

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

app.use('/images', express.static(path.join(__dirname, 'images')));
app.use('/api/user', userRoutes);
app.use('/api/posts', postRoutes);

module.exports = router;