function determinerTarif (age, anneesPermis, accidents, anneesCompagnie){

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
console.log(Imposable(imposable));

// 
let symbole = "*";
let s = 10 ;

for (let i = s; i > 0; i--) {
    let ligne = "";
    for (let j = 0; j < i; j++) {
        ligne += symbole;
    }
    console.log(ligne);
}
//
let l =6;
for (let i = 0 ; i <= l; i++) {
    let lignes = "";
    for (let j = 0; j < i; j++) {
        lignes += symbole;
    }
    console.log(lignes);
}
//