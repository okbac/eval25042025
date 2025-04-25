const { Model, DataTypes } = require('sequelize');
const sequelize = require('../Config/sequelize');

class Etudiant extends Model {}

Etudiant.init( 
{
id_Etudiant: { 
type: DataTypes.INTEGER,
primaryKey: true, 
autoIncrement: true, 
allowNull: false,
},
nom: {
type: DataTypes.STRING(50),
allowNull: false,
},
Cour_suivi: {
    type: DataTypes.STRING(50),
    allowNull: false,
},

id_Professeurs: {
    type: DataTypes.INTEGER,
    allowNull: true,
    references: {
      model: 'Professeurs',
      key: 'id_Professeurs'
    }
},
},



{
sequelize, 
modelName: 'Etudiant', 
tableName: 'Etudiant', 
timestamps: false,
} 
);
module.exports = Etudiant;
