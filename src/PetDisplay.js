'use strict';
import $ from 'jquery';

import PetStore from './PetStore'



export default class PetDisplay {
    constructor(){
        this.petStore = new PetStore();
    }
    
    filterPets(){
        this.list = this.petStore.searchForPet()
    }
    generateList(){
        this.filterPets();
        const pet = this.list
                    .map(pet => `<li id='${pet.id}'>${pet.petName} 
                                    <button id='adopt' type='button'>Adopt me!</button>
                                    </li>`).join('')
        return (
            `<ul>
                <h3>Pets waiting for parents</h3>
                ${pet}
            </ul>`
        )
    }
   
    handleList(){
        const list = this.generateList();
        $('#search').on('click', e => {
            e.preventDefault();
            $('.display-list').html(list);
        })
    }
    findById(id){
        return this.list.find(pet => pet.id === id)
    }
    handleAdoptionClick(){
        $('.display-list').on('click', '#adopt',e => {
            e.preventDefault();
            
            let adoptedPetId = $(e.target).parent().attr('id')
            let adoptedPet = this.findById(adoptedPetId) 
            adoptedPet.adopted = true;
            this.filterPets();
            $('.display-list').text(`congratulations! ${adoptedPet.petName} is your pet`)
            
            
        })
    }
   
}