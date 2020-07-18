const inquirer = require('inquirer');
const fs = require(`fs`);

// array of questions for user
const licenseList = [`Apache License 2.0`, `GPL`, `LGPL`, `MIT`, `Mozilla Public License 2.0`,`Common Development Distribution License`];


const questions = [{
    type: `string`,
    name: `title`,
    message: `What is the title of your README?`
}, {
    type: `string`,
    name: `description`,
    message: `Enter a description of your project`
}, {
    type: `string`,
    name: `installation`,
    message: `Enter any installation instructions`
}, {
    type: `string`,
    name: `contributing`,
    message: `Enter any contribution instructions`
}, {
    type: `string`,
    name: `tests`,
    message: `Enter any test instructions`
}, {
    type: `list`,
    name: `license`,
    message: `Choose this projects license`,
    choices: licenseList

}, {
    type: `string`,
    name: `github`,
    message: `Enter your Github username`

}

];

// function to write README file
function writeToFile(fileName, data) {

    
}

// function to initialize program
function init() {
    inquirer
        .prompt(questions)
        
        .then (a => {

            console.log(a);
        });

};


// function call to initialize program
init();