'use strict';

import chai from 'chai';
const expect = chai.expect;

import { reverseLogic } from './reverse.js';

describe('reverseLogic reverses a string', () => {
  it('"toads" -> "sdaot"', () => {
    expect(reverseLogic('toads')).to.equal('sdaot');
  });
  it('"sdaot" -> "toads"', () => {
    expect(reverseLogic('sdaot')).to.equal('toads');
  });
});
