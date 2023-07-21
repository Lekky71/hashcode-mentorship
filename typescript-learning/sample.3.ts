/*

Padding = 3
Input = ‘threads’
return -> ‘   threads’


Padding = ‘do’
Input = ‘threads’
Return -> ‘dothreads’

 */

function padLeft(padding: number | string, input: string): string {
  if (typeof padding === 'number') { // type guard
    return ' '.repeat(padding) + input;
  } else {
    return padding + input;
  }
}

console.log(padLeft(3, 'threads'));
console.log(padLeft('do', 'threads'));
console.log(typeof padLeft);

// write a function that takes in a parameter of type string or boolean or function
// if the parameter is a string, return the string
// if the parameter is a boolean, return the boolean
// if the parameter is a function, call the function and return the result
type StringOrBooleanOrFunction = string | boolean | Function;

function returnStringOrBooleanOrFunction(param: StringOrBooleanOrFunction): string | boolean | any {
  // TS Narrowing does not work with switch statements.
  // const paramType = typeof param;
  // switch (paramType) {
  //   case 'string':
  //     return param.repeat(5);
  //   case 'boolean':
  //     return !param;
  //   case 'function':
  //     return param();
  // }

  if (typeof param === 'string') {
    return param.repeat(5);
  } else if (typeof param === 'boolean') {
    return !param;
  } else if (typeof param === 'function') {
    // console.log(param.toLowercase() + ' ' + param.toUppercase());
    // The above call will throw an error because TypeScript Narrowing knows that param is a function
    // and not a string in this IF block
    return param();
  }
}

// Truthiness
// Falsy values in JavaScript: false, 0, '', null, undefined, NaN
// Truthy values in JavaScript: everything else
const isOld = false;
if (!isOld) {
  const young = !isOld;
  console.log('You are not old');
}
const age = 0;
if (!age) { // => if(age === false)
  console.log(!age);
  console.log('You do not have an age');
}

// !variable
// It will find the data type and check if it is a falsy value for that data type
// Falsy values => false, 0, '', null, undefined, NaN
// Boolean => false
// Number => 0
// String => ''
// Object => null, undefined
// Function => undefined
// Symbol => undefined
// BigInt => 0n
// Truthy values => everything else
if (!5) {
  // if(5 === 0)
}

const name1: undefined = undefined;
if (!name1) { // => if(name1 === '') => if(name1 === null) => if(name1 === undefined)
  console.log('You do not have a name');
}

// if(variable) { checks if the variable is truthy }
const names1: string[] | undefined = undefined;
if(!!!!names1) { // !true
  console.log('Hello, my names are:');
}
