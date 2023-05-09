// import fs module
const fs = require('fs');

//READ
function getPets() {
    // read from file to get existing pets
    let data = fs.readFileSync('pets.json');
    return data
};

//CREATE
function addNewPet(newPetObj) {
    // get pets from getPets function that reads from the file
    let currPets = JSON.parse(getPets());
    // add our new pet to the array of pets
    currPets.push(newPetObj);
    console.log(currPets);

    fs.writeFile('pets.json', JSON.stringify(currPets), (err) => {
        if (err) {
            console.error(err);
        } else {
            console.log('wrote the data successfully');
        }
    });
};

let newPet = {
    id: 3134,
    name: "Peach",
    owner: "Maja",
    animal: "Rat"
}

//addNewPet(newPet)

// TODO:
// 1. Skapa en funktion som uppdaterar ett djur i myPets.json
// UPDATE
// Pet to update
// let updatedPet = {
// id: 2
// name: Babe
// }

function updatePet(id, prop, value) {
    // Get the list of pets
    let currPets = JSON.parse(getPets());
    // Sort out the animal to update and change it
    let index = currPets.findIndex((pet) => pet.id === id);
    currPets[index][prop] = value;
    // console.log(currPets);
    // return the new list of pets with the updated pet
    currPets = JSON.stringify(currPets);
    // write to file
    fs.writeFile('pets.json', currPets, (err) => {
        if (err) {
            console.error(err);
        } else {
            console.log(JSON.parse(getPets()));
        }
    })
}

// updatePet(2, "owner", "Per Olsson");


// 2. Skapa en funktion som tar bort ett djur i myPets.json
function deletePet(id) {
    // hämta listan över djuren
    let currPets = JSON.parse(getPets());
    // hitta vilket index vårt djur ligger på
    let index = currPets.findIndex((pet) => pet.id === id);
    // använda oss av splice för att ta bort det ur listan
    if (index > -1) {
        currPets.splice(index, 1);
    }
    // uppdatera vår pets.json mha fs.writeFile
    fs.writeFile('pets.json', JSON.stringify(currPets), (err) => {
        if (err) {
            console.error(err);
        } else {
            console.log(JSON.parse(getPets()));
        }
    })
}
deletePet(314);