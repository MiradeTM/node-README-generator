const fs = require('fs')
const inquirer = require('inquirer')
const generateMarkdown = require('./utils/generateMarkdown.js')
const path = require('path')


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
    message: 'Please provide GitHub usernames of collaborators/contributors separated by commas.',
    name: 'credit'
},
{
    type: 'list',
    message: 'What license are you using?',
    choices: ['Apache', 'MIT', 'GPL', 'None'],
    name: 'license'
},
{
    type: 'input',
    message: 'Provide information on how to test project.',
    name: 'test'
},
{
    type: 'input',
    message: 'If there are questions on your project, how can you be contacted?',
    name: 'contact'

}

];

// function to write README file
function writeToFile(fileName, data) {
   // fs.writeFile()
   fs.writeFileSync(path.join(process.cwd(), fileName), data)
}

// function to initialize program
function init() {
       inquirer.prompt(questions).then(data => {
           console.log(data);
            writeToFile('README.md', generateMarkdown(data))
            
       })
    

}

// function call to initialize program
init();
