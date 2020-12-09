'use strict';

// import all listener files so they can attach to the DOM
import './listeners/inputting.js';
import './listeners/change-separator.js';

// does your project have code that executes when the document or window are ready?
// that code can go here

import { data } from './data.js';

document.getElementById('separator-input').value = data.separator;
