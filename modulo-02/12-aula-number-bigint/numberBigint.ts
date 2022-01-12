//                   <=====> Number/Bigint Type <=====>

// ==> Exemplos: number

let num1: number = 23.0;
let num2: number = 0x78cf;
let num3: number = 0o577;
let num4: number = 0b11001;

console.log(`${typeof num1} - Ponto Flutuante...:`, num1);
console.log(`${typeof num2} - Hexadecimal...:`, num2);
console.log(`${typeof num3} - Octal...:`, num3);
console.log(`${typeof num4} - Binário...:`, num4);

// ==> Exemplos: bigint

let big1: bigint = 9007199254740991n;
let big2: bigint = 0b100000000000000000000000000000000000000000000000000011n;
let big3: bigint = 0x20000000000003n;
let big4: bigint = 0o400000000000000003n;

console.log(`${typeof big1}...: `, big1);
console.log(`${typeof big2} - Binário...: `, big2);
console.log(`${typeof big3} - Hexadecimal...: `, big3);
console.log(`${typeof big4} - Octal...: `, big4);
