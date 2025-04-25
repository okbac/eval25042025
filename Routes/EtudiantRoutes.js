const express = require('express');
// on importe express
const router = express.Router();
// on declare le router
const EtudiantControllers =
require('../Controllers/EtudiantControllers');
// on importe le controller stagiaire
router.get("/", (req, res) => { // on declare la route get
EtudiantControllers.getAllEtudiant(req, res);
});

router.get("/:id", (req, res) => {
    EtudiantControllers.getEtudiantById(req, res);
    });

    router.post("/", (req, res) => {
        EtudiantControllers.addEtudiant(req, res);
        });


        router.put("/:id", (req, res) => {
            EtudiantControllers.updateEtudiant(req, res);
            });

            router.delete("/:id", (req, res) => {
                EtudiantControllers.deleteEtudiant(req, res);
                });
module.exports = router;