console.log('awdawdaw adkkaawkaw')
 let name = 'derry'


/**
 * Type Coercion
 */

let firstName = 'Derry';
let age = 20;

console.log(age + ' ' + age); 
 // hasilnya Derry 20, tapi age yang type datanya number ikut berubah jadi string
 // karena type coercion


//  Fitur Toped bulatkan tagihan
// Math.ceil = Bulatkan ke atas eg: (1.4) diprint hasilnya 2
var total = 150900;
var amount = Math.ceil(total / 1000) * 1000;
// —> Hasil 151000
// 151000 - 150900 = 100;  value nya adalah 100
console.log(amount)

/**
 *  Get Rid of duplicate value
 */
const arr = [1, 3, 4, 1, 2, 1]
const newArr = [...new Set(arr)] 
// [1, 3, 4, 2]


// Divided a string into 2
function divideStringTwo(str) {
  let mid = Math.floor(str.length/2);
  leftPart = str.substring(0, mid); // Get first array start from  index 0 to index 8;
  rightPart = str.substring(mid); // Take the rest
  return [leftPart, rightPart];
}

console.log(divideStringTwo('imgonnabedivided'))