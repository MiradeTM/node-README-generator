const util = require('util')
const fs = require('fs')
const inquirer = require('inquirer')

const writeFileAsync = util.promisify(fs.writeFile())

// array of questions for user
const questions = [{
    type: 'input',
    message: 'What is the title of your project?',
    name: 'title'
},
{
    type: 'input',
    message: 'Please provide a brief description of your project.',
    name: 'description'
},
{
    type: 'input',
    message: 'Please provide steps to run your project.',
    name: 'install'
},
{
    type: 'input',
    message: 'Please provide instructions and/or examples for using your application.',
    name: 'usage'
},
{
    type: 'input',
    message: 'Please provide GitHub usernames of collaborators/contributors.',
    name: 'credit'
},


];

// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {
    for (const question of questions){
        inquirer.prompt(question)
    }

}

// function call to initialize program
init();
