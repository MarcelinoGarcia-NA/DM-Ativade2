'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.createTable('medicamentos', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
     },

     name: {
        type: Sequelize.STRING,
        allowNull: false,
     },
     codBarras:{
        type: Sequelize.STRING,
        allowNull: false,
     }
    });
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.dropTable('medicamentos');
  }
};
