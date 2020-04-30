const { Model, DataTypes } = require('sequelize');

class Categoria extends Model {
  
   static init(sequelize) {
      
      super.init({
         Nome_class: DataTypes.STRING,
      }, {
         sequelize
      })
   }
    static associate(models){
        this.hasMany(models.Medicamentos,{foreignKey:'medicamentos_id',as:'medicamentos'});    
    }
}

module.exports = Categoria;