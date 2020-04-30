const { Model, DataTypes } = require('sequelize');

class Medicamentos extends Model {
  
   static init(sequelize) {
      
      super.init({
         name: DataTypes.STRING,
         codBarras: DataTypes.STRING,
      }, {
         sequelize
      })
   }
   static associate(models){
      this.belongsTo(models.Categoria ,{foreignKey:'categorias_id',as:'categorias'});
      this.belongsToMany(models.Patologia ,{foreignKey:'patologia_id',as:'patologia'});
 }
}

module.exports = Medicamentos;