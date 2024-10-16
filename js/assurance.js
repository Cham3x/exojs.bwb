/* function determinerTarif (age, anneesPermis, accidents, anneesCompagnie){

    let tarif ="";
    console.log(tarif);

    // age -25 ans et permis - 2 ans 
    if (age <= 25 && anneesPermis < 2){
        tarif = accidents === 0 ? 'D' : 'Refusé';
    }

    // age -25 permis +2 et age +25 permis -2
    else if ((age <= 25 && anneesPermis >= 2) || (age > 25 && anneesPermis < 2)){
        if (accidents === 0) {
            tarif = 'C';
        }
        else if (accidents === 1){
            tarif = 'D';
        }
        else {
            tarif = 'Refusé';
        }
    }
        // age +25 et permis +2
        else if (age >= 25 && anneesPermis >= 2){
            
            if (accidents === 0){
                tarif = 'B';
            }
            else if (accidents === 1){
                tarif = 'C';
            }
            else if (accidents === 2 ){
                tarif = 'D';
            }
            else {
                tarif = 'Refusé';
            }
        }
               
        // acienneté >1
        if (tarif !== 'refusé' && anneesCompagnie > 1){
        
            if ( tarif === 'B'){
                tarif = 'A';
            }
            else if ( tarif === 'C' ){
                tarif = 'B';
            }
            else if ( tarif === 'D'){
                tarif ='C';
            }
        }
    return tarif;
}
let anneesCompagnie = 2;
let accidents = 0;
let anneesPermis = 1;
let age = 25;

console.log (determinerTarif(age, anneesPermis, accidents, anneesCompagnie));

 // 
let n = 35; // nombre de copie
let pc1 = 0.10 ; let pc2 = 0.09 ; let pc3 = 0.08; // prix des palier de reduction
let P1 = 10 ; let P2= 20; // palier de reduction

 function prixTotal(){
   let PT = "";
    if (n<=10){
            PT= n * pc1 ;  
    }
    else if (n>10 && n <=30 ) {
        PT = ( pc1 * P1) + ( (n - P1) * pc2 );
    }
    else if  (n > 30) { 
        PT= ( P1 * pc1) + (P2 * pc2 ) + ((n-(P1 + P2)) * pc3);  
    }
    return PT.toFixed(2);
 }
prixTotal();
 console.log (prixTotal());

 //
 let imposable = "";
 let sexe = "femme"; 
 let Age = 36 ;
function Imposable(imposable){
    if (( sexe === "homme" && Age >= 18) || ( sexe === "femme" && Age >= 18 && Age <= 35 )){
        imposable = "oui";
    }
    else {
        imposable = "non";
    }
    return imposable;
}
Imposable(imposable);
console.log(Imposable(imposable)); */

// 
/* let symbole = "*";
let s = 10 ;

for (let i = s; i > 0; i--) {
    let ligne = "";
    for (let j = 0; j < i; j++) {
        ligne += symbole;
    }
    console.log(ligne);
} */
//
/* let l =6;
for (let i = 0 ; i < l; i++) {
    let lignes = "";
    for (let j = 0; j <= i; j++) {
        lignes += symbole;
    }
    console.log(lignes);
} */
//
/* let symbole = "*";
let s = 10;

for (let i = s; i > 0; i--) { // Boucle extérieure pour les lignes
    let ligne = "";
    for (let j = s; j >= i; j--) { // Boucle intérieure avec décrémentation
        ligne += symbole; // Concaténation des étoiles
    }
    console.log(ligne); // Affichage de chaque ligne
} */
// test pour comprendre la generation et la completion aleaoire d'un tableau
/* // Créer un tableau de 36 éléments
let array = new Array(36);

// Créer une liste des lettres de l'alphabet
let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');

// Fonction pour mélanger le tableau
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// Mélanger la liste des lettres de l'alphabet
let shuffledAlphabet = shuffle(alphabet);

// Remplir le tableau avec les lettres aléatoires
for (let i = 0; i < array.length; i++) {
    array[i] = shuffledAlphabet[i % shuffledAlphabet.length];
}
 
console.log(array);*/
// rechercher x dans t dance cas me suis servie du test du dessus 
/* let x = 'a';
function recherche(){
    let t = array;
    let indices = [];
    let index = t.indexOf(x);
    while (index != -1) {
      indices.push(index);
      index = t.indexOf(x, index + 1);
    }
    console.log(indices);
}
recherche()
 */
/* // dans ce cas on reche x dans t qui a était generer manuellement
 let x = '72';
 let t = ["g", "b", "g", "c", "s", "5", "x","72", "x","cd","36","72"]
function recherche(){
    let indices = [];
    let index = t.indexOf(x);
    while (index != -1) {
      indices.push(index);
      index = t.indexOf(x, index + 1);
    }
    console.log(indices);
}
recherche() */
// tri a bulle
/* let liste = [5,13,2,75,6,72,1,99,0,370,0.1,0.5,2.6,7]
console.log(liste)
function bulle(){
    for (let i = 0; i < liste.length; i++){
        for ( let j = 0; j < liste.length - 1; j++){
            if ( liste[j] > liste[j + 1]){
                let temp = liste[j];
                liste[j] = liste[j + 1];
                liste[j + 1] = temp;
            }
        }
    }
}
bulle()
console.log(liste) */