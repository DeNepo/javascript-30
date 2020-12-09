'use strict';

import { changeSeparatorHandler } from '../handlers/change-separator.js';

/**
 * @name change separator
 * calls handler that changes the mirror-art's separator
 */
document
  .getElementById('separator-input')
  .addEventListener('keyup', changeSeparatorHandler);
