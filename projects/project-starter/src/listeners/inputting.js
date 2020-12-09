'use strict';

import { artifyHandler } from '../handlers/artify.js';

/**
 * @name user input
 * calls the reverseHandler when a user types in the input field
 */
document.getElementById('input').addEventListener('keyup', artifyHandler);
