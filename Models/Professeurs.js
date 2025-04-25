const { Model, DataTypes } = require('sequelize');
const sequelize = require('../Config/sequelize');

class Professeurs extends Model {}

Professeurs.init( 
{
id_Professeurs: { 
type: DataTypes.INTEGER,
primaryKey: true, 
autoIncrement: true, 
allowNull: false,
},
nom: {
type: DataTypes.STRING(50),
allowNull: false,
},
cour_enseigner: {
type: DataTypes.STRING(50),
allowNull: false,
},
},


{
sequelize, 
modelName: 'Professeurs', 
tableName: 'Professeurs', 
timestamps: false,
} 
);
module.exports = Professeurs;
