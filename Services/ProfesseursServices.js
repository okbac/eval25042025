const { } = require("sequelize");
const Professeurs = require('../Models/Professeurs');

class ProfesseursService {
async getAllProfesseurs() {
return await Professeurs.findAll(); 
}

async getProfesseursById(id) {
    return await Professeurs.findByPk(id);
    }

async addProfesseurs(Professeurs) {
    return await Professeurs.create(Professeurs);
    }

    async updateProfesseurs(id, formation) { 
        return await Professeurs.update(Professeurs, { where: {
        id_Professeurs: id } }); 
        }

        async deleteProfesseurs(id) { 
            return await Professeurs.destroy({ where: {
            id_Professeurs: id } }); 
            }
}
module.exports = new ProfesseursService();