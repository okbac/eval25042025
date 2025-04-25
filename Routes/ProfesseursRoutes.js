const express = require('express');
// on importe express
const router = express.Router();
// on declare le router
const ProfesseursControllers =
require('../Controllers/ProfesseursControllers');
// on importe le controller stagiaire
router.get("/", (req, res) => { // on declare la route get
ProfesseursControllers.getAllProfesseurs(req, res);
});

router.get("/:id", (req, res) => {
    ProfesseursControllers.getProfesseursById(req, res);
    });

    router.post("/", (req, res) => {
        ProfesseursControllers.addProfesseurs(req, res);
        });


        router.put("/:id", (req, res) => {
            ProfesseursControllers.updateProfesseurs(req, res);
            });

            router.delete("/:id", (req, res) => {
                ProfesseursControllers.deleteProfesseurs(req, res);
                });
module.exports = router;
// on exporte le router