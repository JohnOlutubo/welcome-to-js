import {
  whenFormDataChanges,
  readString,
  displayString,
} from '../../../../../../../lib/dom-io/index.js';

whenFormDataChanges('input', () => {
  // debugger;
  console.log('--- form data changed ---');

  // --- read the user's input ---

  let bricks = readString('pyramid-bricks');

  // --- build a pyramid ---

  let pyramid = '';
  let word = '';
  for (let i of bricks) {
    word += i;
    pyramid += '\n' + word ;
  }

  // --- display the pyramid ---

  displayString('out', pyramid);
});
