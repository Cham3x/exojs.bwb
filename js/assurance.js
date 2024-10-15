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


 // n=nombre copie; PT= p1+p2+p3; p1=n+pc; p2=n+pc; p3=n+pc;
let n = 25;
const pc1 = 0.10
const pc2 = 0.09
const pc3 = 0.08
 function prixTotal(){
   let PT = "";
    if (n<=10){
            PT= n * pc1 ;  
    }
    else if (n>10 && n <=30 ) {
        PT = ( pc1 * 10) + ( (n - 10) * pc2 );
    }
    else if  (n > 30) { 
        PT= ( 10 * pc1)+ (20 * pc2 ) + ((n-30) * pc);  
    }
    return PT.toFixed(2);
 }
prixTotal();
 console.log (prixTotal());

 //