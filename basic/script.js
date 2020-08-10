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

var total = 150900
Math.ceil(total / 1000) * 1000;

// —> Hasil 151000

// 151000 - 150900 = 100;  value nya adalah 100


/**
 *  Get Rid of duplicate value
 */
const arr = [1, 3, 4, 1, 2, 1]
const newArr = [...new Set(arr)] 
// [1, 3, 4, 2]
