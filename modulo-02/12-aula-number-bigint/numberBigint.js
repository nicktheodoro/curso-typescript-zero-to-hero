"use strict";
//                   <=====> Number/Bigint Type <=====>
// ==> Exemplos: number
let num1 = 23.0;
let num2 = 0x78cf;
let num3 = 0o577;
let num4 = 0b11001;
console.log(`${typeof num1} - Ponto Flutuante...:`, num1);
console.log(`${typeof num2} - Hexadecimal...:`, num2);
console.log(`${typeof num3} - Octal...:`, num3);
console.log(`${typeof num4} - Binário...:`, num4);
// ==> Exemplos: bigint
let big1 = 9007199254740991n;
let big2 = 9007199254740995n;
let big3 = 0x20000000000003n;
let big4 = 9007199254740995n;
console.log(`${typeof big1}...: `, big1);
console.log(`${typeof big2} - Binário...: `, big2);
console.log(`${typeof big3} - Hexadecimal...: `, big3);
console.log(`${typeof big4} - Octal...: `, big4);
