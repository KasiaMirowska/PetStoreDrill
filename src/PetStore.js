
'use strict'



export default class PetStore {
    constructor(pets){
        this.pets = petStore.pets;
    }

    searchForPet(){
        this.adoptablePets = this.pets.filter(pet => pet.adopted === false);
        console.log(this.adoptablePets)
        return this.adoptablePets;
    }
    
}

const petStore = {
    pets: [
        {petName: 'Cinna', adopted: false}, 
        {petName: 'Myszka', adopted: true}, 
        {petName: 'Leo', adopted: false}, 
        {petName: 'Kelti', adopted: true}, 
        {petName: 'Franky', adopted: false}, 
        {petName: 'Muffin', adopted: false}, 
        {petName: 'Fluffy', adopted:true}, 
        {petName: 'Berniska', adopted: false},  
        {petName: 'Puszek', adopted: false}, 
        {petName: 'Zuzia', adopted: false}, 
        {petName: 'Kedji', adopted: false}, 
        {petName: 'Scout', adopted: false}, 
        {petName: 'Roger', adopted: false}, 
        {petName: 'Humphrey', adopted: false}, 
        {petName: 'Ciapek', adopted: false}, 
        {petName: 'Champ', adopted: false}
    ]
}