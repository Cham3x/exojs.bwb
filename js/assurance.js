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
/*  let prixCopie = ('i');
function prixTotal (nombreCopie, prixCopie) {
    let prix =  nombreCopie * prixCopie;
    
    if (nombreCopie <=10 ){
      ( i = '0.10');
    }
    if ((nombreCopie > 10 ) || (nombreCopie <=30 )){
        prixCopie = '0.09';
    }
    if (nombreCopie>30){
        prixCopie =  '0.08';
    }
    console.log(prix);
return prix;
}
 let nombreCopie = 25;


 console.log ( prixTotal(nombreCopie,prixCopie)); */


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
        PT= ( P1 * pc1)+ (P2 * pc2 ) + ((n-(P1 + P2)) * pc3);  
    }
    return PT.toFixed(2);
 }
prixTotal();
 console.log (prixTotal());

 //