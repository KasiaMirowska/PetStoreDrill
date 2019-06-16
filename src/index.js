'use strict'

import $ from 'jquery';
import PetDisplay from './PetDisplay';

function main() {
  let display = new PetDisplay();
  display.handleList();
  display.handleAdoptionClick();
  console.log(display)
}

$(main);




