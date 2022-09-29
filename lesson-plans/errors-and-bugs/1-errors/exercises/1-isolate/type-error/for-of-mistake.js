'use strict';

console.log('--- in execution phase ---');

/*
  environment:

  name:
  message:

  location:

  life cycle:

  the mistake: using a number instead of string

  the fix(es): change it string
*/

const maxNumber = "6ghfhfghf";

for (const i of maxNumber) {
  console.log(i); // 0, 1, 2, 3, 4, 5
}
