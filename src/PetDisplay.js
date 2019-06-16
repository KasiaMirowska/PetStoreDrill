'use strict';
import $ from 'jquery';
import PetStore from './PetStore'



export default class PetDisplay {
    constructor(){
        this.petStore = new PetStore();
        this.list = this.petStore.searchForPet()
    }

    generateList(){
        const pet = this.list.map(pet => `<li>${pet.petName}</li>`).join('')
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
    
   
}