'use strict';

/**
 * reverses a string
 * @param {string} input - a string to reverse
 * @returns {string} the string reversed
 */
export const reverseLogic = text => {
  return text
    .split('')
    .reverse()
    .join('');
};
