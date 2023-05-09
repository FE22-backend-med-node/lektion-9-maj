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

addNewPet(newPet)