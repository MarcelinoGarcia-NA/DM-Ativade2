const Sequelize = require('sequelize');
const dbConfig = require('../config/database');
const Medicamentos= require('../models/Medicamentos');
const Categorias=require('../models/Categoria');
const Patologia=require('../models/Patologia');

const connection = new Sequelize(dbConfig);

Medicamentos.init(connection);
Categorias.init(connection);
Patologia.init(connection);

Medicamentos.associate(connection.models);
Categorias.associate(connection.models);
Patologia.associate(connection.models);

module.exports = connection;