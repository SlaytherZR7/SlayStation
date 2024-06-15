const { DataTypes } = require('sequelize');
const sequelize = require('../config/database'); // Asegúrate de configurar tu conexión a la base de datos aquí

const User = sequelize.define('User', {
  name: { type: DataTypes.STRING, allowNull: false },
  lastname: { type: DataTypes.STRING, allowNull: false },
  nickname: { type: DataTypes.STRING, allowNull: false, unique: true  },
  phone: { type: DataTypes.STRING, unique: true  },
  email: { type: DataTypes.STRING, allowNull: false, unique: true },
  password: { type: DataTypes.STRING, allowNull: false },
  typeUser: { type: DataTypes.STRING, allowNull: false }
}, {
  // opciones adicionales
});

module.exports = User;
