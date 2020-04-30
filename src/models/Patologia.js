const { Model, DataTypes } = require('sequelize');

class Patologia extends Model {
  
   static init(sequelize) {
      
      super.init({
         name: DataTypes.STRING,
      }, {
         sequelize,
         tableName: 'patologia',
      })
   }
   static associate(models){
      this.belongsToMany(models.Medicamentos ,{foreignKey:'patologia_id',through:'patologias_medicamentos',as:'medicamentos'});
 }
}

module.exports = Patologia;