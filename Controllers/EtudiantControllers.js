const EtudiantServices = require("../Services/EtudiantServices");

class EtudiantControllers {
  async getAllEtudiant(req, res) {
    try {
      // on declare le try
      const Etudiant = await EtudiantServices.getAllEtudiant();

      res.json(Etudiant);
    } catch (error) {
      // on declare le catch
      console.log(error); // on affiche l'erreur dans la
      console;
      res.status(500); // on declare le status 500
      res.json({ error: "Erreur lors de la récupération des Professeurs" });
      // on renvoie l'erreur au format json
    }
  }

  async getEtudiantById(req, res) {
    try {
      // on declare le try
      const Etudiant = await EtudiantServices.getEtudiantById(
        req.params.id
      );

      if (!Etudiant) {
        // si la formation n'existe pas
        return res.status(404).json({ error: "Etudiant non trouvée" });
        // on renvoie l'erreur au format json
      }
      res.json(Etudiant);
      // on renvoie la formation au format json
    } catch (error) {
      // on declare le catch
      console.log(error); // on affiche l'erreur dans la
      console;
      res.status(500); // on declare le status 500
      res.json({ error: "Erreur lors de la récupération du professeurs" });
    }
  }

  async addEtudiant(req, res) {
    try { // on declare le try
    const Etudiant = await
    EtudiantService.addEtudiant(req.body);
   
    res.status(201).json(Etudiant);
    // on renvoie la formation au format json
    } catch (error) { // on declare le catch
    console.log(error); // on affiche l'erreur dans la
    console
    res.status(500); // on declare le status 500
    res.json({ error: 'Erreur lors de l\'ajout de la Professeurs' });
    // on renvoie l'erreur au format json
    }
    }

    async updateEtudiant(req, res) {
        try { // on declare le try
        const Etudiant = await
        EtudiantServices.updateEtudiant(req.params.id, req.body);
        
        if (!Etudiant) { // si la formation n'existe pas
        return res.status(404).json({ error:
        'Professseurs non trouvée' });
        // on renvoie l'erreur au format json
        }
        res.json(Etudiant);
        // on renvoie la formation au format json
        } catch (error) { // on declare le catch
        console.log(error); // on affiche l'erreur dans la
        console
        res.status(500); // on declare le status 500
        res.json({ error: 'Erreur lors de la mise à jour du professeur' });
        // on renvoie l'erreur au format json
        }
        }

        async deleteEtudiant(req, res) { 
            try { // on declare le try
            const Etudiant = await
            EtudiantServices.deleteEtudiant(req.params.id);
        
            if (!Etudiant) { // si la formation n'existe pas
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
module.exports = new EtudiantControllers();