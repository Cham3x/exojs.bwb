const lettre = 'ABCDEFGHJKLMNPQRSTUVWXYZ';
const nombre = '0123456789';
let plaque = "";
const plaques = []



function generateplaque(result) {
    while(result > 0){
        plaque="";
generateletter();
generatenumber();
generateletter();
plaques.push(plaque)
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


let result= window.prompt();
generateplaque(result);
alert (`voici `+plaques)
   



