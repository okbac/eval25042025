const express = require('express');
// on importe express
require('dotenv').config();
// on importe le fichier .env
const app = express();
// on declare l'application express
const port = 3000;
// on declare le port
app.use(express.json());
// on declare le middleware pour parser le json
app.get('/', (req, res) => {
res.send('Hello World!');
});
// on declare la route racine
const ProfesseursRoute = require('./Routes/ProfesseursRoutes');
app.use('/Professeurs', ProfesseursRoute);
app.use((req, res) => {
res.status(404).json({ message: 'Route non trouvé' });
});

const EtudiantRoute = require('./Routes/EtudiantRoutes');
app.use('/Etudiant', EtudiantRoute);
app.use((req, res) => {
res.status(404).json({ message: 'Route non trouvé' });
});


const Professeurs = require('./Models/Professeurs');
const Etudiant = require('./Models/Etudiant');

// un professeur a plusieur étudiant
Professeurs.hasMany(Etudiant, {
    foreignKey: 'id_Professeurs',
  });
  
  // Un étudiant a un seul professeur
  Etudiant.belongsTo(Professeurs, {
    foreignKey: 'id_Professeurs',
  });


app.listen(port, () => {
console.log(`Votre serveur est lancé sur
http://127.0.0.1:${port}`);
});