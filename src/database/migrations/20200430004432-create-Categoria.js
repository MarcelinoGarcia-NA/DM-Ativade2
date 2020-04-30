'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
  
      return queryInterface.createTable('categorias', { 
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
          allowNull: false,
       },
  
       name: {
          type: Sequelize.STRING,
          allowNull: false,
       }

      });
      
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.dropTable('categorias');
  }
};