'use strict'

import $ from 'jquery';
import PetStore from './PetStore'

import PetDisplay from './PetDisplay';

function main() {
  console.log('DOM is loaded');

  const startMsg = $('<p>Webpack is working!</p>');
  $('#root').append(startMsg);
}

$(main);
let petList = new PetStore();
petList.searchForPet();
let display = new PetDisplay();
display.generateList();
display.handleList();
console.log(display);



