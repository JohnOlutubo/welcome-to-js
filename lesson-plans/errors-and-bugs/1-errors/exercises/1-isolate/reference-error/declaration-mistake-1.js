'use strict';

console.log('--- in execution phase ---');

/*
  environment:chrome browser

  name: ReferenceError
  message: welf is not defined

  location: Line 20, column 6

  life cycle: in execution phase

  the mistake: we forgot to nitialize the variable welf

  the fix(es): to init welf
*/

let welf = 'ingrad';

console.log(welf);
