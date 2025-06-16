const namaTeman = "Marwan Mariawan Saladin";
let usia = 18

function generateBiodata() {
    if (usia >= 18) { //true
      // ini adalah kondisi pertama
      console.log('anda dapat mengakses ini');
    } else {
      // ini adalah kondisi tidak terpenuhi  
      console.log('nyari apa disini lu dek'); 
    }
}

console.log(namaTeman);
console.log(usia);

generateBiodata();