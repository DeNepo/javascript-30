'use strict';

import { data } from '../data.js';

/**
 * changes the program's separator value
 * @param {Event} event - triggered whenever a user types in the separator input area
 */
export const changeSeparatorHandler = (event) => {
  console.log('-- change separator handler --');

  data.separator = event.target.value;
  console.log('data:', data);
};
