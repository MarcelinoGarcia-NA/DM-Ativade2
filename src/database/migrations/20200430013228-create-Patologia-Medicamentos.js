'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.createTable('patologias_medicamentos', { 

        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
          allowNull: false,
       },

       patologia_id:{
          type:Sequelize.INTEGER,
          allowNull:false,
          references:{model:'patologia',key:'id'},
          onUptade:'CASCADE',
          onDelete:'CASCADE',
       
        },
        medicamentos_id:{
          type:Sequelize.INTEGER,
          allowNull:false,
          references:{model:'medicamentos',key:'id'},
          onUptade:'CASCADE',
          onDelete:'CASCADE',
       
        }
      });
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.dropTable('patologias_medicamentos');
  }
};
