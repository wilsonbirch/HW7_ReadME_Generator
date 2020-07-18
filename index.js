const inquirer = require('inquirer');
const fs = require(`fs`);

// array of questions for user
const licenseList = [`Apache License 2.0`, `CCO 1.0`, `GNU GPL v3`, `MIT`, `Mozilla Public License 2.0`];
const licenseBadges = [`[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`,
                        `[![License: CC0-1.0](https://licensebuttons.net/l/zero/1.0/80x15.png)](http://creativecommons.org/publicdomain/zero/1.0/)`,
                        `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`,
                        `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`,
                        `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`]


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
    name: `usage`,
    message: `Enter any usage instructions`
},{
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

}, {
    type: `string`,
    name: `email`,
    message: `Enter your email`

}

];

// function to write README file
function writeToFile(fileName, data) {

    if (data.license === `Apache License 2.0`){

        var licenseBadge = licenseBadges[0];
        
    }   else if (data.license === `CCO 1.0`) {

        var licenseBadge = licenseBadges[1];
        
    }   else if (data.license === `GNU GPL v3`) {

        var licenseBadge = licenseBadges[2];
        
    }   else if (data.license === `MIT`) {

        var licenseBadge = licenseBadges[3];
        
    }   else {
        
        var licenseBadge = licenseBadges[4];
    }

    fs.writeFile(fileName + `.md`, `# `+ fileName +`\n`+ data.description + `\n## Table of Contents\n - [Installation](##Installation)\n - [Usage](##Usage)\n- [Contributions](##Contributing)\n- [Testing](##Testing)\n- [License](##License)\n- [Questions](##Questions)\n## Installation \n`+ data.installation + `\n## Usage \n`+ data.usage + `\n## Contributing \n`+ data.contributing + `\n## Testing \n`+ data.tests + `\n## License \n`+ data.license + ` ` + licenseBadge + `\n## Questions \n Github: github.com/`+ data.github + `\nEmail: ` + data.email, function (err){
        if (err) throw err;
    });

    //console.log(licenseBadge);

    

    
}

// function to initialize program
function init() {

    inquirer
        .prompt(questions)
        
        .then (a => {
            let fileName = a.title;
            writeToFile(fileName, a);
        });
};


// function call to initialize program

init();

