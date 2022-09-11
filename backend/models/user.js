const {DataTypes} = require('sequelize');

module.exports = (sequelize) => {
  const User = sequelize.define('User', {
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      isEmail: true
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      len: [6,20],
    }
  }, {
  freezeTableName: true
});

  User.sync({ alter: true })
}