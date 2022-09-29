'use strict';

console.log('--- in execution phase ---');

/*
  environment: chrome

  name: ReferenceError
  message: Cannot access 'tomatoes' before initialization

  location: line 20, col 13

  life cycle: in execution phase

  the mistake: calling the var before init

  the fix(es): initialize before calling
*/
let tomatoes = 'fresh';
console.log(tomatoes);


