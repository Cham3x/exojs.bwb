/* const lettre = 'ABCDEFGHJKLMNPQRSTUVWXYZ';
const nombre = '0123456789';
let plaque = "";
const plaques = [];


function generateplaque(result) {
    while(result > 0){
        plaque="";
generateletter();
generatenumber();
generateletter();
plaques.push(plaque);
console.log(plaque);
result--;
}
}
function generateletter(){  
    for (let i=0 ; i<2;i++) {
plaque += lettre.charAt(Math.floor( Math.random() * lettre.length));
}}
function generatenumber() {
    plaque += "-";
for (let i=0 ; i<3;i++) {
    plaque += nombre.charAt(Math.floor( Math.random() * nombre.length));
    }
plaque += "-";
}
let result= window.prompt('Combien de plaque voulez vous?');
generateplaque(result);
alert ('voici'+plaques)
   

 */
/* const lettre = 'ABCDEFGHJKLMNPQRSTUVWXYZ';
const nombre = '0123456789';
let plaque = "";
const plaques = [];

function generateplaque(result) {
    while(result > 0){
        plaque = "";
        generateletter();
        generatenumber();
        generateletter();
        plaques.push(plaque);
        result--;
    }
    displayPlaques();
}

function generateletter(){ 
    for (let i = 0; i < 2; i++) {
        plaque += lettre.charAt(Math.floor(Math.random() * lettre.length));
    }
}

function generatenumber() {
    plaque += "-";
    for (let i = 0; i < 3; i++) {
        plaque += nombre.charAt(Math.floor(Math.random() * nombre.length));
    }
    plaque += "-";
}

function displayPlaques() {
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = plaques.join('<br>');
}

let result = window.prompt('Combien de plaques voulez-vous?');
generateplaque(result);

 */
// Déclaration des constantes pour les lettres et les chiffres utilisés dans les plaques
const lettre = 'ABCDEFGHJKLMNPQRSTUVWXYZ';
const nombre = '0123456789';
let plaque = ""; // Variable temporaire pour stocker une plaque en cours de génération
const plaques = new Set(); // Utilisation d'un Set pour garantir l'unicité des plaques

/**
 * Fonction principale pour générer un nombre spécifié de plaques uniques
 * @param {number} result - Le nombre de plaques à générer
 */
function generateplaque(result) {
    plaques.clear(); // Réinitialiser les plaques
    while(result > 0){
        plaque = ""; // Réinitialiser la plaque temporaire
        generateletter(); // Générer les lettres initiales
        generatenumber(); // Générer les chiffres
        generateletter(); // Générer les lettres finales
        if (!plaques.has(plaque)) { // Vérifier si la plaque est unique
            plaques.add(plaque); // Ajouter la plaque au Set
            result--; // Décrémenter le compteur de plaques à générer
        }
    }
    displayPlaques(); // Afficher les plaques générées
}

/**
 * Fonction pour générer deux lettres aléatoires et les ajouter à la plaque
 */
function generateletter(){ 
    for (let i = 0; i < 2; i++) {
        plaque += lettre.charAt(Math.floor(Math.random() * lettre.length));
    }
}

/**
 * Fonction pour générer trois chiffres aléatoires entourés de tirets et les ajouter à la plaque
 */
function generatenumber() {
    plaque += "-";
    for (let i = 0; i < 3; i++) {
        plaque += nombre.charAt(Math.floor(Math.random() * nombre.length));
    }
    plaque += "-";
}

/**
 * Fonction pour afficher les plaques générées dans un élément HTML <ul>
 */
function displayPlaques() {
    const resultUl = document.getElementById('result');
    resultUl.innerHTML = Array.from(plaques).map(plaque => `<li>${plaque}</li>`).join('');
}

// Ajouter un écouteur d'événement pour le formulaire pour générer les plaques à la soumission
document.getElementById('plaqueForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Empêcher le rechargement de la page
    const plaqueCount = document.getElementById('plaqueCount').value; // Récupérer le nombre de plaques à générer
    generateplaque(plaqueCount); // Appeler la fonction pour générer les plaques
});
0