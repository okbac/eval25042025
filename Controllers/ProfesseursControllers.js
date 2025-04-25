const ProfesseursServices = require("../Services/ProfesseursServices");

class ProfesseursControllers {
  async getAllProfesseurs(req, res) {
    try {
      // on declare le try
      const Professeurs = await ProfesseursServices.getAllProfesseurs();

      res.json(Professeurs);
    } catch (error) {
      // on declare le catch
      console.log(error); // on affiche l'erreur dans la
      console;
      res.status(500); // on declare le status 500
      res.json({ error: "Erreur lors de la récupération des Professeurs" });
      // on renvoie l'erreur au format json
    }
  }

  async getProfesseursById(req, res) {
    try {
      // on declare le try
      const Professeurs = await ProfesseursServices.getProfesseursById(
        req.params.id
      );

      if (!Professeurs) {
        // si la formation n'existe pas
        return res.status(404).json({ error: "Professeurs non trouvée" });
        // on renvoie l'erreur au format json
      }
      res.json(Professeurs);
      // on renvoie la formation au format json
    } catch (error) {
      // on declare le catch
      console.log(error); // on affiche l'erreur dans la
      console;
      res.status(500); // on declare le status 500
      res.json({ error: "Erreur lors de la récupération du professeurs" });
    }
  }

  async addProfesseurs(req, res) {
    try { // on declare le try
    const Professeurs = await
    ProfesseursServices.addProfesseurs(req.body);
   
    res.status(201).json(Professeurs);
    // on renvoie la formation au format json
    } catch (error) { // on declare le catch
    console.log(error); // on affiche l'erreur dans la
    console
    res.status(500); // on declare le status 500
    res.json({ error: 'Erreur lors de l\'ajout de la Professeurs' });
    // on renvoie l'erreur au format json
    }
    }

    async updateProfesseurs(req, res) {
        try { // on declare le try
        const Professeurs = await
        ProfesseursServices.updateProfesseurs(req.params.id, req.body);
        
        if (!Professeurs) { // si la formation n'existe pas
        return res.status(404).json({ error:
        'Professseurs non trouvée' });
        // on renvoie l'erreur au format json
        }
        res.json(Professeurs);
        // on renvoie la formation au format json
        } catch (error) { // on declare le catch
        console.log(error); // on affiche l'erreur dans la
        console
        res.status(500); // on declare le status 500
        res.json({ error: 'Erreur lors de la mise à jour du professeur' });
        // on renvoie l'erreur au format json
        }
        }

        async deleteProfesseurs(req, res) { 
            try { // on declare le try
            const Professeurs = await
            ProfesseursServices.deleteProfesseurs(req.params.id);
        
            if (!Professeurs) { // si la formation n'existe pas
            return res.status(404).json({ error:
            'Professeurs non trouvée' });
            // on renvoie l'erreur au format json
            }
            res.json({ message: 'Professeurs supprimée avec succès' });
            // on renvoie le message de succes au format json
            } catch (error) { // on declare le catch
            console.log(error); // on affiche l'erreur dans la
            console
            res.status(500); // on declare le status 500
            res.json({ error: 'Erreur lors de la suppression de la Professeurs' });
            // on renvoie l'erreur au format json
            }
            }
}
module.exports = new ProfesseursControllers();
