// array of questions for user
const questions = [

];

// function to write README file
function writeToFile(fileName, data) {

    
}

// function to initialize program
function init() {

    let inquirer = require('inquirer');

    inquirer.prompt([
        `What is the title of your README?`
    ])
    .then( titleAnswer => {
        console.log(titleAnswer);
    })
    .catch (error => {

        if(error.isTtyError) {
            //
        } else {
            //
        }
    });

}

// function call to initialize program
init();