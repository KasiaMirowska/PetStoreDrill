
'use strict'

import cuid from 'cuid'

export default class PetStore {
    constructor(pets){
        this.pets = petStore.pets;
    }

    searchForPet(){
        this.adoptablePets = this.pets.filter(pet => pet.adopted === false);
        return this.adoptablePets;
    }
    
}

const petStore = {
    pets: [
        {id: cuid(), petName: 'Cinna', adopted: false}, 
        {id: cuid(), petName: 'Myszka', adopted: true}, 
        {id: cuid(), petName: 'Leo', adopted: false}, 
        {id: cuid(), petName: 'Kelti', adopted: true}, 
        {id: cuid(), petName: 'Franky', adopted: false}, 
        {id: cuid(), petName: 'Muffin', adopted: false}, 
        {id: cuid(), petName: 'Fluffy', adopted:true}, 
        {id: cuid(), petName: 'Berniska', adopted: false},  
        {id: cuid(), petName: 'Puszek', adopted: false}, 
        {id: cuid(), petName: 'Zuzia', adopted: false}, 
        {id: cuid(), petName: 'Kedji', adopted: false}, 
        {id: cuid(), petName: 'Scout', adopted: false}, 
        {id: cuid(), petName: 'Roger', adopted: false}, 
        {id: cuid(), petName: 'Humphrey', adopted: false}, 
        {id: cuid(), petName: 'Ciapek', adopted: false}, 
        {id: cuid(), petName: 'Champ', adopted: false}
    ]
}