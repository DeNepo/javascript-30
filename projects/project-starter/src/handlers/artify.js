'use strict';

import { data } from '../data.js';
import { reverseLogic } from '../logic/reverse.js';

/**
 * creates a mirror-image rendering of the user input and displays the growing artwork
 * @param {Event} event - triggered whenever a user releases a key in the input area
 */
export const artifyHandler = (event) => {
  console.log('-- artify handler --');

  // ignore the event if the user is correcting a mistake
  if (event.keyCode === 8 || event.keyCode === 46) {
    return;
  }

  const target = event.target;

  // remove newlines from the input value
  //  keeps things pretty for the art
  //  and allows user to use enter to submit the same input unchanged
  if (event.keyCode === 13) {
    target.value = target.value.split('\n').join('');
  }

  const userInput = target.value;
  console.log('userInput:', typeof userInput, userInput);

  const reversedInput = reverseLogic(userInput);
  console.log('reversedInput:', typeof reversedInput, reversedInput);

  const message = `${userInput} ${data.separator} ${reversedInput}\n`;
  console.log('message:', typeof message, message);

  document.getElementById('output').innerHTML += message;
};
