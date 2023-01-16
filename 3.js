// HARUS GUNAKAN KEDUA VARIABEL DIBAWAH INI
let password = "asd#@V13SSD";
let specialCharacter = "~!@#$%^&";

// // write your code here
let num = '0123456789';
let alf = 'aAbBcCdDeEfFgGhHiIjJkKlLmMnNoOpPqQrRsStTuUvVwWxXyYzZ';
let number = false
let huruf = false
let character = false
let result;

for (let i = 0; i < password.length; i++) {

    // cek special character
    for (let j = 0; j < specialCharacter.length; j++) {
        if (password[i] === specialCharacter[j]) {
            character = true
            break;
        }
    }

    // cek number
    for (let j = 0; j < alf.length; j++) {
        if (password[i] === num[j]) {
            number = true
            break;
        }
    }

    // cek huruf    
    for (let l = 0; l < alf.length; l++) {
        if (password[i] === alf[l]) {
            huruf = true
            break;
        }
    }
}

//FINISHING
if (huruf) {
   if (number && character) {
       result = `password high`;
   } else if (number || character) {
       result = `password medium`;
   } else {
       result = `password low`
   }
}

// //DISPLAY RESULT
// console.log(result);


let input = 'Aa&eg'

if (input.toLowerCase !== input.toUpperCase) {
    console.log(input, "terdapat huruf");
} else {
    console.log(input, "tidak terdapat huruf");
}