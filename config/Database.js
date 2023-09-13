const { Sequelize } = require('sequelize');

const db = new Sequelize('encodeco_lms', 'encodeco_lms', '%Dilum%1234Test', {
  host: 'encode99.com.lk',
  dialect: 'mysql'
});

module.exports = db;

