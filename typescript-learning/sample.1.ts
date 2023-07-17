let x1: number;
// let name: string;
let isStudent: boolean;

let names: string[] = ['Liberty', 'Bolu', 'Honour'];
const numbers: number[] = [1, 2, 3, 4, 5];
const bools: boolean[] = [true, false, true];

const diffElements: (string | number | boolean)[] = [1, 2, 4, 'Hashcode', false, false, 'Liberty', true];
x1 = 5;

// x1 = 'hello';
x1 = 90;
// x1.includes('a');

const student = {
  matricNumber: 'U2015/3020001',
  name: 'Liberty',
  toLowercase() {
    return this.name.toLowerCase() + ' ' + this.matricNumber.toLowerCase();
  }
};
console.log(student.name);
console.log(student.toLowercase());
// Compile time -> when code is being transformed to machine language
// Runtime -> when the machine language code is being executed/ran
// You can represent primitive types in typescript with small letters, e.g number, string, boolean
// You can represent non-primitive types in typescript with capital letters, e.g Date, Object, Function

const currentDate = new Date();

console.log(currentDate.toDateString());

let x2; // any

x2 = 'hello';
x2 = 90;
x2 = true;
