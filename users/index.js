// node file system (fs) module is imported
const fs = require('fs');
// readline module importation
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

// asynchronous reading
// READ
fs.readFile('users.json', (err, data) => {
    if (err) {
        return console.error(err);
    }
    addNewUser(JSON.parse(data));
});

async function addNewUser(usersList) {
    let newName = "";

    function askQuestion() {
        return new Promise((resolve, reject) => {
            readline.question("What's your name? ", (answer) => {
                resolve(answer);
            });
        });
    };
    newName = await askQuestion();
    readline.close()

    //console.log(usersList);
    let newUser = {
        id: usersList.length + 1,
        name: newName
    };
    usersList.push(newUser);
    //console.log('added user in array: ------ ', usersList);
    // write new data to users.json file
    //CREATE
    fs.writeFile('users.json', JSON.stringify(usersList), (err) => {
        if (err) {
            return console.error(err);
        }
        fs.readFile('users.json', (err, data) => {
            if (err) {
                console.error(err);
            }
            console.log('added user in file -----', data.toString());
        })

    })
};

// erase user
// step 1: read user file
// step 2: find user to erase
// step 3: erase user from list
// step 4: write new list to file

// update user
// step 1: read user file
// step 2: find user to update
// step 3: update user from list
// step 4: write new list to file