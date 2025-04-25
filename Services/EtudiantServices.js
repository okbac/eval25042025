const { } = require("sequelize");
const Etudiant = require('../Models/Etudiant');

class EtudiantServices {
async getAllEtudiant() {
return await Etudiant.findAll(); 
}

async getEtudiantById(id) {
    return await Etudiant.findByPk(id);
    }

async addEtudiant(Etudiant) {
    return await Etudiant.create(Etudiant);
    }

    async updateEtudiant(id, formation) { 
        return await Etudiant.update(Etudiant, { where: {
        id_Etudiant: id } }); 
        }

        async deleteEtudiant(id) { 
            return await Etudiant.destroy({ where: {
            id_Etudiant: id } }); 
            }
}
module.exports = new EtudiantServices();