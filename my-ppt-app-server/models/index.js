const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './database.sqlite',
});

const Slide = sequelize.define('Slide', {
  content: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
});

sequelize.sync();

module.exports = { Slide };
