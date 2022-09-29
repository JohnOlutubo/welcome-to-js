'use strict';

console.log('--- in execution phase ---');

/*
  environment:

  name:
  message:

  location:

  life cycle:

  the mistake: declaring the same var twice

  the fix(es): remove the second let and just assign on line 22
*/

let tree = 'oak';

tree = 'birch';
