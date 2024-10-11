const lettre = 'ABCDEFGHJKLMNPQRSTUVWXYZ';
const nombre = '0123456789';
let plaque = "";



function generateplaques(result) {
   // let result = 50;
    while(result > 0){
        plaque="";
generateletter();
generatenumber();
generateletter();
console.log(plaque);
result--;
}
}
function generateletter(){  
    //let plaque="";
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
generateplaques(result) ;
   



/* console.log(result); */
/* generateplaques(); */
//console.log(generateplaques());