const Sequelize = require('sequelize');
const db = require('../config/Database.js');

const { DataTypes } = Sequelize;

const Salarypresent = db.define('salarypresents', {
  firstname: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  lastname: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  age: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  gender: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  freezeTableName: true
});

module.exports = Salarypresent;

(async () => {
  await db.sync();
})();
